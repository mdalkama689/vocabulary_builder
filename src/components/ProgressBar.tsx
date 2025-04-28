import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  correct: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, correct }) => {
  const progress = (current / total) * 100;
  
  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">
          Question {current} of {total}
        </span>
        <span className="text-sm font-medium text-purple-400">
          {correct} correct ({Math.round((correct / Math.max(current - 1, 1)) * 100) || 0}%)
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;