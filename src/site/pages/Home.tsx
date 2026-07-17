import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import FairwayDivider from '../components/FairwayDivider';

export default function Home() {
  const { t } = useLang();

  return (
    <div className="page-home">
      <section className="hero">
        <div className="hero-photo-placeholder" aria-hidden="true">
          <span className="img-placeholder-icon">📷</span>
          <span className="img-placeholder-label">{t('placeholder.heroPhoto')}</span>
        </div>
        <div className="hero-inner">
          <div className="hero-logo-badge">
            <img src="/images/umb-logo.png" alt="UMB" />
          </div>
          <span className="eyebrow eyebrow-light">{t('home.hero.eyebrow')}</span>
          <h1 className="hero-title">
            {t('home.hero.title1')}<br />
            <em>{t('home.hero.title2')}</em><br />
            {t('home.hero.title3')}
          </h1>
          <p className="hero-sub">{t('home.hero.sub')}</p>
          <div className="hero-actions">
            <Link to="/tournaments" className="btn-site btn-site-gold">
              {t('home.hero.cta.primary')}
            </Link>
            <Link to="/app" className="btn-site btn-site-outline-light">
              {t('home.hero.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>

      <FairwayDivider />

      <section className="section section-mission">
        <span className="eyebrow">{t('home.mission.eyebrow')}</span>
        <h2 className="section-title">{t('home.mission.title')}</h2>
        <div className="mission-grid">
          <p>{t('home.mission.p1')}</p>
          <p>{t('home.mission.p2')}</p>
        </div>
      </section>

      <section className="section section-pillars">
        <h2 className="section-title centered">{t('home.pillars.title')}</h2>
        <div className="pillars-grid">
          <div className="pillar-card">
            <img className="pillar-icon-img" src="/images/pillars/tournois.png" alt="" />
            <h3>{t('home.pillar1.title')}</h3>
            <p>{t('home.pillar1.body')}</p>
          </div>
          <div className="pillar-card">
            <img className="pillar-icon-img" src="/images/pillars/formation.png" alt="" />
            <h3>{t('home.pillar2.title')}</h3>
            <p>{t('home.pillar2.body')}</p>
          </div>
          <div className="pillar-card">
            <img className="pillar-icon-img" src="/images/pillars/integrite.png" alt="" />
            <h3>{t('home.pillar3.title')}</h3>
            <p>{t('home.pillar3.body')}</p>
          </div>
          <div className="pillar-card">
            <img className="pillar-icon-img" src="/images/pillars/vie-associative.png" alt="" />
            <h3>{t('home.pillar4.title')}</h3>
            <p>{t('home.pillar4.body')}</p>
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="cta-box">
          <div>
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.body')}</p>
          </div>
          <Link to="/app" className="btn-site btn-site-primary">
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
