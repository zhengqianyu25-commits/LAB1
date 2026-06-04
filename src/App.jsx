import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import ArticlePage from './pages/ArticlePage';
import LabNotesPage from './pages/LabNotesPage';
import AboutPage from './pages/AboutPage';
import CreditsPage from './pages/CreditsPage';
import PodcastPage from './pages/PodcastPage';
import ListenPage from './pages/ListenPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="article/:slug" element={<ArticlePage />} />
          <Route path="lab-notes" element={<LabNotesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="credits" element={<CreditsPage />} />
          <Route path="frequency" element={<PodcastPage />} />
          <Route path="listen/:index" element={<ListenPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
