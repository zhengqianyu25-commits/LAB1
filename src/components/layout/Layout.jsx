import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import ProgressBar from '../common/ProgressBar';
import BackToTop from '../common/BackToTop';
import FloatingBack from '../common/FloatingBack';
import MiniPlayer from '../common/MiniPlayer';
import VideoModal from '../common/VideoModal';
import articles from '../../data/articles';

export default function Layout() {
  const { pathname } = useLocation();
  const { dark } = useTheme();
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const isArticle = pathname.startsWith('/article/');
    const isHome = pathname === '/' || pathname === '';

    if (isHome) {
      setBgImage('media/zibo-bbq/image3.jpeg');
      document.body.style.background = '';
    } else if (isArticle) {
      const slug = pathname.split('/').pop();
      const article = articles.find(a => a.slug === slug);
      const img = article?.media?.images?.[0]?.src || '';
      setBgImage(img);
      document.body.style.background = '';
    } else {
      setBgImage('');
      document.body.style.background = '';
    }
    return () => { setBgImage(''); document.body.style.background = ''; };
  }, [pathname, dark]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <ProgressBar />
      <FloatingBack />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
      <MiniPlayer />
      <VideoModal />

      {bgImage && (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url("${bgImage}")`, filter: 'blur(24px)', transform: 'scale(1.1)' }}
          />
          <div className="absolute inset-0" style={{ background: dark ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.35)' }} />
        </div>
      )}
    </div>
  );
}
