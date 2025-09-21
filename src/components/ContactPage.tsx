import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2D2D2D] mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch with the REVA Food Court team.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#FF6B35] p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D2D2D] mb-1">Address</h3>
                      <p className="text-gray-600">
                        REVA University Food Court<br />
                        Rukmini Knowledge Park<br />
                        Kattigenahalli, Yelahanka<br />
                        Bangalore - 560064, Karnataka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#FFD166] p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#2D2D2D]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D2D2D] mb-1">Phone</h3>
                      <p className="text-gray-600">
                        Food Court: +91 80 4696 2222<br />
                        Orders: +91 80 4696 2223
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#06D6A0] p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D2D2D] mb-1">Email</h3>
                      <p className="text-gray-600">
                        foodcourt@reva.edu.in<br />
                        orders@reva.edu.in
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#FF6B35] p-3 rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D2D2D] mb-1">Operating Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
                        <p>Saturday: 8:00 AM - 8:00 PM</p>
                        <p>Sunday: 9:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-6">Quick Contact</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="flex items-center justify-center space-x-2 bg-[#FF6B35] hover:bg-[#e55a2b] text-white py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </button>
                  
                  <button className="flex items-center justify-center space-x-2 bg-[#06D6A0] hover:bg-[#05c794] text-white py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all"
                      placeholder="your.email@reva.edu.in"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="order-inquiry">Order Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your inquiry or feedback in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">What are your delivery hours?</h3>
                  <p className="text-gray-600 text-sm">We deliver from 7:00 AM to 9:00 PM on weekdays, with slightly reduced hours on weekends.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">How long does delivery take?</h3>
                  <p className="text-gray-600 text-sm">Most orders are delivered within 15-25 minutes, depending on preparation time and campus location.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">Do you accept online payments?</h3>
                  <p className="text-gray-600 text-sm">Yes, we accept UPI, credit/debit cards, and cash on delivery for your convenience.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">Can I cancel my order?</h3>
                  <p className="text-gray-600 text-sm">Orders can be cancelled within 5 minutes of placement. Please call us immediately if needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;