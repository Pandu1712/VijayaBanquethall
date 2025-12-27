import { ServiceType, EventType } from '../types';

export const services: ServiceType[] = [
  {
    id: 'rooms',
    title: 'Luxury Rooms',
    shortDesc: 'Comfortable and elegant rooms for your guests',
    description: 'Our first floor features beautifully appointed luxury rooms designed for comfort and elegance. Each room is equipped with modern amenities to ensure a pleasant stay for your guests.',
    capacity: '50+ Guests',
    features: [
      'Air Conditioned Rooms',
      'Premium Bedding',
      'Attached Bathrooms',
      'Room Service Available',
      'Modern Furnishings',
      'WiFi Connectivity',
      'TV Entertainment',
      '24/7 Security'
    ],
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg'
    ]
  },
  {
    id: 'bar-rooms',
    title: 'Bar Rooms',
    shortDesc: 'Sophisticated bar area for celebrations',
    description: 'Experience our premium bar rooms, perfect for intimate gatherings and cocktail parties. Stocked with a wide selection of beverages and featuring elegant ambiance.',
    capacity: '30-40 Guests',
    features: [
      'Full Bar Service',
      'Premium Beverages',
      'Cocktail Selection',
      'Professional Bartenders',
      'Ambient Lighting',
      'Music System',
      'Comfortable Seating',
      'Private Events'
    ],
    images: [
      'https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg',
      'https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg',
      'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg',
      'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg'
    ]
  },
  {
    id: 'banquet-hall',
    title: 'Banquet Hall',
    shortDesc: 'Grand hall perfect for all celebrations',
    description: 'Our magnificent third-floor banquet hall can accommodate 250-300 guests, making it ideal for grand celebrations. With state-of-the-art facilities and elegant decor, create unforgettable memories.',
    capacity: '250-300 Guests',
    features: [
      'Spacious Hall',
      'Stage with Lighting',
      'Professional Sound System',
      'Air Conditioning',
      'Elegant Decoration',
      'VIP Seating Areas',
      'Dance Floor',
      'Catering Support',
      'Parking Facilities',
      'Generator Backup'
    ],
    images: [
      'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
      'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
      'https://images.pexels.com/photos/2306277/pexels-photo-2306277.jpeg'
    ]
  },
  {
    id: 'dining',
    title: 'Dining Hall',
    shortDesc: 'Exquisite dining experience for your guests',
    description: 'Our second-floor dining hall offers an exceptional culinary experience with a spacious layout perfect for serving delicious meals to your guests in comfort and style.',
    capacity: '200+ Guests',
    features: [
      'Spacious Dining Area',
      'Professional Catering',
      'Multiple Cuisine Options',
      'Buffet Setup Available',
      'Elegant Table Settings',
      'Hygienic Kitchen',
      'Customized Menu Planning',
      'Vegetarian & Non-Vegetarian Options'
    ],
    images: [
      'https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg',
      'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg',
      'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
      'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg'
    ]
  }
];

export const events: EventType[] = [
  {
    name: 'Birthdays',
    description: 'Celebrate special birthdays with grandeur and joy'
  },
  {
    name: 'Haldi Functions',
    description: 'Traditional ceremonies in elegant settings'
  },
  {
    name: 'Party Meetings',
    description: 'Professional and social gatherings'
  },
  {
    name: 'Wedding Receptions',
    description: 'Make your special day unforgettable'
  },
  {
    name: 'Engagements',
    description: 'Celebrate the beginning of forever'
  },
  {
    name: 'Corporate Events',
    description: 'Professional events with premium facilities'
  },
  {
    name: 'Anniversary Celebrations',
    description: 'Milestone moments deserve special venues'
  },
  {
    name: 'Baby Showers',
    description: 'Welcome new beginnings with joy'
  }
];

export const contactInfo = {
  phone: '9014321911',
  email: 'sathvikanthati@gmail.com',
  address: 'VT road, Near hp gas, suryapet, Telangana',
  pincode: '508213'
};
