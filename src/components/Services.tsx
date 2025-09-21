import React from 'react';
import { Droplets, Sparkles, Crown, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Droplets className="h-12 w-12 text-blue-500" />,
      title: "Basic Wash",
      description: "Essential exterior wash and dry",
      features: [
        "Exterior wash & rinse",
        "Hand dry with microfiber",
        "Tire cleaning",
        "Window cleaning"
      ],
      price: "$25",
      duration: "30 mins"
    },
    {
      icon: <Sparkles className="h-12 w-12 text-orange-500" />,
      title: "Full Detailing",
      description: "Complete interior and exterior detailing",
      features: [
        "Everything in Basic Wash",
        "Interior vacuuming",
        "Dashboard & console cleaning",
        "Leather/fabric treatment",
        "Wheel & rim detailing"
      ],
      price: "$75",
      duration: "2 hours",
      popular: true
    },
    {
      icon: <Crown className="h-12 w-12 text-purple-500" />,
      title: "Premium Care",
      description: "Ultimate protection and shine package",
      features: [
        "Everything in Full Detailing",
        "Paint protection wax",
        "Engine bay cleaning",
        "Headlight restoration",
        "Premium air freshener",
        "30-day shine guarantee"
      ],
      price: "$135",
      duration: "3 hours"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our range of professional car care services designed to keep your vehicle looking its best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-orange-500 relative' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    Select Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;