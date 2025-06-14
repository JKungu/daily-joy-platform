
import React, { useState } from 'react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import Auth from '@/components/Auth';
import Dashboard from '@/components/Dashboard';
import Jokes from '@/components/Jokes';
import Experiences from '@/components/Experiences';

type ViewType = 'dashboard' | 'jokes' | 'experiences';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  if (!isAuthenticated) {
    return <Auth />;
  }

  switch (currentView) {
    case 'jokes':
      return <Jokes onBack={() => setCurrentView('dashboard')} />;
    case 'experiences':
      return <Experiences onBack={() => setCurrentView('dashboard')} />;
    default:
      return (
        <Dashboard
          onSelectJokes={() => setCurrentView('jokes')}
          onSelectExperiences={() => setCurrentView('experiences')}
        />
      );
  }
};

const Index: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default Index;
