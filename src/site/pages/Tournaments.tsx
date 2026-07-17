import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import FairwayDivider from '../components/FairwayDivider';

export default function Tournaments() {
  const { t } = useLang();

  return (
    <div className="page-inner">
      <section className="page-hero">
        <span className="eyebrow eyebrow-light">{t('tournaments.hero.eyebrow')}</span>
        <h1 className="page-title">{t('tournaments.hero.title')}</h1>
        <p className="page-hero-sub">{t('tournaments.hero.sub')}</p>
      </section>

      <FairwayDivider />

      <section className="section">
        <div className="empty-state">
          <span className="empty-icon">🗓️</span>
          <h2>{t('tournaments.upcoming.title')}</h2>
          <p>{t('tournaments.upcoming.body')}</p>
        </div>
      </section>

      <section className="section section-alt">
        <h2 className="section-title centered">{t('tournaments.rules.title')}</h2>
        <div className="cards-grid four">
          <div className="info-card centered-card">
            <span className="pillar-icon">⛳</span>
            <p>{t('tournaments.rules.holes')}</p>
          </div>
          <div className="info-card centered-card">
            <span className="pillar-icon">👥</span>
            <p>{t('tournaments.rules.players')}</p>
          </div>
          <div className="info-card centered-card">
            <span className="pillar-icon">📊</span>
            <p>{t('tournaments.rules.scoring')}</p>
          </div>
          <div className="info-card centered-card">
            <span className="pillar-icon">🏆</span>
            <p>{t('tournaments.rules.winner')}</p>
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="cta-box">
          <div>
            <h2>{t('tournaments.cta.title')}</h2>
            <p>{t('tournaments.cta.body')}</p>
          </div>
          <Link to="/app" className="btn-site btn-site-primary">
            {t('tournaments.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
