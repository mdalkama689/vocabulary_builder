import React, { createContext, useContext, useState, useEffect } from 'react';
import { VocabularyWord, getRandomWords } from '../data/vocabulary';

interface QuizContextProps {
  words: VocabularyWord[];
  currentWordIndex: number;
  score: number;
  totalAnswered: number;
  answeredWords: Record<number, boolean>;
  categoryCounts: Record<string, { correct: number; incorrect: number }>;
  difficultyCounts: Record<string, { correct: number; incorrect: number }>;
  isQuizComplete: boolean;
  initializeQuiz: (wordCount?: number) => void;
  answerQuestion: (wordId: number, isCorrect: boolean) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

interface QuizProviderProps {
  children: React.ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [words, setWords] = useState<VocabularyWord[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [answeredWords, setAnsweredWords] = useState<Record<number, boolean>>({});
  const [categoryCounts, setCategoryCounts] = useState<Record<string, { correct: number; incorrect: number }>>({});
  const [difficultyCounts, setDifficultyCounts] = useState<Record<string, { correct: number; incorrect: number }>>({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // Initialize from local storage if available
  useEffect(() => {
    const savedState = localStorage.getItem('vocaQuizState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        setWords(parsedState.words || []);
        setCurrentWordIndex(parsedState.currentWordIndex || 0);
        setScore(parsedState.score || 0);
        setTotalAnswered(parsedState.totalAnswered || 0);
        setAnsweredWords(parsedState.answeredWords || {});
        setCategoryCounts(parsedState.categoryCounts || {});
        setDifficultyCounts(parsedState.difficultyCounts || {});
        setIsQuizComplete(parsedState.isQuizComplete || false);
      } catch (error) {
        console.error('Error parsing saved quiz state:', error);
        initializeQuiz();
      }
    } else {
      initializeQuiz();
    }
  }, []);

  // Save state to local storage when it changes
  useEffect(() => {
    if (words.length > 0) {
      const stateToSave = {
        words,
        currentWordIndex,
        score,
        totalAnswered,
        answeredWords,
        categoryCounts,
        difficultyCounts,
        isQuizComplete,
      };
      localStorage.setItem('vocaQuizState', JSON.stringify(stateToSave));
    }
  }, [words, currentWordIndex, score, totalAnswered, answeredWords, categoryCounts, difficultyCounts, isQuizComplete]);

  const initializeQuiz = (wordCount = 10) => {
    const randomWords = getRandomWords(wordCount);
    setWords(randomWords);
    setCurrentWordIndex(0);
    setScore(0);
    setTotalAnswered(0);
    setAnsweredWords({});
    setCategoryCounts({});
    setDifficultyCounts({});
    setIsQuizComplete(false);
  };

  const answerQuestion = (wordId: number, isCorrect: boolean) => {
    const currentWord = words.find(w => w.id === wordId);
    if (!currentWord) return;

    setTotalAnswered(prev => prev + 1);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    // Update answered words
    setAnsweredWords(prev => ({
      ...prev,
      [wordId]: isCorrect
    }));
    
    // Update category stats
    setCategoryCounts(prev => {
      const category = currentWord.category;
      const current = prev[category] || { correct: 0, incorrect: 0 };
      
      return {
        ...prev,
        [category]: {
          correct: current.correct + (isCorrect ? 1 : 0),
          incorrect: current.incorrect + (isCorrect ? 0 : 1)
        }
      };
    });
    
    // Update difficulty stats
    setDifficultyCounts(prev => {
      const difficulty = currentWord.difficulty;
      const current = prev[difficulty] || { correct: 0, incorrect: 0 };
      
      return {
        ...prev,
        [difficulty]: {
          correct: current.correct + (isCorrect ? 1 : 0),
          incorrect: current.incorrect + (isCorrect ? 0 : 1)
        }
      };
    });
  };

  const nextQuestion = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    initializeQuiz();
  };

  return (
    <QuizContext.Provider
      value={{
        words,
        currentWordIndex,
        score,
        totalAnswered,
        answeredWords,
        categoryCounts,
        difficultyCounts,
        isQuizComplete,
        initializeQuiz,
        answerQuestion,
        nextQuestion,
        resetQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};