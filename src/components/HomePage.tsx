import React from 'react';
import { Clock, MapPin, Star, ChefHat, Utensils, Coffee } from 'lucide-react';
import { categories } from '../data/foodItems';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FF6B35] via-[#FF8A65] to-[#FFD166] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block text-[#FFD166]">REVA Food Court</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Delicious meals delivered fresh to your campus location. 
              Order online and enjoy the best food experience at REVA University.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => onPageChange('menu')}
                className="bg-[#06D6A0] hover:bg-[#05c794] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Order Now
              </button>
              <button 
                onClick={() => onPageChange('menu')}
                className="border-2 border-white hover:bg-white hover:text-[#FF6B35] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                View Menu
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-4 rounded-full mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quick Service</h3>
                <p className="text-orange-200">Fresh food in 15-20 minutes</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-4 rounded-full mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Food</h3>
                <p className="text-orange-200">Made with fresh ingredients</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-4 rounded-full mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Campus Delivery</h3>
                <p className="text-orange-200">Delivered anywhere on campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Food Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of cuisines, from traditional Indian dishes to international favorites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.slice(1).map((category) => (
              <div
                key={category.id}
                onClick={() => onPageChange('menu')}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-6 text-center"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">Fresh & Delicious</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Why Choose REVA Food Court?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best dining experience for REVA University students and staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-[#FFF8F0] hover:shadow-lg transition-all duration-300">
              <div className="bg-[#FF6B35] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Expert Chefs</h3>
              <p className="text-gray-600">
                Our experienced chefs prepare every dish with care and attention to detail, ensuring authentic flavors.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-[#FFF8F0] hover:shadow-lg transition-all duration-300">
              <div className="bg-[#FFD166] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Utensils className="h-8 w-8 text-[#2D2D2D]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Hygienic Kitchen</h3>
              <p className="text-gray-600">
                We maintain the highest standards of cleanliness and hygiene in our kitchen and food preparation.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-[#FFF8F0] hover:shadow-lg transition-all duration-300">
              <div className="bg-[#06D6A0] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Student Friendly</h3>
              <p className="text-gray-600">
                Affordable prices, generous portions, and convenient ordering designed specifically for students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B35] to-[#FFD166]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Order?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Browse our menu and place your order now. Fresh, delicious food delivered right to your campus location.
          </p>
          <button
            onClick={() => onPageChange('menu')}
            className="bg-[#06D6A0] hover:bg-[#05c794] text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Ordering
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;