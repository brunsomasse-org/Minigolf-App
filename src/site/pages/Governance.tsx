import { useLang } from '../i18n/LanguageContext';
import FairwayDivider from '../components/FairwayDivider';

export default function Governance() {
  const { t } = useLang();

  const organs = [
    { title: t('gov.organ1.title'), body: t('gov.organ1.body') },
    { title: t('gov.organ2.title'), body: t('gov.organ2.body') },
    { title: t('gov.organ3.title'), body: t('gov.organ3.body') },
    { title: t('gov.organ4.title'), body: t('gov.organ4.body') },
  ];

  const roles = [
    { title: t('gov.role1.title'), name: 'SOMASSE Arthure', body: t('gov.role1.body') },
    { title: t('gov.role2.title'), name: 'FOFANA Moutakilou', body: t('gov.role2.body') },
    { title: t('gov.role3.title'), name: 'AGUEH ETEDJIHOUNKPE Jerry', body: t('gov.role3.body') },
    { title: t('gov.role4.title'), name: 'SOMASSE Brun', body: t('gov.role4.body') },
    { title: t('gov.role5.title'), name: 'LAURIANO Bastou', body: t('gov.role5.body') },
  ];

  const memberTypes = [
    { title: t('gov.member1.title'), body: t('gov.member1.body') },
    { title: t('gov.member2.title'), body: t('gov.member2.body') },
    { title: t('gov.member3.title'), body: t('gov.member3.body') },
    { title: t('gov.member4.title'), body: t('gov.member4.body') },
  ];

  return (
    <div className="page-inner">
      <section className="page-hero">
        <span className="eyebrow eyebrow-light">{t('gov.hero.eyebrow')}</span>
        <h1 className="page-title">{t('gov.hero.title')}</h1>
        <p className="page-hero-sub">{t('gov.hero.sub')}</p>
        <a
          href="/documents/UMB-Statuts-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-site btn-site-gold"
        >
          📄 {t('gov.download')}
        </a>
      </section>

      <FairwayDivider />

      <section className="section">
        <h2 className="section-title centered">{t('gov.organs.title')}</h2>
        <div className="cards-grid four">
          {organs.map((o) => (
            <div key={o.title} className="info-card">
              <h3>{o.title}</h3>
              <p>{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <h2 className="section-title">{t('gov.bureau.title')}</h2>
        <p className="section-sub">{t('gov.bureau.sub')}</p>
        <div className="role-list">
          {roles.map((r) => (
            <div key={r.title} className="role-row">
              <div className="avatar-placeholder">
                <span className="avatar-placeholder-icon">👤</span>
              </div>
              <div className="role-row-text">
                <h4>{r.title}</h4>
                <p className="role-name">{r.name}</p>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t('gov.members.title')}</h2>
        <div className="cards-grid four">
          {memberTypes.map((m) => (
            <div key={m.title} className="info-card">
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <h2 className="section-title">{t('gov.committees.title')}</h2>
        <ul className="check-list">
          <li>{t('gov.committee1')}</li>
          <li>{t('gov.committee2')}</li>
          <li>{t('gov.committee3')}</li>
        </ul>
      </section>
    </div>
  );
}
