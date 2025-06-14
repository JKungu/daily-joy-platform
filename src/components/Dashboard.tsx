
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Smile, Star, LogOut } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface DashboardProps {
  onSelectJokes: () => void;
  onSelectExperiences: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectJokes, onSelectExperiences }) => {
  const { user, profile, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Welcome back!</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">{user?.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              onClick={logout}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 hover:bg-red-50 hover:border-red-300 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:border-red-600 dark:hover:text-red-400 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            What would you like today?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose your mood and let's make your day better!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smile className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Jokes</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Need a good laugh? Get some hilarious jokes to brighten your day!
                </p>
              </div>
              <Button
                onClick={onSelectJokes}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 text-white"
                size="lg"
              >
                Get Some Jokes
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Experiences</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Looking for inspiration? Discover amazing stories and life experiences!
                </p>
              </div>
              <Button
                onClick={onSelectExperiences}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 transition-all duration-200 text-white"
                size="lg"
              >
                Explore Experiences
              </Button>
            </CardContent>
          </Card>
        </div>

        {profile && profile.age < 18 && (
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg text-center animate-fade-in">
            <p className="text-blue-800 dark:text-blue-200">
              🎉 Hey there, young explorer! Enjoy age-appropriate content curated just for you.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
