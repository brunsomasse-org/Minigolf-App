import { useTournament } from '../store/tournament';

export default function HomeScreen() {
  const { state, dispatch } = useTournament();
  const tournament = state.tournament;

  return (
    <div className="home-screen">
      <div className="home-hero">
        <div className="umb-badge">UMB</div>
        <h1 className="home-title">Minigolf<br />Scorecard</h1>
        <p className="home-sub">Union des Minigolfeurs du Bénin</p>
      </div>

      <div className="home-actions">
        {tournament?.status === 'active' && (
          <button
            className="btn-primary"
            onClick={() => dispatch({ type: 'SET_VIEW', payload: 'scorecard' })}
          >
            <span className="btn-icon">▶</span>
            Reprendre la partie
          </button>
        )}
        {tournament?.status === 'finished' && (
          <button
            className="btn-secondary"
            onClick={() => dispatch({ type: 'SET_VIEW', payload: 'leaderboard' })}
          >
            Voir le classement — {tournament.name}
          </button>
        )}
        <button
          className={tournament ? 'btn-outline' : 'btn-primary'}
          onClick={() => dispatch({ type: 'SET_VIEW', payload: 'setup' })}
        >
          <span className="btn-icon">⛳</span>
          Nouvelle partie
        </button>
        <p className="home-note">18 trous · Scores 1–7</p>
      </div>

      <div className="home-footer">
        <span>Cotonou, Bénin</span>
        <span className="dot">·</span>
        <span>18 trous</span>
      </div>
    </div>
  );
}
