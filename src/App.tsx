import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './site/i18n/LanguageContext';
import Layout from './site/components/Layout';
import Home from './site/pages/Home';
import About from './site/pages/About';
import Governance from './site/pages/Governance';
import Tournaments from './site/pages/Tournaments';
import Contact from './site/pages/Contact';
import ScorecardApp from './site/ScorecardApp';
import './index.css';
import './site/site.css';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/app/*" element={<ScorecardApp />} />
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/governance" element={<Governance />} />
                  <Route path="/tournaments" element={<Tournaments />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
