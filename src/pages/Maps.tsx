
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { restaurants } from '@/data/restaurants';
import { MapPin } from 'lucide-react';

const Maps = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">Restaurant Locations</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find the perfect dining spot near you with our interactive map
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Restaurant List */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Restaurants</h2>
            <div className="space-y-3">
              {restaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedRestaurant.id === restaurant.id
                      ? 'bg-pink-500/20 border border-pink-500/30'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedRestaurant(restaurant)}
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium truncate">
                        {restaurant.name}
                      </h3>
                      <p className="text-gray-400 text-sm truncate">
                        {restaurant.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-xl overflow-hidden h-96 lg:h-full">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-full flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                  <p className="text-white text-lg mb-2">Interactive Map Coming Soon</p>
                  <p className="text-gray-400">
                    We're working on integrating Google Maps to show exact restaurant locations
                  </p>
                </div>
                
                {/* Restaurant Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={selectedRestaurant.image}
                        alt={selectedRestaurant.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-lg">
                          {selectedRestaurant.name}
                        </h3>
                        <p className="text-pink-400 mb-1">{selectedRestaurant.cuisine}</p>
                        <p className="text-gray-400 text-sm">
                          {selectedRestaurant.address}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-yellow-400">★</span>
                          <span className="text-white ml-1">{selectedRestaurant.rating}</span>
                          <span className="text-pink-400 ml-3">{selectedRestaurant.priceRange}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
