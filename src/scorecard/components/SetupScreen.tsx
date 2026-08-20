import { useState } from 'react';
import { useTournament } from '../store/tournament';
import { Player } from '../types';

const PLAYER_COLORS = [
  '#E5352B', '#1A3C2E', '#2D6BE4', '#F5A623',
  '#8B5CF6', '#EC4899', '#0EA5E9', '#10B981',
];

export default function SetupScreen() {
  const { dispatch } = useTournament();
  const [tournamentName, setTournamentName] = useState('Tournoi UMB');
  const [playerNames, setPlayerNames] = useState(['', '']);

  const addPlayer = () => {
    if (playerNames.length < 8) setPlayerNames([...playerNames, '']);
  };

  const removePlayer = (i: number) => {
    if (playerNames.length <= 2) return;
    setPlayerNames(playerNames.filter((_, idx) => idx !== i));
  };

  const updateName = (i: number, val: string) => {
    const next = [...playerNames];
    next[i] = val;
    setPlayerNames(next);
  };

  const startTournament = () => {
    const validNames = playerNames.filter((n) => n.trim());
    if (validNames.length < 1) return;
    const players: Player[] = validNames.map((name, i) => ({
      id: crypto.randomUUID(),
      name: name.trim(),
      color: PLAYER_COLORS[i % PLAYER_COLORS.length],
    }));
    dispatch({
      type: 'CREATE_TOURNAMENT',
      payload: { name: tournamentName.trim() || 'Tournoi UMB', players },
    });
  };

  const isReady = playerNames.filter((n) => n.trim()).length >= 1;

  return (
    <div className="setup-screen">
      <div className="setup-header">
        <button className="back-btn" onClick={() => dispatch({ type: 'SET_VIEW', payload: 'home' })}>
          ← Retour
        </button>
        <h2 className="setup-title">Nouvelle partie</h2>
      </div>

      <div className="setup-body">
        <div className="field-group">
          <label className="field-label">Nom du tournoi</label>
          <input
            className="field-input"
            value={tournamentName}
            onChange={(e) => setTournamentName(e.target.value)}
            placeholder="Tournoi UMB"
          />
        </div>

        <div className="field-group">
          <label className="field-label">Joueurs ({playerNames.length}/8)</label>
          <div className="players-list">
            {playerNames.map((name, i) => (
              <div key={i} className="player-row">
                <div
                  className="player-color-dot"
                  style={{ background: PLAYER_COLORS[i % PLAYER_COLORS.length] }}
                />
                <input
                  className="field-input player-input"
                  value={name}
                  onChange={(e) => updateName(i, e.target.value)}
                  placeholder={`Joueur ${i + 1}`}
                />
                {playerNames.length > 2 && (
                  <button className="remove-btn" onClick={() => removePlayer(i)}>✕</button>
                )}
              </div>
            ))}
          </div>
          {playerNames.length < 8 && (
            <button className="add-player-btn" onClick={addPlayer}>
              + Ajouter un joueur
            </button>
          )}
        </div>
      </div>

      <div className="setup-footer">
        <button
          className={`btn-primary ${!isReady ? 'disabled' : ''}`}
          onClick={startTournament}
          disabled={!isReady}
        >
          <span className="btn-icon">⛳</span>
          Commencer · 18 trous
        </button>
      </div>
    </div>
  );
}
