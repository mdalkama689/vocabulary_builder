import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-purple-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-6">Page Not Found</h2>
      <p className="text-gray-300 text-center max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary flex items-center">
        <Home className="mr-2 h-5 w-5" />
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;