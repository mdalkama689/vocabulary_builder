import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Practice from './pages/Practice';
import Results from './pages/Results';
import NotFound from './pages/NotFound';
import { QuizProvider } from './context/QuizContext';

function App() {
  return (
    <QuizProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/results" element={<Results />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
         
        </div>
      </Router>
    </QuizProvider>
  );
}

export default App;