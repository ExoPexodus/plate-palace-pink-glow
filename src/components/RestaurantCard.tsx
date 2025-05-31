
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Restaurant } from '@/types/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="glass-card rounded-xl overflow-hidden hover-lift group cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <span className="bg-pink-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
              {restaurant.priceRange}
            </span>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {restaurant.cuisine}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
            {restaurant.name}
          </h3>
          
          <div className="flex items-center mb-3">
            {renderStars(restaurant.rating)}
            <span className="ml-2 text-gray-400">({restaurant.rating})</span>
          </div>
          
          <div className="flex items-center text-gray-400 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{restaurant.address}</span>
          </div>
          
          <p className="text-gray-300 text-sm line-clamp-2 mb-4">
            {restaurant.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {restaurant.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full text-xs"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
