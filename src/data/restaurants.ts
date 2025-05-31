
import { Restaurant } from '@/types/restaurant';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Bella Vista',
    cuisine: 'Italian',
    rating: 4.8,
    priceRange: '$$$',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    address: '123 Main Street, Downtown',
    phone: '(555) 123-4567',
    hours: 'Mon-Thu 5PM-10PM, Fri-Sat 5PM-11PM, Sun 4PM-9PM',
    description: 'An authentic Italian dining experience featuring handmade pasta, wood-fired pizzas, and an extensive wine selection in an elegant atmosphere.',
    features: ['Outdoor Seating', 'Wine Bar', 'Romantic', 'Date Night'],
    coordinates: { lat: 40.7128, lng: -74.0060 },
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop'
    ],
    menu: [
      {
        category: 'Appetizers',
        items: [
          { name: 'Bruschetta Trio', price: '$12', description: 'Three varieties of our signature bruschetta' },
          { name: 'Burrata Caprese', price: '$16', description: 'Fresh burrata with heirloom tomatoes and basil' }
        ]
      },
      {
        category: 'Main Courses',
        items: [
          { name: 'Osso Buco', price: '$32', description: 'Braised veal shank with saffron risotto' },
          { name: 'Seafood Linguine', price: '$28', description: 'Fresh catch of the day with house-made linguine' }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Sakura Sushi',
    cuisine: 'Japanese',
    rating: 4.9,
    priceRange: '$$$$',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
    address: '456 Cherry Blossom Ave, Midtown',
    phone: '(555) 987-6543',
    hours: 'Tue-Sun 6PM-11PM, Closed Mondays',
    description: 'Premium omakase experience with the freshest fish flown in daily from Tokyo. Intimate 12-seat sushi counter.',
    features: ['Omakase', 'Premium', 'Intimate', 'Fresh Fish'],
    coordinates: { lat: 40.7589, lng: -73.9851 },
    gallery: [
      'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&h=600&fit=crop'
    ],
    menu: [
      {
        category: 'Sashimi',
        items: [
          { name: 'Otoro', price: '$45', description: 'Premium fatty tuna belly' },
          { name: 'Uni', price: '$38', description: 'Fresh sea urchin from Hokkaido' }
        ]
      },
      {
        category: 'Omakase',
        items: [
          { name: 'Chef\'s Selection', price: '$150', description: '12-course tasting menu' },
          { name: 'Premium Omakase', price: '$250', description: '18-course premium experience' }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'The Garden Bistro',
    cuisine: 'Farm-to-Table',
    rating: 4.6,
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop',
    address: '789 Green Street, Garden District',
    phone: '(555) 456-7890',
    hours: 'Daily 8AM-10PM',
    description: 'Fresh, locally-sourced ingredients transformed into creative dishes in a beautiful garden setting with herb walls and natural lighting.',
    features: ['Organic', 'Vegetarian Options', 'Brunch', 'Garden Seating'],
    coordinates: { lat: 40.7505, lng: -73.9934 },
    gallery: [
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop'
    ],
    menu: [
      {
        category: 'Breakfast',
        items: [
          { name: 'Avocado Toast', price: '$14', description: 'Multigrain bread with seasonal toppings' },
          { name: 'Farm Eggs Benedict', price: '$18', description: 'Local eggs with house-cured ham' }
        ]
      },
      {
        category: 'Dinner',
        items: [
          { name: 'Herb-Crusted Salmon', price: '$26', description: 'Wild-caught salmon with garden herbs' },
          { name: 'Seasonal Vegetable Bowl', price: '$22', description: 'Market vegetables with quinoa and tahini' }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Le Petit Château',
    cuisine: 'French',
    rating: 4.7,
    priceRange: '$$$$',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    address: '321 Boulevard Elegance, Uptown',
    phone: '(555) 234-5678',
    hours: 'Wed-Sat 6PM-10PM, Sun 5PM-9PM',
    description: 'Classic French cuisine with modern techniques in an intimate setting reminiscent of a Parisian bistro.',
    features: ['Fine Dining', 'Wine Pairing', 'Romantic', 'French Classics'],
    coordinates: { lat: 40.7831, lng: -73.9712 },
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&h=600&fit=crop'
    ],
    menu: [
      {
        category: 'Appetizers',
        items: [
          { name: 'Foie Gras Terrine', price: '$28', description: 'House-made terrine with brioche toast' },
          { name: 'Escargot de Bourgogne', price: '$18', description: 'Classic preparation with garlic butter' }
        ]
      },
      {
        category: 'Main Courses',
        items: [
          { name: 'Coq au Vin', price: '$34', description: 'Traditional braised chicken in red wine' },
          { name: 'Bouillabaisse', price: '$42', description: 'Marseille-style seafood stew' }
        ]
      }
    ]
  }
];
