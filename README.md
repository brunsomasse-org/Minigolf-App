# UMB Minigolf Scorecard

Application mobile pour enregistrer les scores en direct lors des tournois de l'**Union des Minigolfeurs du Bénin (UMB)**.

## Fonctionnalités

- ⛳ **Saisie de score en direct** — 18 trous, scores de 1 à 7 par joueur
- 👥 **Multi-joueurs** — jusqu'à 8 joueurs par partie
- 🏆 **Classement en temps réel** — mis à jour après chaque trou
- 📊 **Tableau détaillé** — vue par trou et par joueur
- 💾 **Sauvegarde locale** — reprendre une partie après fermeture du navigateur
- 📱 **PWA mobile** *(à venir)* — hors ligne, installable sur iOS/Android

## Stack technique

- **React 18** + **TypeScript**
- **Vite** — build rapide
- **CSS custom** — design system UMB (vert profond, sable, rouge drapeau)
- **State management** — React `useReducer` + Context (sans dépendances externes)

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173) dans un navigateur mobile ou avec les DevTools en mode mobile.

## Structure

```
src/
├── components/
│   ├── HomeScreen.tsx       # Écran d'accueil
│   ├── SetupScreen.tsx      # Création d'une partie (nom + joueurs)
│   ├── ScorecardScreen.tsx  # Saisie des scores trou par trou
│   ├── ScorePad.tsx         # Pavé de saisie par joueur
│   ├── LeaderboardScreen.tsx # Classement + tableau détaillé
│   └── BottomNav.tsx        # Navigation basse
├── store/
│   └── tournament.tsx       # État global (Context + useReducer)
├── types.ts                 # Types TypeScript
├── App.tsx                  # Routage principal
└── index.css                # Design system complet
```

## Règles de score

| Score | Label     |
|-------|-----------|
| 1     | Trou en un ! |
| 2     | Birdie    |
| 3     | –1        |
| 4     | Par       |
| 5     | +1        |
| 6     | +2        |
| 7     | +3        |

Le classement est établi par score total croissant (le plus bas gagne).
test
