export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  rating: number;
  preparationTime: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface StudentDetails {
  name: string;
  usn: string;
  phone: string;
  email: string;
  paymentMethod: string;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  studentDetails: StudentDetails;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
  orderTime: Date;
}