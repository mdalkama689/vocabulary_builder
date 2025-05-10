import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Practice from './pages/Practice';
import Results from './pages/Results';
import NotFound from './pages/NotFound';
import { QuizProvider } from './context/QuizContext';
import { useEffect, useState } from 'react';
import TabShare from './components/share/TabShare';
import MobileShare from './components/share/MobileShare';

function App() {
    const [deviceType, setDeviceType] = useState<"big" | "small">("big");


  useEffect(() => {
    const handleResize = () => {
        setDeviceType(window.innerWidth < 1024 ? "small" : "big");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <QuizProvider>
    
      <Router>
     
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
             
          <Navbar />
          <main className="flex-grow">
             {deviceType === "small" ? <MobileShare /> : <TabShare />}
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