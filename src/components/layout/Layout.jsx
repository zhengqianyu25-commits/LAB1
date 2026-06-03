import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import ProgressBar from '../common/ProgressBar';
import BackToTop from '../common/BackToTop';
import FloatingBack from '../common/FloatingBack';

export default function Layout() {
  const { pathname } = useLocation();
  const { dark } = useTheme();
  const isHome = pathname === '/' || pathname === '';

  useEffect(() => {
    if (isHome) {
      const overlay = dark
        ? 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65))'
        : 'linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55))';
      document.body.style.backgroundImage = `${overlay}, url("/media/zibo-bbq/image3.jpeg")`;
    } else {
      document.body.style.backgroundImage = '';
    }
    return () => { document.body.style.backgroundImage = ''; };
  }, [isHome, dark]);

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
    </div>
  );
}
