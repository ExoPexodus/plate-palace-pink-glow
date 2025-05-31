
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Map } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="glass-card border-b border-pink-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">RestaurantFinder</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-pink-500/20 ${
                isActive('/') ? 'bg-pink-500/20 text-pink-400' : 'text-gray-300 hover:text-pink-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/maps" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-pink-500/20 ${
                isActive('/maps') ? 'bg-pink-500/20 text-pink-400' : 'text-gray-300 hover:text-pink-400'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>Maps</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
