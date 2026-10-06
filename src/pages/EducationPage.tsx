import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { courses } from '../data/profile';

export default function EducationPage() {
  return (
    <>
      <Seo
        title="Education — Jeffrey Wang"
        description="Jeffrey Wang studies computer science and art with a concentration in computer graphics and systems engineering at Carnegie Mellon University."
        path="/education"
      />
      <div className="content-wrap page-intro timeline-page">
        <h1 className="page-title section-title">Education</h1>
        <p className="page-lede">Where and what I’ve been studying.</p>
        <ol className="timeline-list education-list">
          <li>
            <Reveal>
              <article className="timeline-card education-card">
                <img
                  src="/assets/img/cmu-wordmark.png"
                  alt="Carnegie Mellon University wordmark"
                  width="112"
                  height="112"
                />
                <div className="timeline-card__content">
                  <header>
                    <div>
                      <h2>Carnegie Mellon University</h2>
                      <p className="role">Bachelor of Science, Computer Science and Art</p>
                      <p className="concentration">
                        Concentration in Computer Graphics and System Engineering
                      </p>
                    </div>
                    <p className="timeline-meta">
                      <span>Aug 2023 – May 2027</span>
                      <span>Pittsburgh, PA</span>
                    </p>
                  </header>
                  <section className="coursework" aria-labelledby="coursework-title">
                    <h3 id="coursework-title">Relevant Coursework</h3>
                    <ul>
                      {courses.map((course) => (
                        <li key={course.code}>
                          <p className="course-title">
                            <span className="tag">{course.code}</span>
                            <strong>{course.name}</strong>
                          </p>
                          <p>{course.description}</p>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </article>
            </Reveal>
          </li>
          <li>
            <Reveal>
              <article className="timeline-card education-card">
                <img
                  src="/assets/img/coppell-badge.png"
                  alt="Coppell High School badge"
                  width="112"
                  height="112"
                  loading="lazy"
                />
                <div className="timeline-card__content">
                  <header>
                    <div>
                      <h2>Coppell High School</h2>
                      <p className="role">Top 1% · Rank 4 of 946</p>
                    </div>
                    <p className="timeline-meta">
                      <span>Aug 2019 – May 2023</span>
                      <span>Coppell, TX</span>
                    </p>
                  </header>
                  <p>
                    Greater Dallas Youth Orchestra, Scouts of America, National Art Honor Society,
                    and Red Jacket Student Ambassador.
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        </ol>
      </div>
    </>
  );
}
