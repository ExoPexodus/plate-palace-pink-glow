
export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  image: string;
  address: string;
  phone: string;
  hours: string;
  description: string;
  features: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  gallery: string[];
  menu: {
    category: string;
    items: {
      name: string;
      price: string;
      description: string;
    }[];
  }[];
}
