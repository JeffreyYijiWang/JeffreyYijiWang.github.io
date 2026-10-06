import { ExternalLink } from '../components/ExternalLink';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { experiences } from '../data/profile';

export default function ExperiencePage() {
  const current = experiences.filter((item) => item.current);
  const previous = experiences.filter((item) => !item.current);

  const renderGroup = (label: string, items: typeof experiences) => (
    <section className="timeline-group" aria-labelledby={`${label.toLowerCase()}-title`}>
      <h2 className="group-title" id={`${label.toLowerCase()}-title`}>
        {label}
      </h2>
      <ol className="timeline-list">
        {items.map((item) => (
          <li key={`${item.organization}-${item.role}`}>
            <Reveal>
              <article className="timeline-card">
                <img src={item.logo} alt={item.logoAlt} width="112" height="112" loading="lazy" />
                <div className="timeline-card__content">
                  <header>
                    <div>
                      <h3>{item.organization}</h3>
                      <p className="role">{item.role}</p>
                    </div>
                    <p className="timeline-meta">
                      <span>{item.dates}</span>
                      <span>{item.location}</span>
                    </p>
                  </header>
                  <ul>
                    {item.bullets.map((bullet, index) => (
                      <li key={index}>
                        {typeof bullet === 'string' ? (
                          bullet
                        ) : (
                          <>
                            {bullet.before}
                            <ExternalLink href={bullet.href}>{bullet.label}</ExternalLink>
                            {bullet.after}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );

  return (
    <>
      <Seo
        title="Experience — Jeffrey Wang"
        description="Software engineering, teaching, graphics, and product-development experience at Carnegie Mellon, ScottyLabs, and partner organizations."
        path="/experience"
      />
      <div className="content-wrap page-intro timeline-page">
        <h1 className="page-title section-title">Experience</h1>
        <p className="page-lede">Where and how I’ve been involved.</p>
        {renderGroup('Current', current)}
        {renderGroup('Previous', previous)}
      </div>
    </>
  );
}
