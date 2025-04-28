import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center text-purple-500 font-bold text-xl">
              <BookOpen className="h-8 w-8 mr-2" />
              <span>VocaQuiz</span>
            </NavLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900" 
                  : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/quiz" 
              className={({ isActive }) => 
                isActive 
                  ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900" 
                  : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              }
            >
              Quiz
            </NavLink>
            <NavLink 
              to="/practice" 
              className={({ isActive }) => 
                isActive 
                  ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900" 
                  : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              }
            >
              Practice
            </NavLink>
            <NavLink 
              to="/results" 
              className={({ isActive }) => 
                isActive 
                  ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900" 
                  : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              }
            >
              Results
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900" 
                : "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/quiz" 
            className={({ isActive }) => 
              isActive 
                ? "block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900" 
                : "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            }
            onClick={closeMenu}
          >
            Quiz
          </NavLink>
          <NavLink 
            to="/practice" 
            className={({ isActive }) => 
              isActive 
                ? "block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900" 
                : "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            }
            onClick={closeMenu}
          >
            Practice
          </NavLink>
          <NavLink 
            to="/results" 
            className={({ isActive }) => 
              isActive 
                ? "block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900" 
                : "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            }
            onClick={closeMenu}
          >
            Results
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;