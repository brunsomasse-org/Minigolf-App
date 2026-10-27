import { useTournament } from '../store/tournament';

export default function BottomNav() {
  const { state, dispatch } = useTournament();
  const { activeView, tournament } = state;

  if (!tournament || activeView === 'home' || activeView === 'setup') return null;

  const go = (view: 'scorecard' | 'leaderboard') =>
    dispatch({ type: 'SET_VIEW', payload: view });

  return (
    <nav className="bottom-nav">
      <button
        className={`nav-item ${activeView === 'scorecard' ? 'active' : ''}`}
        onClick={() => go('scorecard')}
      >
        <span className="nav-icon">⛳</span>
        <span className="nav-label">Scores</span>
      </button>
      <button
        className={`nav-item ${activeView === 'leaderboard' ? 'active' : ''}`}
        onClick={() => go('leaderboard')}
      >
        <span className="nav-icon">🏆</span>
        <span className="nav-label">Classement</span>
      </button>
    </nav>
  );
}
