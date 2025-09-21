import React, { useState, useEffect } from 'react';
import { Calculator, Car, Truck, Car as CarIcon } from 'lucide-react';

const PriceCalculator = () => {
  const [vehicleType, setVehicleType] = useState('sedan');
  const [serviceType, setServiceType] = useState('basic');
  const [addOns, setAddOns] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const vehicleTypes = [
    { id: 'sedan', name: 'Sedan/Hatchback', icon: <CarIcon className="h-6 w-6" />, multiplier: 1 },
    { id: 'suv', name: 'SUV/Crossover', icon: <Car className="h-6 w-6" />, multiplier: 1.3 },
    { id: 'truck', name: 'Truck/Van', icon: <Truck className="h-6 w-6" />, multiplier: 1.5 }
  ];

  const serviceTypes = [
    { id: 'basic', name: 'Basic Wash', price: 25 },
    { id: 'full', name: 'Full Detailing', price: 75 },
    { id: 'premium', name: 'Premium Care', price: 135 }
  ];

  const addOnServices = [
    { id: 'wax', name: 'Extra Wax Protection', price: 15 },
    { id: 'carpet', name: 'Deep Carpet Cleaning', price: 20 },
    { id: 'engine', name: 'Engine Bay Cleaning', price: 25 },
    { id: 'headlight', name: 'Headlight Restoration', price: 30 },
    { id: 'ceramic', name: 'Ceramic Coating', price: 100 }
  ];

  useEffect(() => {
    const baseService = serviceTypes.find(service => service.id === serviceType);
    const vehicleMultiplier = vehicleTypes.find(vehicle => vehicle.id === vehicleType)?.multiplier || 1;
    const addOnTotal = addOns.reduce((total, addOnId) => {
      const addOn = addOnServices.find(service => service.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);

    const basePrice = (baseService?.price || 0) * vehicleMultiplier;
    setTotalPrice(Math.round(basePrice + addOnTotal));
  }, [vehicleType, serviceType, addOns]);

  const handleAddOnChange = (addOnId: string) => {
    setAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Price Calculator</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant quote for your car care service. Customize your package to fit your needs and budget.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              {/* Vehicle Type Selection */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Select Your Vehicle Type</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {vehicleTypes.map(vehicle => (
                    <button
                      key={vehicle.id}
                      onClick={() => setVehicleType(vehicle.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        vehicleType === vehicle.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        {vehicle.icon}
                        <span className="font-medium">{vehicle.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Type Selection */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Choose Service Package</h3>
                <div className="space-y-3">
                  {serviceTypes.map(service => (
                    <label
                      key={service.id}
                      className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        serviceType === service.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceType"
                        value={service.id}
                        checked={serviceType === service.id}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-center w-full">
                        <span className="font-medium text-gray-800">{service.name}</span>
                        <span className="text-blue-600 font-bold">${service.price}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Add-on Services */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Add Extra Services (Optional)</h3>
                <div className="space-y-3">
                  {addOnServices.map(addOn => (
                    <label
                      key={addOn.id}
                      className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        addOns.includes(addOn.id)
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={addOns.includes(addOn.id)}
                        onChange={() => handleAddOnChange(addOn.id)}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-center w-full">
                        <span className="font-medium text-gray-800">{addOn.name}</span>
                        <span className="text-orange-600 font-bold">+${addOn.price}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="lg:pl-8">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6">Your Quote</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-2 border-b border-blue-400">
                      <span>Vehicle:</span>
                      <span className="font-semibold">
                        {vehicleTypes.find(v => v.id === vehicleType)?.name}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-2 border-b border-blue-400">
                      <span>Service:</span>
                      <span className="font-semibold">
                        {serviceTypes.find(s => s.id === serviceType)?.name}
                      </span>
                    </div>
                    
                    {addOns.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-blue-200">Add-ons:</span>
                        {addOns.map(addOnId => {
                          const addOn = addOnServices.find(service => service.id === addOnId);
                          return (
                            <div key={addOnId} className="flex justify-between items-center text-sm pl-4">
                              <span>• {addOn?.name}</span>
                              <span>+${addOn?.price}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="border-t border-blue-400 pt-4">
                    <div className="flex justify-between items-center text-2xl font-bold mb-6">
                      <span>Total:</span>
                      <span className="text-orange-300">${totalPrice}</span>
                    </div>
                    
                    <button 
                      onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;