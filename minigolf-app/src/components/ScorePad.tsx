import { useState } from 'react';
import { Score } from '../types';

interface Props {
  playerId: string;
  playerName: string;
  playerColor: string;
  currentScore: Score;
  hole: number;
  onScore: (score: Score) => void;
}

const SCORE_LABELS: Record<number, string> = {
  1: 'Trou en un!',
  2: 'Birdie',
  3: '–',
  4: 'Par',
  5: '+1',
  6: '+2',
  7: '+3',
};

export default function ScorePad({ playerId, playerName, playerColor, currentScore, hole, onScore }: Props) {
  const [flash, setFlash] = useState<number | null>(null);

  const handleScore = (s: number) => {
    setFlash(s);
    onScore(s as Score);
    setTimeout(() => setFlash(null), 400);
  };

  return (
    <div className="score-pad">
      <div className="score-pad-header">
        <div className="player-chip" style={{ borderColor: playerColor }}>
          <div className="player-avatar" style={{ background: playerColor }}>
            {playerName.charAt(0).toUpperCase()}
          </div>
          <span className="player-chip-name">{playerName}</span>
        </div>
        {currentScore !== null && (
          <div className="current-score-badge" style={{ background: playerColor }}>
            {currentScore}
          </div>
        )}
      </div>

      <div className="score-grid">
        {[1, 2, 3, 4, 5, 6, 7].map((s) => {
          const isSelected = currentScore === s;
          const isFlashing = flash === s;
          return (
            <button
              key={s}
              className={`score-btn ${isSelected ? 'selected' : ''} ${isFlashing ? 'flash' : ''}`}
              style={isSelected ? { background: playerColor, borderColor: playerColor } : {}}
              onClick={() => handleScore(s)}
            >
              <span className="score-num">{s}</span>
              <span className="score-label">{SCORE_LABELS[s]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
