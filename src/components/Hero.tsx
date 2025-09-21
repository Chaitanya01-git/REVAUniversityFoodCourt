import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Car Care
            <span className="block text-orange-400">At Your Doorstep</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Book premium car wash, detailing, and care services online. 
            We come to you with professional equipment and eco-friendly products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Service Now
            </button>
            <button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              View Packages
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">5-Star Service</h3>
              <p className="text-blue-200">Rated #1 by our customers</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Same Day Service</h3>
              <p className="text-blue-200">Book today, serviced today</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Service</h3>
              <p className="text-blue-200">We come to your location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;