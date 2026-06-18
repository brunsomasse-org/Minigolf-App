import { TournamentProvider, useTournament } from './store/tournament';
import HomeScreen from './components/HomeScreen';
import SetupScreen from './components/SetupScreen';
import ScorecardScreen from './components/ScorecardScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import BottomNav from './components/BottomNav';
import './index.css';

function AppInner() {
  const { state } = useTournament();
  const { activeView } = state;

  return (
    <div className="app-shell">
      <div className="screen-content">
        {activeView === 'home' && <HomeScreen />}
        {activeView === 'setup' && <SetupScreen />}
        {activeView === 'scorecard' && state.tournament && <ScorecardScreen />}
        {activeView === 'leaderboard' && state.tournament && <LeaderboardScreen />}
      </div>
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <TournamentProvider>
      <AppInner />
    </TournamentProvider>
  );
}
