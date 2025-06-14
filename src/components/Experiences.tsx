
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Heart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface ExperiencesProps {
  onBack: () => void;
}

interface Experience {
  title: string;
  story: string;
  moral: string;
}

const experiences: Experience[] = [
  {
    title: "The Power of Small Steps",
    story: "A young woman dreamed of climbing Mount Everest but felt overwhelmed by the enormity of the task. Instead of giving up, she decided to start small. She began by hiking local trails, then progressively tackled more challenging mountains. Each step built her confidence and skills. Five years later, she stood at the summit of Everest, realizing that every great achievement begins with a single step.",
    moral: "Every journey of a thousand miles begins with a single step. Don't let the size of your dreams intimidate you—break them down into manageable pieces."
  },
  {
    title: "The Butterfly Effect of Kindness",
    story: "A barista decided to pay for the coffee of the person behind him in line. That person was having the worst day of their life and was contemplating giving up on their dreams. This simple act of kindness reminded them that there was still good in the world. Inspired, they went on to start a charity that has now helped thousands of people. The barista never knew the impact of his $5 gesture.",
    moral: "Small acts of kindness can create ripple effects that change lives in ways we may never know. Never underestimate the power of compassion."
  },
  {
    title: "Learning from Failure",
    story: "A young entrepreneur's first business failed spectacularly, leaving him broke and embarrassed. Instead of giving up, he analyzed every mistake, learned from each failure, and applied those lessons to his next venture. His second business also failed, but he failed faster and learned quicker. His third business became a huge success, and he credits his failures as his greatest teachers.",
    moral: "Failure isn't the opposite of success; it's a stepping stone to it. Every failure teaches us something valuable if we're willing to listen."
  },
  {
    title: "The Teacher Who Believed",
    story: "A struggling student was labeled as 'slow' by most teachers and was ready to drop out of school. One teacher saw something different and spent extra time helping him discover his unique way of learning. She encouraged his curiosity and celebrated his small victories. That student went on to become a renowned scientist, and he still credits that one teacher who believed in him when no one else did.",
    moral: "Sometimes all we need is one person who believes in us. Be that person for someone else, and look for that person in your own life."
  },
  {
    title: "The Art of Patience",
    story: "A master gardener was asked why his garden was so beautiful while others struggled. He smiled and showed them a tree he had been nurturing for 20 years. 'This tree taught me patience,' he said. 'I water it daily, prune it carefully, and protect it from storms. I don't see immediate results, but I trust the process. Most people want instant results, but the most beautiful things in life take time to grow.'",
    moral: "Great things take time. In our instant-gratification world, the ability to be patient and trust the process is a superpower."
  }
];

const Experiences: React.FC<ExperiencesProps> = ({ onBack }) => {
  const [currentExperience, setCurrentExperience] = useState<Experience | null>(null);

  const generateExperience = () => {
    const randomIndex = Math.floor(Math.random() * experiences.length);
    setCurrentExperience(experiences[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button
            onClick={onBack}
            variant="ghost"
            className="flex items-center gap-2 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-gray-800 dark:text-gray-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Inspiring Life Experiences ✨
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover stories that inspire and motivate
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <Button
              onClick={generateExperience}
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 transition-all duration-200 text-lg px-8 py-3 text-white"
              size="lg"
            >
              Generate Experience
            </Button>
          </div>

          {currentExperience && (
            <Card className="shadow-xl animate-fade-in dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center justify-center gap-2">
                      <Heart className="w-6 h-6 text-red-500" />
                      {currentExperience.title}
                    </h3>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      {currentExperience.story}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                    <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Key Takeaway:</h4>
                    <p className="text-purple-700 dark:text-purple-200 font-medium">
                      {currentExperience.moral}
                    </p>
                  </div>

                  <div className="text-center pt-4">
                    <Button
                      onClick={generateExperience}
                      variant="outline"
                      className="hover:bg-purple-50 border-purple-300 text-purple-700 hover:border-purple-400 dark:hover:bg-purple-900/30 dark:border-purple-600 dark:text-purple-400 dark:hover:border-purple-500"
                    >
                      Read Another Story
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

export default Experiences;
