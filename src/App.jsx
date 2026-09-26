import './index.css';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from'./components/Contact';
import Footer from './components/Footer';
import Certificate from './components/Certificate';
import Admin from './components/Admin';
import ScrollToTop from './components/ScrollToTop';
import { defaultPortfolioData } from './portfolioData';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

function PageFrame({ theme, setTheme, children }) {
  const { pathname } = useLocation();
  return (
    <div className={`App${pathname === '/' ? '' : ' route-page'}`} id="top">
      <Header theme={theme} setTheme={setTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function PortfolioPage({ theme, setTheme, portfolio }) {
  return (
    <PageFrame theme={theme} setTheme={setTheme}>
      <Hero profile={portfolio.profile} />
      <About profile={portfolio.profile} skills={portfolio.skills} />
      <Projects projects={portfolio.projects} />
      <Certificate certificates={portfolio.certificates || []} />
      <Resume education={portfolio.education} certifications={portfolio.certifications} summary={portfolio.resumeSummary} pdf={portfolio.resumePdf} />
      <Contact profile={portfolio.profile} />
    </PageFrame>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [portfolio, setPortfolio] = useState(() => {
    try {
      return { ...defaultPortfolioData, ...JSON.parse(localStorage.getItem('portfolio-data') || '{}') };
    } catch {
      return defaultPortfolioData;
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-data', JSON.stringify(portfolio));
  }, [portfolio]);

  const pageProps = { theme, setTheme };
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPage {...pageProps} portfolio={portfolio} />} />
        <Route path="/about" element={<PageFrame {...pageProps}><About profile={portfolio.profile} skills={portfolio.skills} showSkills={false} /></PageFrame>} />
        <Route path="/skills" element={<PageFrame {...pageProps}><Skills skills={portfolio.skills} /></PageFrame>} />
        <Route path="/projects" element={<PageFrame {...pageProps}><Projects projects={portfolio.projects} /></PageFrame>} />
        <Route path="/contact" element={<PageFrame {...pageProps}><Contact profile={portfolio.profile} /></PageFrame>} />
        <Route path="/certificates" element={<PageFrame {...pageProps}><Certificate certificates={portfolio.certificates || []} /></PageFrame>} />
        <Route path="/resume" element={<PageFrame {...pageProps}><Resume education={portfolio.education} certifications={portfolio.certifications} summary={portfolio.resumeSummary} pdf={portfolio.resumePdf} /></PageFrame>} />
        <Route path="/admin" element={<Admin portfolio={portfolio} setPortfolio={setPortfolio} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
