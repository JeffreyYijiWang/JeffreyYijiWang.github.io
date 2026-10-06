import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const GraphicsPage = lazy(() => import('./pages/GraphicsPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const EducationPage = lazy(() => import('./pages/EducationPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <SiteLayout>
      <Suspense fallback={<p className="route-loading">Loading…</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/graphics" element={<GraphicsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </SiteLayout>
  );
}
