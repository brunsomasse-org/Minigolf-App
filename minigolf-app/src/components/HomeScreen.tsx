import { useTournament } from '../store/tournament';

const LOGO_GREEN = '#1A3C2E';

export default function HomeScreen() {
  const { dispatch } = useTournament();

  return (
    <div className="home-screen">
      <div className="home-hero">
        <div className="umb-badge">UMB</div>
        <h1 className="home-title">Minigolf<br />Scorecard</h1>
        <p className="home-sub">Union des Minigolfeurs du Bénin</p>
      </div>

      <div className="home-actions">
        <button
          className="btn-primary"
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
