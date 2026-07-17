import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-col footer-brand">
          <img src="/images/umb-logo.png" alt="UMB" className="footer-logo" />
          <p className="footer-tagline">{t('nav.tagline')}</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t('footer.address.label')}</h4>
          <p>Cotonou, Quartier Kindonou, Lot 2165</p>
          <p>République du Bénin</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t('footer.contact.label')}</h4>
          <p>MinigolfBenin@outlook.com</p>
          <p>+229 01 97 54 85 28</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t('footer.links.label')}</h4>
          <Link to="/governance">{t('nav.governance')}</Link>
          <a href="/documents/UMB-Statuts-2026.pdf" target="_blank" rel="noopener noreferrer">
            {t('footer.statuts')}
          </a>
          <Link to="/app">{t('nav.scorecard')}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} {t('footer.rights')}</p>
      </div>
    </footer>
  );
}
