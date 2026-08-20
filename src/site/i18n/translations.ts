export type TranslationKey = keyof typeof translations;

interface Entry {
  fr: string;
  en: string;
}

export const translations = {
  // ── PLACEHOLDERS ─────────────────────────────────
  'placeholder.heroPhoto': { fr: 'Photo du terrain à venir', en: 'Course photo coming soon' },
  'placeholder.galleryPhoto': { fr: 'Photo à venir', en: 'Photo coming soon' },
  'placeholder.memberName': { fr: 'Nom à confirmer', en: 'Name to be confirmed' },

  // ── NAV ──────────────────────────────────────────
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À propos', en: 'About' },
  'nav.governance': { fr: 'Gouvernance', en: 'Governance' },
  'nav.tournaments': { fr: 'Tournois', en: 'Tournaments' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  'nav.scorecard': { fr: 'Scorecard', en: 'Scorecard' },
  'nav.tagline': { fr: 'Union des Minigolfeurs du Bénin', en: 'Bénin Minigolf Union' },

  // ── FOOTER ───────────────────────────────────────
  'footer.address.label': { fr: 'Siège social', en: 'Head office' },
  'footer.contact.label': { fr: 'Contact', en: 'Contact' },
  'footer.rights': { fr: 'Union des Minigolfeurs du Bénin. Tous droits réservés.', en: 'Union des Minigolfeurs du Bénin. All rights reserved.' },
  'footer.links.label': { fr: 'Liens', en: 'Links' },
  'footer.statuts': { fr: 'Statuts (PDF)', en: 'Bylaws (PDF)' },

  // ── HOME ─────────────────────────────────────────
  'home.hero.eyebrow': { fr: 'Cotonou, Bénin', en: 'Cotonou, Bénin' },
  'home.hero.title1': { fr: 'Le minigolf', en: 'Minigolf' },
  'home.hero.title2': { fr: 'prend racine', en: 'takes root' },
  'home.hero.title3': { fr: 'au Bénin.', en: 'in Bénin.' },
  'home.hero.sub': {
    fr: "L'UMB fédère les joueurs, organise les tournois et fait grandir ce sport de précision, ouvert à tous, à travers le pays.",
    en: 'UMB brings players together, runs tournaments, and grows this precision sport, open to everyone, across the country.',
  },
  'home.hero.cta.primary': { fr: 'Voir les tournois', en: 'See tournaments' },
  'home.hero.cta.secondary': { fr: 'Ouvrir le Scorecard', en: 'Open Scorecard' },

  'home.mission.eyebrow': { fr: 'Notre objet', en: 'Our mission' },
  'home.mission.title': { fr: 'Un sport accessible, une communauté qui grandit', en: 'An accessible sport, a growing community' },
  'home.mission.p1': {
    fr: "Le minigolf se joue sur un parcours court, jalonné d'obstacles, où précision et patience comptent plus que la force. Il ne demande aucune aptitude physique particulière : enfants, familles et compétiteurs y trouvent chacun leur rythme.",
    en: 'Minigolf is played on a short course lined with obstacles, where precision and patience matter more than power. It asks for no special physical ability: children, families, and competitors each find their own pace.',
  },
  'home.mission.p2': {
    fr: "L'UMB porte cette discipline au Bénin : elle stimule sa pratique, organise championnats et coupes nationales, veille au respect du fair-play et de la réglementation antidopage, et représente les joueurs auprès des autorités et fédérations partenaires.",
    en: "UMB carries this sport forward in Bénin: it encourages participation, organizes championships and national cups, upholds fair play and anti-doping standards, and represents players before authorities and partner federations.",
  },

  'home.pillars.title': { fr: 'Ce que fait l\'UMB', en: 'What UMB does' },
  'home.pillar1.title': { fr: 'Tournois & compétitions', en: 'Tournaments & competitions' },
  'home.pillar1.body': {
    fr: 'Championnats, coupes nationales et rencontres amicales, organisés selon des règles claires et un classement en stroke-play.',
    en: 'Championships, national cups, and friendly matches, run under clear rules with stroke-play scoring.',
  },
  'home.pillar2.title': { fr: 'Formation des jeunes', en: 'Youth development' },
  'home.pillar2.body': {
    fr: "Un officier dédié supervise les compétitions juniors et fixe les critères adaptés aux jeunes joueurs.",
    en: 'A dedicated officer oversees junior competitions and sets criteria suited to young players.',
  },
  'home.pillar3.title': { fr: 'Intégrité sportive', en: 'Sporting integrity' },
  'home.pillar3.body': {
    fr: "Un agent antidopage indépendant applique les codes en vigueur et protège la santé des athlètes.",
    en: 'An independent anti-doping officer applies current codes and protects athlete health.',
  },
  'home.pillar4.title': { fr: 'Vie associative', en: 'Community life' },
  'home.pillar4.body': {
    fr: "Une Assemblée Générale annuelle et un Conseil d'Administration élu assurent une gouvernance transparente.",
    en: 'An annual General Assembly and an elected Board of Directors ensure transparent governance.',
  },

  'home.cta.title': { fr: 'Vous jouez un tournoi UMB aujourd\'hui ?', en: 'Playing a UMB tournament today?' },
  'home.cta.body': {
    fr: "Utilisez notre application de score en direct : 18 trous, classement instantané, jusqu'à 8 joueurs.",
    en: 'Use our live scorecard app: 18 holes, instant leaderboard, up to 8 players.',
  },
  'home.cta.button': { fr: 'Lancer le Scorecard →', en: 'Launch Scorecard →' },

  // ── ABOUT ────────────────────────────────────────
  'about.hero.eyebrow': { fr: 'Notre histoire', en: 'Our story' },
  'about.hero.title': { fr: 'À propos de l\'UMB', en: 'About UMB' },
  'about.origin.title': { fr: 'Une discipline née à Saint-Andrews', en: 'A sport born in St Andrews' },
  'about.origin.p1': {
    fr: "Le minigolf est une version réduite du golf, apparue en 1867 en Angleterre. Chaque trou, large d'environ un mètre et long de 3 à 15 mètres, oppose le joueur à des obstacles plutôt qu'à la distance. C'est un jeu de précision, praticable en extérieur comme en intérieur, sans prérequis technique.",
    en: "Minigolf is a scaled-down version of golf that emerged in England in 1867. Each hole, about a metre wide and 3 to 15 metres long, pits the player against obstacles rather than distance. It's a game of precision, playable outdoors or indoors, with no technical prerequisites.",
  },
  'about.origin.p2': {
    fr: "L'Union des Minigolfeurs du Bénin (UMB) a été créée pour structurer et développer cette pratique au Bénin, association neutre sur le plan politique, ethnique et religieux, portée exclusivement par des bénévoles.",
    en: 'The Union des Minigolfeurs du Bénin (UMB) was created to structure and grow this sport in Bénin — a politically, ethnically, and religiously neutral association, run entirely by volunteers.',
  },
  'about.mission.title': { fr: 'Notre objet', en: 'Our purpose' },
  'about.mission.item1': { fr: 'Développer la pratique du minigolf au Bénin, sans recherche de profit', en: 'Grow minigolf in Bénin on a not-for-profit basis' },
  'about.mission.item2': { fr: 'Représenter les joueurs auprès des autorités, fédérations et médias', en: 'Represent players before authorities, federations, and the media' },
  'about.mission.item3': { fr: "Organiser championnats, coupes nationales et compétitions africaines et internationales", en: 'Organize championships, national cups, and African and international competitions' },
  'about.mission.item4': { fr: 'Veiller au respect de la réglementation sportive et lutter contre le dopage', en: 'Uphold sporting regulations and combat doping' },
  'about.mission.item5': { fr: 'Encourager le travail communautaire entre membres', en: 'Encourage community engagement among members' },
  'about.values.title': { fr: 'Nos valeurs', en: 'Our values' },
  'about.values.body': {
    fr: "Pratique libre et volontaire, neutralité politique et religieuse, égalité des sexes, et action bénévole : ces principes guident chaque décision de l'association, des statuts adoptés en Assemblée Générale jusqu'à l'organisation du moindre tournoi.",
    en: 'Free and voluntary participation, political and religious neutrality, gender equality, and volunteer-run action: these principles guide every decision the association makes, from the bylaws adopted in General Assembly to the smallest tournament.',
  },
  'about.hq.title': { fr: 'Siège social', en: 'Head office' },
  'about.hq.body': { fr: 'Cotonou, 9ème Arrondissement, Quartier Kindonou, Lot 2165.', en: 'Cotonou, 9th Arrondissement, Kindonou district, Lot 2165.' },
  'about.gallery.title': { fr: "L'association en images", en: 'The association in pictures' },

  // ── GOVERNANCE ───────────────────────────────────
  'gov.hero.eyebrow': { fr: 'Cadre légal', en: 'Legal framework' },
  'gov.hero.title': { fr: 'Gouvernance', en: 'Governance' },
  'gov.hero.sub': {
    fr: "L'UMB est régie par la loi béninoise n° 2025-19 du 22 juillet 2025 relative aux associations et par le décret n° 2025-638 du 08 octobre 2025. Ses statuts révisés en détaillent le fonctionnement.",
    en: 'UMB is governed by Bénin law n° 2025-19 of 22 July 2025 on associations and foundations, and by decree n° 2025-638 of 8 October 2025. Its revised bylaws set out how it operates in detail.',
  },
  'gov.download': { fr: 'Télécharger les Statuts (PDF)', en: 'Download the Bylaws (PDF)' },

  'gov.organs.title': { fr: 'Les quatre organes', en: 'The four bodies' },
  'gov.organ1.title': { fr: "Assemblée Générale", en: 'General Assembly' },
  'gov.organ1.body': { fr: 'Organe suprême de décision. Se réunit une fois par an.', en: 'Supreme decision-making body. Meets once a year.' },
  'gov.organ2.title': { fr: "Conseil d'Administration", en: 'Board of Directors' },
  'gov.organ2.body': { fr: 'Organe exécutif de 5 membres élus pour 5 ans, rééligibles.', en: 'Executive body of 5 members elected for 5-year renewable terms.' },
  'gov.organ3.title': { fr: 'Commissaire aux Comptes', en: 'Statutory Auditor' },
  'gov.organ3.body': { fr: 'Organe de contrôle financier, désigné pour 5 ans.', en: 'Financial oversight body, appointed for 5 years.' },
  'gov.organ4.title': { fr: 'Commission Électorale Autonome', en: 'Independent Electoral Commission' },
  'gov.organ4.body': { fr: 'Organe électif indépendant.', en: 'Independent electoral body.' },

  'gov.bureau.title': { fr: 'Le Bureau Exécutif', en: 'The Executive Board' },
  'gov.bureau.sub': {
    fr: "Élu par le Conseil d'Administration, le Bureau exerce ses fonctions à titre entièrement bénévole.",
    en: 'Elected by the Board of Directors, the Executive Board serves entirely on a volunteer basis.',
  },
  'gov.role1.title': { fr: 'Président(e)', en: 'President' },
  'gov.role1.body': { fr: "Représentant légal de l'association, préside le Conseil et l'Assemblée Générale.", en: 'Legal representative of the association; chairs the Board and the General Assembly.' },
  'gov.role2.title': { fr: 'Secrétaire Général(e)', en: 'Secretary General' },
  'gov.role2.body': { fr: 'Administration, correspondance officielle, procès-verbaux et archives.', en: 'Administration, official correspondence, meeting minutes, and archives.' },
  'gov.role3.title': { fr: 'Trésorier(ère) Général(e)', en: 'Treasurer General' },
  'gov.role3.body': { fr: "Gestion financière, comptabilité et budget prévisionnel.", en: 'Financial management, bookkeeping, and budget planning.' },
  'gov.role4.title': { fr: 'Secrétaire aux Activités Sportives', en: 'Secretary of Sports Activities' },
  'gov.role4.body': { fr: 'Planification des tournois, suivi technique, préside le Comité Technique.', en: 'Tournament planning, technical oversight; chairs the Technical Committee.' },
  'gov.role5.title': { fr: "Secrétaire à l'Information et à la Communication", en: 'Secretary of Information and Communication' },
  'gov.role5.body': { fr: 'Relations médias, communication interne et externe.', en: 'Media relations, internal and external communication.' },

  'gov.members.title': { fr: 'Catégories de membres', en: 'Membership categories' },
  'gov.member1.title': { fr: 'Fondateurs', en: 'Founding members' },
  'gov.member1.body': { fr: "Signataires de l'Assemblée Générale constitutive.", en: 'Signatories of the founding General Assembly.' },
  'gov.member2.title': { fr: 'Actifs', en: 'Active members' },
  'gov.member2.body': { fr: "Participent à la vie de l'association, cotisent, votent et sont éligibles.", en: 'Take part in association life, pay dues, vote, and are eligible for election.' },
  'gov.member3.title': { fr: 'Bienfaiteurs & Sympathisants', en: 'Benefactors & Supporters' },
  'gov.member3.body': { fr: 'Contribuent au développement de l\'UMB sans droit de vote.', en: "Contribute to UMB's growth without voting rights." },
  'gov.member4.title': { fr: "D'honneur", en: 'Honorary members' },
  'gov.member4.body': { fr: 'Statut distinctif accordé par l\'Assemblée Générale.', en: 'Distinguished status granted by the General Assembly.' },

  'gov.committees.title': { fr: 'Comités spécialisés', en: 'Specialized committees' },
  'gov.committee1': { fr: 'Comité Technique — suivi des compétitions', en: 'Technical Committee — competition oversight' },
  'gov.committee2': { fr: 'Comité Juridique — règlement des litiges', en: 'Legal Committee — dispute resolution' },
  'gov.committee3': { fr: "Agent d'antidopage — santé et intégrité des athlètes", en: 'Anti-doping officer — athlete health and integrity' },

  // ── TOURNAMENTS ──────────────────────────────────
  'tournaments.hero.eyebrow': { fr: 'Compétitions', en: 'Competitions' },
  'tournaments.hero.title': { fr: 'Tournois', en: 'Tournaments' },
  'tournaments.hero.sub': {
    fr: "Championnats, coupes nationales et rencontres amicales organisées par l'UMB. Le calendrier complet est mis à jour progressivement.",
    en: "Championships, national cups, and friendly matches run by UMB. The full calendar is being added progressively.",
  },
  'tournaments.upcoming.title': { fr: 'Prochainement', en: 'Coming soon' },
  'tournaments.upcoming.body': {
    fr: "Le calendrier des tournois 2026 est en cours de finalisation par le Comité Technique. Revenez bientôt, ou suivez nos annonces.",
    en: "The 2026 tournament calendar is being finalized by the Technical Committee. Check back soon, or follow our announcements.",
  },
  'tournaments.rules.title': { fr: 'Format de jeu', en: 'Game format' },
  'tournaments.rules.holes': { fr: '18 trous', en: '18 holes' },
  'tournaments.rules.players': { fr: "Jusqu'à 8 joueurs", en: 'Up to 8 players' },
  'tournaments.rules.scoring': { fr: 'Stroke-play, scores de 1 à 7', en: 'Stroke-play, scores 1 to 7' },
  'tournaments.rules.winner': { fr: 'Le total le plus bas gagne', en: 'Lowest total wins' },
  'tournaments.cta.title': { fr: 'Vous êtes sur le terrain ?', en: 'On the course right now?' },
  'tournaments.cta.body': { fr: 'Enregistrez les scores en direct avec le Scorecard UMB.', en: "Record scores live with the UMB Scorecard." },
  'tournaments.cta.button': { fr: 'Ouvrir le Scorecard →', en: 'Open Scorecard →' },

  // ── CONTACT ──────────────────────────────────────
  'contact.hero.eyebrow': { fr: 'Nous rejoindre', en: 'Join us' },
  'contact.hero.title': { fr: 'Contact & adhésion', en: 'Contact & membership' },
  'contact.hero.sub': {
    fr: "Vous voulez jouer, arbitrer, ou simplement en savoir plus ? Écrivez-nous.",
    en: 'Want to play, officiate, or just learn more? Get in touch.',
  },
  'contact.join.title': { fr: 'Devenir membre', en: 'Become a member' },
  'contact.join.body': {
    fr: "L'adhésion s'obtient sur demande écrite auprès du Conseil d'Administration, qui statue sous 60 jours ouvrables. Une fois admis, chaque membre adhère aux statuts et au règlement intérieur de l'UMB.",
    en: "Membership is granted upon written request to the Board of Directors, which decides within 60 working days. Once admitted, every member agrees to UMB's bylaws and internal regulations.",
  },
  'contact.details.title': { fr: 'Coordonnées', en: 'Details' },
  'contact.details.address': { fr: 'Cotonou, Quartier Kindonou, Lot 2165, Bénin', en: 'Cotonou, Kindonou district, Lot 2165, Bénin' },
} satisfies Record<string, Entry>;
