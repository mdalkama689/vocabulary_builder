import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, BrainCircuit, BarChart as ChartBar, GraduationCap } from 'lucide-react';
import { useQuiz } from '../context/QuizContext';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { initializeQuiz } = useQuiz();
  const [wordCount, setWordCount] = useState(10);

  const handleStartQuiz = () => {
    initializeQuiz(wordCount);
    navigate('/quiz');
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">VocaQuiz</h1>
          <p className="text-xl text-gray-300 mb-8">Expand your vocabulary with an engaging and interactive quiz experience.</p>
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-xs">
              <label htmlFor="wordCount" className="block text-sm font-medium text-gray-300 mb-2">
                Number of Words
              </label>
              <select
                id="wordCount"
                value={wordCount}
                onChange={(e) => setWordCount(Number(e.target.value))}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value={5}>5 words</option>
                <option value={10}>10 words</option>
                <option value={15}>15 words</option>
                <option value={20}>20 words</option>
                <option value={25}>25 words</option>
                <option value={50}>All 50 words</option>
              </select>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={handleStartQuiz} className="btn-primary px-8 py-3 text-lg">
                Start Quiz
              </button>
              <Link to="/practice" className="btn-secondary px-8 py-3 text-lg">
                Practice Mode
              </Link>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card hover:border-purple-500 transition-all">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold">Vocabulary Quiz</h3>
            </div>
            <p className="text-gray-300">Test your vocabulary knowledge with our comprehensive quiz featuring 50+ carefully selected words.</p>
          </div>
          
          <div className="card hover:border-purple-500 transition-all">
            <div className="flex items-center mb-4">
              <BrainCircuit className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold">Practice Mode</h3>
            </div>
            <p className="text-gray-300">Review vocabulary words with interactive flashcards to reinforce your learning.</p>
          </div>
          
          <div className="card hover:border-purple-500 transition-all">
            <div className="flex items-center mb-4">
              <ChartBar className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold">Progress Tracking</h3>
            </div>
            <p className="text-gray-300">View detailed statistics about your performance, including charts and insights.</p>
          </div>
          
          <div className="card hover:border-purple-500 transition-all">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold">Learn & Improve</h3>
            </div>
            <p className="text-gray-300">Get immediate feedback on your answers and explanations for each word.</p>
          </div>
        </div>
        
        {/* How to Play Section */}
        <div className="card mb-16">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">How to Play</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-300">
            <li className="pl-2">
              <span className="font-medium text-white">Choose your mode:</span> Start a new quiz or practice with flashcards.
            </li>
            <li className="pl-2">
              <span className="font-medium text-white">Select word count:</span> Choose how many words you want to be tested on.
            </li>
            <li className="pl-2">
              <span className="font-medium text-white">Answer questions:</span> Type the meaning of each word shown.
            </li>
            <li className="pl-2">
              <span className="font-medium text-white">Get instant feedback:</span> See if your answer was correct and learn the proper definition.
            </li>
            <li className="pl-2">
              <span className="font-medium text-white">Track progress:</span> Your score is tracked as you go through the quiz.
            </li>
            <li className="pl-2">
              <span className="font-medium text-white">Review results:</span> When finished, see your final score and detailed performance analytics.
            </li>
          </ol>
        </div>
        
        {/* Get Started CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to expand your vocabulary?</h2>
          <p className="text-gray-300 mb-6">Challenge yourself with our vocabulary quiz and see how many words you know!</p>
          <button onClick={handleStartQuiz} className="btn-primary px-8 py-3 text-lg">
            Begin Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;