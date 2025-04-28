import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResultChart from '../components/ResultChart';
import { useQuiz } from '../context/QuizContext';
import { 
  Award, 
  BarChart, 
  BookOpen, 
  BrainCircuit, 
  CheckCircle2, 
  RefreshCw, 
  XCircle 
} from 'lucide-react';

const Results: React.FC = () => {
  const navigate = useNavigate();
  const { 
    score, 
    totalAnswered, 
    answeredWords, 
    words, 
    categoryCounts, 
    difficultyCounts,
    resetQuiz 
  } = useQuiz();
  
  const percentage = totalAnswered > 0 
    ? Math.round((score / totalAnswered) * 100) 
    : 0;
  
  const incorrect = totalAnswered - score;
  
  // Get performance grade
  const getGrade = () => {
    if (percentage >= 90) return 'Excellent';
    if (percentage >= 80) return 'Great';
    if (percentage >= 70) return 'Good';
    if (percentage >= 60) return 'Fair';
    return 'Needs Practice';
  };
  
  const handleStartNewQuiz = () => {
    resetQuiz();
    navigate('/quiz');
  };
  
  const handlePracticeMode = () => {
    navigate('/practice');
  };
  
  if (totalAnswered === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">No Quiz Results Yet</h2>
          <p className="text-gray-300 mb-6">Take a quiz to see your results here.</p>
          <button 
            onClick={() => navigate('/quiz')} 
            className="btn-primary"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-400 mb-8">
          Your Quiz Results
        </h2>
        
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Award className="h-12 w-12 text-purple-400 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {getGrade()}
                </h3>
                <p className="text-gray-300">
                  {score} correct out of {totalAnswered}
                </p>
              </div>
            </div>
            
            <div className="text-center bg-gray-700 px-6 py-3 rounded-lg">
              <span className="text-3xl font-bold text-purple-400">{percentage}%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 flex items-center">
              <CheckCircle2 className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <h4 className="text-green-400 font-semibold">Correct</h4>
                <p className="text-white text-xl">{score}</p>
              </div>
            </div>
            
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 flex items-center">
              <XCircle className="h-8 w-8 text-red-500 mr-3" />
              <div>
                <h4 className="text-red-400 font-semibold">Incorrect</h4>
                <p className="text-white text-xl">{incorrect}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <BarChart className="h-5 w-5 mr-2 text-purple-400" />
            Performance Analytics
          </h3>
          
          <ResultChart 
            correct={score} 
            incorrect={incorrect}
            categoryCounts={categoryCounts}
            difficultyCounts={difficultyCounts}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            onClick={handleStartNewQuiz}
            className="btn-primary flex items-center justify-center"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Start New Quiz
          </button>
          
          <button
            onClick={handlePracticeMode}
            className="btn-secondary flex items-center justify-center"
          >
            <BrainCircuit className="h-5 w-5 mr-2" />
            Practice Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;