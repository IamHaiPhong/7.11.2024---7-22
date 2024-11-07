import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Hurricane, Sun, Moon } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <nav className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-lg`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Hurricane className="h-8 w-8 text-cyan-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Hurricane.AI
            </span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-cyan-500 transition-colors">
              About Us
            </Link>
            <Link to="/pricing" className="hover:text-cyan-500 transition-colors">
              Pricing
            </Link>
            <Link to="/feedback" className="hover:text-cyan-500 transition-colors">
              Feedback
            </Link>
            <a
              href="https://www.hurricaneai.online"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Visit Website
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;