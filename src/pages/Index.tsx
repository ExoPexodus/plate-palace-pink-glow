
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurants } from '@/data/restaurants';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  const cuisines = ['All', ...Array.from(new Set(restaurants.map(r => r.cuisine)))];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-600/10 to-rose-500/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            <span className="gradient-text">Discover</span>
            <br />
            <span className="text-white">Amazing Restaurants</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slideIn">
            Find the perfect dining experience with our curated selection of the finest restaurants in the city
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12 animate-fadeIn">
            <div className="glass-card rounded-2xl p-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search restaurants or cuisine..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
              >
                {cuisines.map(cuisine => (
                  <option key={cuisine} value={cuisine} className="bg-gray-800 text-white">
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Restaurants
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our handpicked selection of exceptional dining destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <div key={restaurant.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>

          {filteredRestaurants.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">No restaurants found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
