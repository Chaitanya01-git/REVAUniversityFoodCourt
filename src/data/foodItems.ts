import { FoodItem } from '../types';

export const foodItems: FoodItem[] = [
  // Indian Food
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken pieces, served with basmati rice',
    price: 180,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Indian',
    isVeg: false,
    rating: 4.5,
    preparationTime: '15-20 mins'
  },
  {
    id: '2',
    name: 'Paneer Butter Masala',
    description: 'Rich and creamy paneer curry with aromatic spices, served with naan or rice',
    price: 160,
    image: 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Indian',
    isVeg: true,
    rating: 4.3,
    preparationTime: '12-15 mins'
  },
  {
    id: '3',
    name: 'Biryani (Chicken)',
    description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices',
    price: 200,
    image: 'https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Indian',
    isVeg: false,
    rating: 4.7,
    preparationTime: '20-25 mins'
  },
  {
    id: '4',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato curry, served with sambar and chutney',
    price: 80,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Indian',
    isVeg: true,
    rating: 4.4,
    preparationTime: '10-12 mins'
  },

  // Chinese Food
  {
    id: '5',
    name: 'Chicken Fried Rice',
    description: 'Wok-tossed rice with chicken, vegetables, and soy sauce',
    price: 140,
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Chinese',
    isVeg: false,
    rating: 4.2,
    preparationTime: '12-15 mins'
  },
  {
    id: '6',
    name: 'Veg Hakka Noodles',
    description: 'Stir-fried noodles with fresh vegetables and Chinese sauces',
    price: 120,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Chinese',
    isVeg: true,
    rating: 4.1,
    preparationTime: '10-12 mins'
  },
  {
    id: '7',
    name: 'Chicken Manchurian',
    description: 'Crispy chicken balls in tangy Indo-Chinese sauce',
    price: 160,
    image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Chinese',
    isVeg: false,
    rating: 4.3,
    preparationTime: '15-18 mins'
  },

  // Fast Food
  {
    id: '8',
    name: 'Classic Burger',
    description: 'Juicy beef patty with lettuce, tomato, onion, and special sauce',
    price: 120,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fast Food',
    isVeg: false,
    rating: 4.4,
    preparationTime: '8-10 mins'
  },
  {
    id: '9',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil',
    price: 180,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fast Food',
    isVeg: true,
    rating: 4.5,
    preparationTime: '12-15 mins'
  },
  {
    id: '10',
    name: 'Chicken Sandwich',
    description: 'Grilled chicken breast with fresh vegetables in toasted bread',
    price: 100,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fast Food',
    isVeg: false,
    rating: 4.2,
    preparationTime: '6-8 mins'
  },

  // Beverages
  {
    id: '11',
    name: 'Fresh Lime Soda',
    description: 'Refreshing lime juice with soda water and mint',
    price: 40,
    image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Beverages',
    isVeg: true,
    rating: 4.3,
    preparationTime: '3-5 mins'
  },
  {
    id: '12',
    name: 'Mango Lassi',
    description: 'Creamy yogurt drink blended with fresh mango pulp',
    price: 60,
    image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Beverages',
    isVeg: true,
    rating: 4.6,
    preparationTime: '3-5 mins'
  },
  {
    id: '13',
    name: 'Filter Coffee',
    description: 'Traditional South Indian filter coffee with milk and sugar',
    price: 30,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Beverages',
    isVeg: true,
    rating: 4.4,
    preparationTime: '2-3 mins'
  },

  // Desserts
  {
    id: '14',
    name: 'Gulab Jamun',
    description: 'Soft milk dumplings soaked in rose-flavored sugar syrup',
    price: 50,
    image: 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Desserts',
    isVeg: true,
    rating: 4.5,
    preparationTime: '2-3 mins'
  },
  {
    id: '15',
    name: 'Chocolate Brownie',
    description: 'Rich and fudgy chocolate brownie served warm with vanilla ice cream',
    price: 80,
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Desserts',
    isVeg: true,
    rating: 4.7,
    preparationTime: '5-7 mins'
  },
  {
    id: '16',
    name: 'Kulfi',
    description: 'Traditional Indian ice cream with cardamom and pistachios',
    price: 45,
    image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Desserts',
    isVeg: true,
    rating: 4.3,
    preparationTime: '2-3 mins'
  }
];

export const categories = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'Indian', name: 'Indian', icon: '🍛' },
  { id: 'Chinese', name: 'Chinese', icon: '🥢' },
  { id: 'Fast Food', name: 'Fast Food', icon: '🍔' },
  { id: 'Beverages', name: 'Beverages', icon: '🥤' },
  { id: 'Desserts', name: 'Desserts', icon: '🍰' }
];