import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Tournament, Player, Score, HoleScore } from '../types';

const STORAGE_KEY = 'umb-minigolf-state';

function loadPersistedTournament(): Tournament | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const { tournament } = JSON.parse(raw) as { tournament?: Tournament };
    if (!tournament?.players?.length || !tournament.holeScores?.length) return null;
    return tournament;
  } catch {
    return null;
  }
}

function saveTournament(tournament: Tournament | null) {
  try {
    if (tournament === null) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ tournament }));
    }
  } catch {
    // ignore storage quota / private mode errors
  }
}

interface State {
  tournament: Tournament | null;
  activeView: 'home' | 'scorecard' | 'leaderboard' | 'setup';
}

type Action =
  | { type: 'CREATE_TOURNAMENT'; payload: { name: string; players: Player[] } }
  | { type: 'SET_SCORE'; payload: { hole: number; playerId: string; score: Score } }
  | { type: 'SET_HOLE'; payload: number }
  | { type: 'SET_VIEW'; payload: State['activeView'] }
  | { type: 'FINISH_TOURNAMENT' }
  | { type: 'RESET' };

const initialHoles = (): HoleScore[] =>
  Array.from({ length: 18 }, (_, i) => ({ hole: i + 1, scores: {} }));

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'CREATE_TOURNAMENT': {
      const t: Tournament = {
        id: crypto.randomUUID(),
        name: action.payload.name,
        date: new Date().toISOString(),
        players: action.payload.players,
        holeScores: initialHoles(),
        currentHole: 1,
        status: 'active',
      };
      return { tournament: t, activeView: 'scorecard' };
    }
    case 'SET_SCORE': {
      if (!state.tournament) return state;
      const { hole, playerId, score } = action.payload;
      const updated = state.tournament.holeScores.map((h) =>
        h.hole === hole ? { ...h, scores: { ...h.scores, [playerId]: score } } : h
      );
      return {
        ...state,
        tournament: { ...state.tournament, holeScores: updated },
      };
    }
    case 'SET_HOLE': {
      if (!state.tournament) return state;
      return {
        ...state,
        tournament: { ...state.tournament, currentHole: action.payload },
      };
    }
    case 'SET_VIEW':
      return { ...state, activeView: action.payload };
    case 'FINISH_TOURNAMENT': {
      if (!state.tournament) return state;
      return {
        ...state,
        tournament: { ...state.tournament, status: 'finished' },
        activeView: 'leaderboard',
      };
    }
    case 'RESET':
      return { tournament: null, activeView: 'home' };
    default:
      return state;
  }
}

interface ContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const TournamentContext = createContext<ContextValue | null>(null);

function getInitialState(): State {
  const tournament = loadPersistedTournament();
  return { tournament, activeView: 'home' };
}

export function TournamentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);

  useEffect(() => {
    saveTournament(state.tournament);
  }, [state.tournament]);

  return (
    <TournamentContext.Provider value={{ state, dispatch }}>
      {children}
    </TournamentContext.Provider>
  );
}

export function useTournament() {
  const ctx = useContext(TournamentContext);
  if (!ctx) throw new Error('useTournament must be used inside TournamentProvider');
  return ctx;
}

export function usePlayerTotal(playerId: string): number {
  const { state } = useTournament();
  if (!state.tournament) return 0;
  return state.tournament.holeScores.reduce((sum, h) => {
    const s = h.scores[playerId];
    return sum + (s ?? 0);
  }, 0);
}

export function useLeaderboard() {
  const { state } = useTournament();
  if (!state.tournament) return [];
  return state.tournament.players
    .map((p) => ({
      player: p,
      total: state.tournament!.holeScores.reduce((sum, h) => sum + (h.scores[p.id] ?? 0), 0),
      holesPlayed: state.tournament!.holeScores.filter((h) => h.scores[p.id] != null).length,
    }))
    .sort((a, b) => {
      if (a.holesPlayed === 0 && b.holesPlayed === 0) return 0;
      if (a.holesPlayed === 0) return 1;
      if (b.holesPlayed === 0) return -1;
      return a.total - b.total;
    });
}
