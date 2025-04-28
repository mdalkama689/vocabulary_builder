import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WordCard from '../components/WordCard';
import ProgressBar from '../components/ProgressBar';
import { useQuiz } from '../context/QuizContext';
import { ArrowRightCircle } from 'lucide-react';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const { 
    words, 
    currentWordIndex, 
    score, 
    totalAnswered,
    isQuizComplete, 
    answerQuestion, 
    nextQuestion, 
    resetQuiz 
  } = useQuiz();
  
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  const handleAnswer = (isAnswerCorrect: boolean) => {
    setIsCorrect(isAnswerCorrect);
    setShowAnswer(true);
    
    const currentWord = words[currentWordIndex];
    answerQuestion(currentWord.id, isAnswerCorrect);
  };
  
  const handleNext = () => {
    setShowAnswer(false);
    setIsCorrect(null);
    nextQuestion();
  };
  
  const handleViewResults = () => {
    navigate('/results');
  };
  
  const handleRestart = () => {
    resetQuiz();
  };
  
  if (words.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Loading Quiz...</h2>
          <p className="text-gray-300 mb-6">Setting up your vocabulary challenge.</p>
        </div>
      </div>
    );
  }
  
  if (isQuizComplete) {
    return (
      <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">Quiz Complete!</h2>
          <p className="text-xl text-gray-300 mb-6">
            You scored <span className="text-purple-400 font-bold">{score}</span> out of <span className="font-bold">{totalAnswered}</span>
            {' '}({Math.round((score / totalAnswered) * 100)}%)
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button onClick={handleViewResults} className="btn-primary flex items-center justify-center">
              <ChartBar className="h-5 w-5 mr-2" />
              View Detailed Results
            </button>
            <button onClick={handleRestart} className="btn-secondary flex items-center justify-center">
              <RefreshCw className="h-5 w-5 mr-2" />
              Start New Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  const currentWord = words[currentWordIndex];
  
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-400 mb-6">
          Vocabulary Quiz
        </h2>
        
        <ProgressBar 
          current={currentWordIndex + 1} 
          total={words.length} 
          correct={score} 
        />
        
        <WordCard 
          word={currentWord}
          onAnswer={handleAnswer}
          showAnswer={showAnswer}
          isCorrect={isCorrect}
        />
        
        {showAnswer && (
          <div className="flex justify-center mt-6 animate-fade-in">
            <button 
              onClick={handleNext} 
              className="btn-primary flex items-center"
            >
              {currentWordIndex < words.length - 1 ? (
                <>Next Word <ArrowRightCircle className="ml-2 h-5 w-5" /></>
              ) : (
                <>Complete Quiz</>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Import these for the quiz completion section
import { BarChart as ChartBar, RefreshCw } from 'lucide-react';

export default Quiz;