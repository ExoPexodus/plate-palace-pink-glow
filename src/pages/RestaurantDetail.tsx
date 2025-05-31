
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { restaurants } from '@/data/restaurants';

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Restaurant Not Found</h1>
          <Link to="/" className="text-pink-400 hover:text-pink-300 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-2xl ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Restaurants</span>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-8 left-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {restaurant.name}
          </h1>
          <p className="text-xl text-pink-300">{restaurant.cuisine}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Rating and Basic Info */}
            <div className="glass-card rounded-xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {renderStars(restaurant.rating)}
                  <span className="ml-3 text-2xl font-bold text-white">
                    {restaurant.rating}
                  </span>
                </div>
                <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-lg font-medium">
                  {restaurant.priceRange}
                </span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {restaurant.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {restaurant.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="glass-card rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {restaurant.gallery.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg group">
                    <img
                      src={image}
                      alt={`${restaurant.name} gallery ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Menu */}
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Menu Highlights</h2>
              <div className="space-y-8">
                {restaurant.menu.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold gradient-text mb-4">
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="text-white font-medium mb-1">{item.name}</h4>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                          <span className="text-pink-400 font-semibold ml-4">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact & Hours</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-pink-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{restaurant.address}</span>
                </div>
                <div>
                  <span className="text-gray-400">Phone:</span>
                  <span className="text-white ml-2">{restaurant.phone}</span>
                </div>
                <div>
                  <span className="text-gray-400">Hours:</span>
                  <span className="text-white ml-2">{restaurant.hours}</span>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Location</h3>
              <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-500">Map Preview</span>
              </div>
              <Link 
                to="/maps" 
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-lg transition-colors text-center block"
              >
                View on Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
