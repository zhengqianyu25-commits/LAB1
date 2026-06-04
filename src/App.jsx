import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import ArticlePage from './pages/ArticlePage';
import LabNotesPage from './pages/LabNotesPage';
import AboutPage from './pages/AboutPage';
import PodcastPage from './pages/PodcastPage';
import ListenPage from './pages/ListenPage';
import LabNotePage from './pages/LabNotePage';
import TeamPage from './pages/TeamPage';

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
          <Route path="frequency" element={<PodcastPage />} />
          <Route path="listen/:index" element={<ListenPage />} />
          <Route path="lab-note/:slug" element={<LabNotePage />} />
          <Route path="team" element={<TeamPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
