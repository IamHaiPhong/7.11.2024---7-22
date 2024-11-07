import React from 'react';
import { Link } from 'react-router-dom';
import { Wind } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Wind className="h-8 w-8 text-cyan-500" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Hurricane.AI
            </span>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8">
            <Link
              to="/about"
              className="text-gray-700 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About us
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/feedback"
              className="text-gray-700 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Feedback
            </Link>
          </div>

          <a
            href="https://www.hurricaneai.online"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-colors"
          >
            Visit Website
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;