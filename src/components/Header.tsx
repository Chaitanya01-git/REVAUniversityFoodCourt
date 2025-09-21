import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCart();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'order', label: 'Order' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <Utensils className="h-8 w-8 text-[#FF6B35]" />
            <div>
              <h1 className="text-2xl font-bold text-[#2D2D2D]">REVA Food Court</h1>
              <p className="text-xs text-gray-600">University Campus</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-lg font-medium transition-colors duration-300 ${
                  currentPage === item.id
                    ? 'text-[#FF6B35] border-b-2 border-[#FF6B35]'
                    : 'text-[#2D2D2D] hover:text-[#FF6B35]'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Cart Icon */}
            <button
              onClick={() => onPageChange('order')}
              className="relative bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingCart className="h-5 w-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#06D6A0] text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {getItemCount()}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left text-lg font-medium transition-colors duration-300 ${
                    currentPage === item.id
                      ? 'text-[#FF6B35]'
                      : 'text-[#2D2D2D] hover:text-[#FF6B35]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => {
                  onPageChange('order');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-4 py-2 rounded-full transition-all duration-300 w-fit"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Cart ({getItemCount()})</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;