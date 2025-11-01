
import React from 'react';
import { Player } from '../types';

interface ScorecardTableProps {
  players: Player[];
  onScoreChange: (playerId: string, holeIndex: number, score: number) => void;
  onDeletePlayer: (playerId: string) => void;
}

const ScoreInput: React.FC<{
  score: number;
  onChange: (newScore: number) => void;
}> = ({ score, onChange }) => {

  const handleScoreInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      onChange(0);
      return;
    }
    
    let newScore = parseInt(value, 10);
    if (isNaN(newScore) || newScore < 0) {
      newScore = 0;
    } else if (newScore > 6) {
      newScore = 7; // Rule: after 6 attempts, score is 7
    }
    
    onChange(newScore);
  };

  return (
    <input
      type="number"
      min="0"
      max="7"
      value={score === 0 ? '' : score}
      onChange={handleScoreInputChange}
      className="w-14 h-10 text-center bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
    />
  );
};


const ScorecardTable: React.FC<ScorecardTableProps> = ({ players, onScoreChange, onDeletePlayer }) => {
  const holes = Array.from({ length: 18 }, (_, i) => i + 1);

  if (players.length === 0) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <i className="ph-light ph-users-three text-6xl text-gray-300 mb-4"></i>
        <h3 className="text-xl font-bold text-gray-700">No Players Yet</h3>
        <p className="text-gray-500">Add players using the form to start scoring.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="sticky left-0 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider z-10">
                Player
              </th>
              {holes.map(hole => (
                <th key={hole} scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {hole}
                </th>
              ))}
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
               <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {players.map(player => {
              const totalScore = player.scores.reduce((sum, score) => sum + score, 0);
              return (
                <tr key={player.id} className="hover:bg-gray-50 transition-colors">
                  <td className="sticky left-0 bg-white hover:bg-gray-50 px-6 py-4 whitespace-nowrap z-10">
                    <div className="font-bold text-gray-900">{player.name}</div>
                    <div className="text-sm text-gray-500">{player.country}</div>
                  </td>
                  {player.scores.map((score, index) => (
                    <td key={index} className="px-2 py-2 whitespace-nowrap text-center">
                      <ScoreInput 
                        score={score}
                        onChange={(newScore) => onScoreChange(player.id, index, newScore)}
                      />
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap text-center text-xl font-bold text-emerald-600">
                    {totalScore}
                  </td>
                   <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => onDeletePlayer(player.id)}
                      className="text-red-500 hover:text-red-700 transition"
                      title={`Remove ${player.name}`}
                    >
                      <i className="ph-bold ph-trash text-xl"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScorecardTable;
