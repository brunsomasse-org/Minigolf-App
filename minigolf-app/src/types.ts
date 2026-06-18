export type Score = 1 | 2 | 3 | 4 | 5 | 6 | 7 | null;

export interface Player {
  id: string;
  name: string;
  color: string;
}

export interface HoleScore {
  hole: number; // 1–18
  scores: Record<string, Score>; // playerId -> score
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  players: Player[];
  holeScores: HoleScore[];
  currentHole: number;
  status: 'setup' | 'active' | 'finished';
}

export interface AppState {
  tournament: Tournament | null;
  activeView: 'home' | 'scorecard' | 'leaderboard' | 'setup';
}
