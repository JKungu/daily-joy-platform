
import React, { useState } from 'react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import Auth from '@/components/Auth';
import Dashboard from '@/components/Dashboard';
import Jokes from '@/components/Jokes';
import Experiences from '@/components/Experiences';

type ViewType = 'dashboard' | 'jokes' | 'experiences';

const AppContent: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

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
