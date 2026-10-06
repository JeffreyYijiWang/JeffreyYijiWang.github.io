import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  );

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const apply = () => {
      document.documentElement.dataset.theme = next;
      localStorage.setItem('theme', next);
      setTheme(next);
    };

    if (
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      document.startViewTransition
    ) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'is-active' : undefined);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${compact ? 'is-compact' : ''}`}>
      <div className="site-header__inner">
        <Link className="site-logo" to="/" aria-label="Jeffrey Wang, home" onClick={closeMenu}>
          Jeffrey Wang
        </Link>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            <li>
              <Link
                to="/"
                className={
                  location.pathname === '/' && location.hash !== '#projects'
                    ? 'is-active'
                    : undefined
                }
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={location.hash === '#projects' ? 'is-active' : undefined}
                to="/#projects"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <NavLink to="/graphics" className={navClass} onClick={closeMenu}>
                Graphics
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className={navClass} onClick={closeMenu}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" className={navClass} onClick={closeMenu}>
                Education
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
