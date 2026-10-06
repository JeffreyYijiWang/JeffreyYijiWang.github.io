import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          <strong>Jeffrey Wang</strong>
          <span>Computer science, art, graphics, and interactive systems.</span>
        </p>
        <nav aria-label="Footer">
          <Link to="/graphics">Graphics</Link>
          <Link to="/experience">Experience</Link>
          <a href="mailto:jw8@andrew.cmu.edu">Email</a>
        </nav>
        <small>© {new Date().getFullYear()} Jeffrey Wang</small>
      </div>
    </footer>
  );
}
