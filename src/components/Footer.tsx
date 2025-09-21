import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Utensils } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-[#FF6B35]" />
              <div>
                <h3 className="text-xl font-bold">REVA Food Court</h3>
                <p className="text-sm text-gray-400">University Campus</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Serving delicious, fresh, and affordable meals to the REVA University community. 
              Quality food, quick service, and student-friendly prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-[#FF6B35] cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-[#FF6B35] cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-[#FF6B35] cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-[#FF6B35] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD166]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Menu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Order Online</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Food Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD166]">Food Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Indian Cuisine</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Chinese Food</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Fast Food</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Beverages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Desserts</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD166]">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>REVA University</p>
                  <p>Rukmini Knowledge Park</p>
                  <p>Kattigenahalli, Yelahanka</p>
                  <p>Bangalore - 560064</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FF6B35]" />
                <span className="text-gray-300">+91 80 4696 2222</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FF6B35]" />
                <span className="text-gray-300">foodcourt@reva.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-[#FFD166]">Operating Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div>
                <span className="font-semibold">Monday - Friday:</span>
                <span className="ml-2">7:00 AM - 9:00 PM</span>
              </div>
              <div>
                <span className="font-semibold">Saturday:</span>
                <span className="ml-2">8:00 AM - 8:00 PM</span>
              </div>
              <div>
                <span className="font-semibold">Sunday:</span>
                <span className="ml-2">9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p>&copy; 2025 REVA University Food Court. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#FF6B35] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">Food Safety</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;