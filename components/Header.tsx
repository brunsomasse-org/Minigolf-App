
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 md:px-8">
        <div className="flex items-center space-x-4">
          <i className="ph-fill ph-golf text-5xl"></i>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Mini-Golf Tournament Scorer
            </h1>
            <p className="text-emerald-200 text-sm">Real-time Leaderboard</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
