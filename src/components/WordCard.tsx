import React, { useState, useEffect } from 'react';
import { VocabularyWord } from '../data/vocabulary';
import { CheckCircle2, XCircle } from 'lucide-react';

interface WordCardProps {
  word: VocabularyWord;
  onAnswer: (isCorrect: boolean) => void;
  showAnswer: boolean;
  isCorrect: boolean | null;
}

const WordCard: React.FC<WordCardProps> = ({ word, onAnswer, showAnswer, isCorrect }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (showAnswer) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
      setUserAnswer('');
    }
  }, [showAnswer, word]);

  // Normalize text by removing punctuation, extra spaces, and converting to lowercase
  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') // Remove punctuation
      .replace(/\s+/g, ' ')                         // Replace multiple spaces with single space
      .trim();
  };

  // Get key terms from the correct meaning
  const getKeyTerms = (meaning: string): string[] => {
    const normalized = normalizeText(meaning);
    return normalized
      .split(' ')
      .filter(word => word.length > 3)  // Only consider words longer than 3 characters
      .filter(word => !commonWords.includes(word)); // Exclude common words
  };

  // Common words to ignore in comparison
  const commonWords = [
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'for',
    'it', 'with', 'as', 'not', 'on', 'with', 'he', 'she', 'they',
    'this', 'that', 'from', 'but', 'by', 'or', 'as', 'what', 'when',
    'where', 'who', 'which', 'there', 'all', 'their', 'will', 'would',
    'about', 'can', 'said', 'more', 'into', 'other', 'than', 'its'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const normalizedUserAnswer = normalizeText(userAnswer);
    const normalizedCorrectMeaning = normalizeText(word.meaning);
    
    // Get key terms from both answers
    const correctKeyTerms = getKeyTerms(word.meaning);
    const userKeyTerms = getKeyTerms(userAnswer);
    
    // Calculate matches
    let matchCount = 0;
    let requiredMatches = Math.ceil(correctKeyTerms.length * 0.6); // Require 60% of key terms
    
    correctKeyTerms.forEach(term => {
      if (userKeyTerms.some(userTerm => 
        userTerm.includes(term) || 
        term.includes(userTerm) ||
        levenshteinDistance(term, userTerm) <= 2 // Allow small typos
      )) {
        matchCount++;
      }
    });

    // Additional checks for very short answers or exact matches
    const isCorrect = 
      normalizedUserAnswer === normalizedCorrectMeaning || // Exact match
      (matchCount >= requiredMatches && userKeyTerms.length >= correctKeyTerms.length * 0.5) || // Key terms match
      (normalizedCorrectMeaning.includes(normalizedUserAnswer) && 
       userAnswer.length > normalizedCorrectMeaning.length * 0.7); // User answer is a substantial part of correct meaning
    
    onAnswer(isCorrect);
  };

  // Levenshtein distance for typo tolerance
  const levenshteinDistance = (str1: string, str2: string): number => {
    const track = Array(str2.length + 1).fill(null).map(() =>
      Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i++) track[0][i] = i;
    for (let j = 0; j <= str2.length; j++) track[j][0] = j;
    
    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
          track[j][i - 1] + 1,
          track[j - 1][i] + 1,
          track[j - 1][i - 1] + indicator
        );
      }
    }
    
    return track[str2.length][str1.length];
  };

  return (
    <div className={`card max-w-xl mx-auto my-8 animate-fade-in transition-all duration-300 ${isFlipped ? 'border-purple-500' : ''}`}>
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold mb-2 text-purple-400">{word.word}</h3>
        <p className="text-sm text-gray-400 mb-4">
          <span className={`px-2 py-1 rounded ${
            word.difficulty === 'easy' 
              ? 'bg-green-900 text-green-300' 
              : word.difficulty === 'medium'
                ? 'bg-yellow-900 text-yellow-300'
                : 'bg-red-900 text-red-300'
          }`}>
            {word.difficulty.charAt(0).toUpperCase() + word.difficulty.slice(1)}
          </span>
          <span className="ml-2 px-2 py-1 rounded bg-gray-700 text-gray-300">
            {word.category.charAt(0).toUpperCase() + word.category.slice(1)}
          </span>
        </p>
        
        {!showAnswer ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="answer" className="block text-sm font-medium text-gray-300 mb-1">
                What does this word mean?
              </label>
              <input
                type="text"
                id="answer"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="input"
                placeholder="Type the meaning here..."
                autoFocus
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn-primary w-full"
              disabled={userAnswer.trim() === ''}
            >
              Submit Answer
            </button>
          </form>
        ) : (
          <div className={`mt-4 p-4 rounded-md ${
            isCorrect 
              ? 'bg-green-900/30 border border-green-700' 
              : 'bg-red-900/30 border border-red-700'
          } animate-fade-in`}>
            <div className="flex items-center mb-2">
              {isCorrect ? (
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
              ) : (
                <XCircle className="h-6 w-6 text-red-500 mr-2" />
              )}
              <h4 className={`font-medium ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? 'Correct!' : 'Not quite right'}
              </h4>
            </div>
            
            <div className="mb-3">
              <p className="text-sm text-gray-300 font-semibold">Correct meaning:</p>
              <p className="text-white">{word.meaning}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-300 font-semibold">Example:</p>
              <p className="text-gray-300 italic">"{word.example}"</p>
            </div>
            
            {!isCorrect && userAnswer && (
              <div className="mt-3 pt-3 border-t border-red-700">
                <p className="text-sm text-gray-400">Your answer: <span className="text-gray-300">{userAnswer}</span></p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WordCard;