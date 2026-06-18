import { useTournament, useLeaderboard } from '../store/tournament';

const MEDALS = ['🥇', '🥈', '🥉'];

export default function LeaderboardScreen() {
  const { state, dispatch } = useTournament();
  const t = state.tournament!;
  const board = useLeaderboard();
  const isFinished = t.status === 'finished';

  return (
    <div className="leaderboard-screen">
      <div className="lb-header">
        <h2 className="lb-title">Classement</h2>
        <p className="lb-subtitle">{t.name}</p>
      </div>

      <div className="lb-list">
        {board.map((entry, i) => (
          <div key={entry.player.id} className={`lb-row ${i === 0 ? 'lb-first' : ''}`}>
            <div className="lb-rank">
              {i < 3 ? <span className="medal">{MEDALS[i]}</span> : <span className="rank-num">{i + 1}</span>}
            </div>
            <div className="lb-avatar" style={{ background: entry.player.color }}>
              {entry.player.name.charAt(0).toUpperCase()}
            </div>
            <div className="lb-info">
              <span className="lb-name">{entry.player.name}</span>
              <span className="lb-holes">{entry.holesPlayed}/18 trous</span>
            </div>
            <div className="lb-total" style={{ color: i === 0 ? entry.player.color : undefined }}>
              {entry.holesPlayed > 0 ? entry.total : '—'}
            </div>
          </div>
        ))}
      </div>

      {/* Per-hole breakdown */}
      <div className="hole-grid-section">
        <h3 className="hg-title">Détail par trou</h3>
        <div className="hole-grid-scroll">
          <table className="hole-table">
            <thead>
              <tr>
                <th className="ht-player-col">Joueur</th>
                {Array.from({ length: 18 }, (_, i) => (
                  <th key={i + 1} className="ht-hole-col">{i + 1}</th>
                ))}
                <th className="ht-total-col">Tot</th>
              </tr>
            </thead>
            <tbody>
              {board.map((entry) => (
                <tr key={entry.player.id}>
                  <td className="ht-player-cell">
                    <div className="ht-avatar" style={{ background: entry.player.color }}>
                      {entry.player.name.charAt(0)}
                    </div>
                  </td>
                  {t.holeScores.map((h) => {
                    const s = h.scores[entry.player.id];
                    return (
                      <td key={h.hole} className="ht-score-cell">
                        {s != null ? (
                          <div
                            className="ht-score"
                            style={{ background: s === 1 ? entry.player.color : undefined, color: s === 1 ? '#fff' : undefined }}
                          >
                            {s}
                          </div>
                        ) : (
                          <div className="ht-empty">—</div>
                        )}
                      </td>
                    );
                  })}
                  <td className="ht-total-cell" style={{ color: entry.player.color }}>
                    {entry.holesPlayed > 0 ? entry.total : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="lb-actions">
        {!isFinished && (
          <button
            className="btn-secondary"
            onClick={() => dispatch({ type: 'SET_VIEW', payload: 'scorecard' })}
          >
            ← Continuer la partie
          </button>
        )}
        <button
          className="btn-outline"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Nouvelle partie
        </button>
      </div>
    </div>
  );
}
