import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../components/Icons';
import { Seo } from '../components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found — Jeffrey Wang"
        description="The requested page could not be found."
        path={window.location.pathname}
      />
      <div className="content-wrap not-found">
        <p className="eyebrow">404</p>
        <h1>That page isn’t in the portfolio.</h1>
        <p>The route may have changed, or the link may be incomplete.</p>
        <Link className="back-link" to="/">
          <ArrowLeftIcon /> Return home
        </Link>
      </div>
    </>
  );
}
