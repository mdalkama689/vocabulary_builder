import React, { useState } from 'react';
import { VocabularyWord } from '../data/vocabulary';

interface FlashCardProps {
  word: VocabularyWord;
}

const FlashCard: React.FC<FlashCardProps> = ({ word }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div 
      className="w-full max-w-md mx-auto h-64 perspective-1000 cursor-pointer"
      onClick={toggleFlip}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front side */}
        <div className={`absolute w-full h-full backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'} 
          card flex flex-col justify-center items-center transition-opacity duration-500`}>
          <h3 className="text-3xl font-bold text-purple-400 mb-2">{word.word}</h3>
          <div className="flex space-x-2 mt-2">
            <span className={`px-2 py-1 text-xs rounded ${
              word.difficulty === 'easy' 
                ? 'bg-green-900 text-green-300' 
                : word.difficulty === 'medium'
                  ? 'bg-yellow-900 text-yellow-300'
                  : 'bg-red-900 text-red-300'
            }`}>
              {word.difficulty}
            </span>
            <span className="px-2 py-1 text-xs rounded bg-gray-700 text-gray-300">
              {word.category}
            </span>
          </div>
          <p className="text-gray-400 mt-4 text-sm text-center">Click to see meaning</p>
        </div>
        
        {/* Back side */}
        <div className={`absolute w-full h-full backface-hidden ${isFlipped ? 'opacity-100' : 'opacity-0'}
          card flex flex-col justify-center transition-opacity duration-500`}>
          <h4 className="text-xl font-semibold text-purple-300 mb-3">Meaning:</h4>
          <p className="text-white mb-4">{word.meaning}</p>
          <h4 className="text-xl font-semibold text-purple-300 mb-1">Example:</h4>
          <p className="text-gray-300 italic mb-4">"{word.example}"</p>
          <p className="text-gray-400 text-sm text-center mt-2">Click to see word</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;