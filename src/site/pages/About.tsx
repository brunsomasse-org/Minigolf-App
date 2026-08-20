import { useLang } from '../i18n/LanguageContext';
import FairwayDivider from '../components/FairwayDivider';

export default function About() {
  const { t } = useLang();

  return (
    <div className="page-inner">
      <section className="page-hero">
        <div className="crest-display">
          <img src="/images/umb-logo.png" alt="Union des Minigolfeurs du Bénin" />
        </div>
        <span className="eyebrow eyebrow-light">{t('about.hero.eyebrow')}</span>
        <h1 className="page-title">{t('about.hero.title')}</h1>
      </section>

      <FairwayDivider />

      <section className="section">
        <h2 className="section-title">{t('about.origin.title')}</h2>
        <p>{t('about.origin.p1')}</p>
        <p>{t('about.origin.p2')}</p>
      </section>

      <section className="section section-alt">
        <h2 className="section-title">{t('about.mission.title')}</h2>
        <ul className="check-list">
          <li>{t('about.mission.item1')}</li>
          <li>{t('about.mission.item2')}</li>
          <li>{t('about.mission.item3')}</li>
          <li>{t('about.mission.item4')}</li>
          <li>{t('about.mission.item5')}</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">{t('about.values.title')}</h2>
        <p>{t('about.values.body')}</p>
      </section>

      <section className="section section-alt hq-card">
        <h2 className="section-title">{t('about.hq.title')}</h2>
        <p>{t('about.hq.body')}</p>
      </section>

      <section className="section">
        <h2 className="section-title centered">{t('about.gallery.title')}</h2>
        <div className="gallery-grid">
          {[1, 2, 3].map((i) => (
            <div className="img-placeholder" key={i}>
              <span className="img-placeholder-icon">📷</span>
              <span className="img-placeholder-label">{t('placeholder.galleryPhoto')}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
