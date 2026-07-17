import { useLang } from '../i18n/LanguageContext';
import FairwayDivider from '../components/FairwayDivider';

export default function Contact() {
  const { t } = useLang();

  return (
    <div className="page-inner">
      <section className="page-hero">
        <span className="eyebrow eyebrow-light">{t('contact.hero.eyebrow')}</span>
        <h1 className="page-title">{t('contact.hero.title')}</h1>
        <p className="page-hero-sub">{t('contact.hero.sub')}</p>
      </section>

      <FairwayDivider />

      <section className="section contact-grid">
        <div>
          <h2 className="section-title">{t('contact.join.title')}</h2>
          <p>{t('contact.join.body')}</p>
        </div>
        <div className="contact-card">
          <h3>{t('contact.details.title')}</h3>
          <p>📍 {t('contact.details.address')}</p>
          <p>✉️ MinigolfBenin@outlook.com</p>
          <p>📞 +229 01 97 54 85 28</p>
        </div>
      </section>
    </div>
  );
}
