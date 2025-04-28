import React, { useState, useEffect } from 'react';
import FlashCard from '../components/FlashCard';
import { 
  vocabularyList, 
  getWordsByDifficulty, 
  getWordsByCategory, 
  VocabularyWord 
} from '../data/vocabulary';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const Practice: React.FC = () => {
  const [words, setWords] = useState<VocabularyWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [...new Set(vocabularyList.map(word => word.category))];
  const difficulties = [...new Set(vocabularyList.map(word => word.difficulty))];
  
  useEffect(() => {
    filterWords();
  }, [selectedDifficulty, selectedCategory]);
  
  const filterWords = () => {
    let filteredWords = [...vocabularyList];
    
    if (selectedDifficulty !== 'all') {
      filteredWords = filteredWords.filter(
        word => word.difficulty === selectedDifficulty
      );
    }
    
    if (selectedCategory !== 'all') {
      filteredWords = filteredWords.filter(
        word => word.category === selectedCategory
      );
    }
    
    setWords(filteredWords);
    setCurrentIndex(0);
  };
  
  const handlePrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === words.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };
  
  if (words.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">No words match your filters</h2>
          <p className="text-gray-300 mb-6">Try adjusting your filter settings.</p>
          <button 
            onClick={() => {
              setSelectedCategory('all');
              setSelectedDifficulty('all');
            }}
            className="btn-primary"
          >
            Reset Filters
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400">
            Practice Mode
          </h2>
          <button 
            onClick={toggleFilter} 
            className="btn-secondary flex items-center"
          >
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
        </div>
        
        {filterOpen && (
          <div className="card mb-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 text-white">Filter Words</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Difficulty</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="difficulty"
                      value="all"
                      checked={selectedDifficulty === 'all'}
                      onChange={() => setSelectedDifficulty('all')}
                      className="mr-2"
                    />
                    <span className="text-gray-200">All Difficulties</span>
                  </label>
                  
                  {difficulties.map(difficulty => (
                    <label key={difficulty} className="flex items-center">
                      <input
                        type="radio"
                        name="difficulty"
                        value={difficulty}
                        checked={selectedDifficulty === difficulty}
                        onChange={() => setSelectedDifficulty(difficulty)}
                        className="mr-2"
                      />
                      <span className="text-gray-200">
                        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Category</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="mr-2"
                    />
                    <span className="text-gray-200">All Categories</span>
                  </label>
                  
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2"
                      />
                      <span className="text-gray-200">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center mb-6">
          <p className="text-gray-300">
            Card {currentIndex + 1} of {words.length}
          </p>
        </div>
        
        <FlashCard word={words[currentIndex]} />
        
        <div className="flex justify-between mt-8">
          <button 
            onClick={handlePrevious} 
            className="btn-secondary flex items-center"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Previous
          </button>
          
          <button 
            onClick={handleNext} 
            className="btn-secondary flex items-center"
          >
            Next
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;