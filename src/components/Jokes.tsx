
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { ThemeToggle } from './ThemeToggle';

interface JokesProps {
  onBack: () => void;
}

interface Joke {
  setup: string;
  punchline: string;
}

const Jokes: React.FC<JokesProps> = ({ onBack }) => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateJoke = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (response.ok) {
        const jokeData = await response.json();
        setJoke({
          setup: jokeData.setup,
          punchline: jokeData.punchline
        });
      } else {
        // Fallback to hardcoded jokes if API fails
        const fallbackJokes = [
          {
            setup: "Why don't scientists trust atoms?",
            punchline: "Because they make up everything!"
          },
          {
            setup: "Why did the scarecrow win an award?",
            punchline: "He was outstanding in his field!"
          },
          {
            setup: "Why don't eggs tell jokes?",
            punchline: "They'd crack each other up!"
          },
          {
            setup: "What do you call a fake noodle?",
            punchline: "An impasta!"
          },
          {
            setup: "Why did the math book look so sad?",
            punchline: "Because it was full of problems!"
          }
        ];
        const randomJoke = fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
        setJoke(randomJoke);
      }
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Couldn't fetch a joke right now. Try again!",
        variant: "destructive"
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button
            onClick={onBack}
            variant="ghost"
            className="flex items-center gap-2 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Time for Some Laughs! 😄
          </h2>
          <p className="text-xl text-gray-600">
            Click the button below to get a random joke
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <Button
              onClick={generateJoke}
              disabled={isLoading}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 text-lg px-8 py-3"
              size="lg"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Getting Joke...
                </>
              ) : (
                'Generate Joke'
              )}
            </Button>
          </div>

          {joke && (
            <Card className="shadow-xl animate-fade-in">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {joke.setup}
                    </h3>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-lg text-blue-600 font-medium">
                        {joke.punchline}
                      </p>
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <Button
                      onClick={generateJoke}
                      variant="outline"
                      className="hover:bg-yellow-50 border-yellow-300 text-yellow-700 hover:border-yellow-400"
                    >
                      Another One!
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Jokes;
