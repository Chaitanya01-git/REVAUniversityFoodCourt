import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingCart, CreditCard, User, Phone, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { StudentDetails } from '../types';

const OrderPage: React.FC = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [studentDetails, setStudentDetails] = useState<StudentDetails>({
    name: '',
    usn: '',
    phone: '',
    email: '',
    paymentMethod: 'cash',
    specialInstructions: ''
  });

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStudentDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    alert(`Order placed successfully! Total: ₹${state.total}\nEstimated delivery: 20-25 minutes`);
    clearCart();
    setShowCheckout(false);
    setStudentDetails({
      name: '',
      usn: '',
      phone: '',
      email: '',
      paymentMethod: 'cash',
      specialInstructions: ''
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF8F0] py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">Your cart is empty</h2>
            <p className="text-xl text-gray-600 mb-8">Add some delicious items from our menu to get started!</p>
            <button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Browse Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#2D2D2D] mb-8 text-center">Your Order</h1>

        {!showCheckout ? (
          <div className="max-w-4xl mx-auto">
            {/* Cart Items */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-6">Cart Items</h2>
              
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#2D2D2D]">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description.substring(0, 50)}...</p>
                      <p className="text-lg font-bold text-[#FF6B35]">₹{item.price}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="bg-gray-200 hover:bg-gray-300 text-[#2D2D2D] w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      
                      <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
                      
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-lg text-[#2D2D2D]">₹{item.price * item.quantity}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 mt-2 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{state.total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee:</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-[#FF6B35]">₹{state.total}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-[#06D6A0] hover:bg-[#05c794] text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-6 flex items-center">
                <CreditCard className="h-6 w-6 mr-2" />
                Checkout
              </h2>

              <form onSubmit={handleSubmitOrder} className="space-y-6">
                {/* Student Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={studentDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      USN *
                    </label>
                    <input
                      type="text"
                      name="usn"
                      required
                      value={studentDetails.usn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="e.g., 1RV21CS001"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={studentDetails.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={studentDetails.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="your.email@reva.edu.in"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Payment Method *
                  </label>
                  <select
                    name="paymentMethod"
                    required
                    value={studentDetails.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  >
                    <option value="cash">Cash on Delivery</option>
                    <option value="upi">UPI Payment</option>
                    <option value="card">Credit/Debit Card</option>
                  </select>
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    name="specialInstructions"
                    value={studentDetails.specialInstructions}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    placeholder="Any special requests or delivery instructions..."
                  />
                </div>

                {/* Order Summary */}
                <div className="bg-[#FFF8F0] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">Order Summary</h3>
                  <div className="space-y-1 text-sm">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.name} x {item.quantity}</span>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-300 mt-2 pt-2 font-bold">
                    <div className="flex justify-between">
                      <span>Total:</span>
                      <span className="text-[#FF6B35]">₹{state.total}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-[#2D2D2D] py-3 rounded-lg font-semibold transition-colors"
                  >
                    Back to Cart
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#06D6A0] hover:bg-[#05c794] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;