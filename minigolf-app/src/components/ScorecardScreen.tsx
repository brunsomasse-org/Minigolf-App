import { useState } from 'react';
import { useTournament } from '../store/tournament';
import ScorePad from './ScorePad';
import { Score } from '../types';

export default function ScorecardScreen() {
  const { state, dispatch } = useTournament();
  const t = state.tournament!;
  const [activePlayer, setActivePlayer] = useState(0);

  const currentHoleData = t.holeScores.find((h) => h.hole === t.currentHole)!;
  const player = t.players[activePlayer];
  const currentScore = currentHoleData.scores[player.id] ?? null;

  const setScore = (score: Score) => {
    dispatch({ type: 'SET_SCORE', payload: { hole: t.currentHole, playerId: player.id, score } });
    // Auto-advance to next player
    if (activePlayer < t.players.length - 1) {
      setTimeout(() => setActivePlayer(activePlayer + 1), 350);
    }
  };

  const goHole = (delta: number) => {
    const next = t.currentHole + delta;
    if (next < 1 || next > 18) return;
    dispatch({ type: 'SET_HOLE', payload: next });
    setActivePlayer(0);
  };

  const holesCompleted = t.holeScores.filter(
    (h) => t.players.every((p) => h.scores[p.id] != null)
  ).length;

  return (
    <div className="scorecard-screen">
      {/* Hole navigation header */}
      <div className="hole-header">
        <button className="hole-nav-btn" onClick={() => goHole(-1)} disabled={t.currentHole === 1}>
          ‹
        </button>
        <div className="hole-info">
          <span className="hole-label">Trou</span>
          <span className="hole-number">{t.currentHole}</span>
          <span className="hole-of">/ 18</span>
        </div>
        <button className="hole-nav-btn" onClick={() => goHole(1)} disabled={t.currentHole === 18}>
          ›
        </button>
      </div>

      {/* Progress bar */}
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${(holesCompleted / 18) * 100}%` }}
        />
      </div>

      {/* Player tabs */}
      <div className="player-tabs">
        {t.players.map((p, i) => {
          const s = currentHoleData.scores[p.id];
          return (
            <button
              key={p.id}
              className={`player-tab ${activePlayer === i ? 'active' : ''}`}
              onClick={() => setActivePlayer(i)}
              style={activePlayer === i ? { borderBottomColor: p.color } : {}}
            >
              <div className="tab-avatar" style={{ background: p.color }}>
                {p.name.charAt(0).toUpperCase()}
              </div>
              {s != null && (
                <div className="tab-score" style={{ background: p.color }}>{s}</div>
              )}
            </button>
          );
        })}
      </div>

      {/* Score entry */}
      <div className="score-area">
        <ScorePad
          playerId={player.id}
          playerName={player.name}
          playerColor={player.color}
          currentScore={currentScore}
          hole={t.currentHole}
          onScore={setScore}
        />
      </div>

      {/* Hole summary row */}
      <div className="hole-summary">
        {t.players.map((p) => {
          const s = currentHoleData.scores[p.id];
          return (
            <div key={p.id} className="summary-cell">
              <div className="summary-name">{p.name.split(' ')[0]}</div>
              <div
                className="summary-score"
                style={s != null ? { background: p.color, color: '#fff' } : {}}
              >
                {s ?? '—'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Finish button */}
      {holesCompleted === 18 && (
        <button
          className="btn-primary finish-btn"
          onClick={() => dispatch({ type: 'FINISH_TOURNAMENT' })}
        >
          Voir le classement final →
        </button>
      )}
    </div>
  );
}
