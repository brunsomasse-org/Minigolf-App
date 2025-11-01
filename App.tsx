
import React, { useState, useMemo, useCallback } from 'react';
import { Player } from './types';
import Header from './components/Header';
import PlayerForm from './components/PlayerForm';
import ScorecardTable from './components/ScorecardTable';

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  const handleAddPlayer = useCallback((name: string, country: string) => {
    const newPlayer: Player = {
      id: Date.now().toString(),
      name,
      country,
      scores: Array(18).fill(0),
    };
    setPlayers(prevPlayers => [...prevPlayers, newPlayer]);
  }, []);

  const handleScoreChange = useCallback((playerId: string, holeIndex: number, score: number) => {
    setPlayers(prevPlayers =>
      prevPlayers.map(player => {
        if (player.id === playerId) {
          const newScores = [...player.scores];
          newScores[holeIndex] = score;
          return { ...player, scores: newScores };
        }
        return player;
      })
    );
  }, []);
  
  const handleDeletePlayer = useCallback((playerId: string) => {
    setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== playerId));
  }, []);

  const sortedPlayers = useMemo(() => {
    return [...players].sort((a, b) => {
      const totalA = a.scores.reduce((sum, score) => sum + score, 0);
      const totalB = b.scores.reduce((sum, score) => sum + score, 0);
      if (totalA !== totalB) {
        return totalA - totalB;
      }
      return a.name.localeCompare(b.name);
    });
  }, [players]);

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <PlayerForm onAddPlayer={handleAddPlayer} />
          </div>
          <div className="lg:col-span-2">
            <ScorecardTable 
              players={sortedPlayers} 
              onScoreChange={handleScoreChange}
              onDeletePlayer={handleDeletePlayer}
            />
          </div>
        </div>
      </main>
       <footer className="text-center p-4 mt-8 text-gray-500 text-sm">
        <p>Built by a World-Class Senior Frontend React Engineer.</p>
      </footer>
    </div>
  );
};

export default App;
