import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { ToastProvider } from './components/ui/Toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Groupe } from './pages/Groupe';
import { Filiales, FilialeDetail } from './pages/Filiales';
import { Services } from './pages/Services';
import { Innovation } from './pages/Innovation';
import { Projets, Realisations } from './pages/Projets';
import { Carrieres } from './pages/Carrieres';
import { Contact, Devis } from './pages/Contact';
import { Direction } from './pages/Direction';
import { Equipe } from './pages/Equipe';
import {
  Actualites, Partenaires, Secteurs, FAQPage, Telechargements, Support,
  RSE, Qualite, Investisseurs, Solutions, MentionsLegales, Confidentialite,
} from './pages/OtherPages';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, [pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/groupe" element={<Groupe />} />
              <Route path="/direction" element={<Direction />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/filiales" element={<Filiales />} />
              <Route path="/filiales/:slug" element={<FilialeDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/secteurs" element={<Secteurs />} />
              <Route path="/realisations" element={<Realisations />} />
              <Route path="/projets" element={<Projets />} />
              <Route path="/innovation" element={<Innovation />} />
              <Route path="/carrieres" element={<Carrieres />} />
              <Route path="/actualites" element={<Actualites />} />
              <Route path="/partenaires" element={<Partenaires />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/telechargements" element={<Telechargements />} />
              <Route path="/support" element={<Support />} />
              <Route path="/rse" element={<RSE />} />
              <Route path="/qualite" element={<Qualite />} />
              <Route path="/investisseurs" element={<Investisseurs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/devis" element={<Devis />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/confidentialite" element={<Confidentialite />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
