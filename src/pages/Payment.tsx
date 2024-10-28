import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CreditCard, Apple, Lock, Check, ChevronDown } from 'lucide-react';
import { FaPaypal } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

interface PaymentFormData {
  // Account details
  email: string;
  password: string;
  
  // Payment details
  cardNumber: string;
  expiry: string;
  cvc: string;
  
  // Billing address
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

interface LocationState {
  plan?: {
    name: string;
    price: string;
    unit: string;
    features: string[];
  };
}

const plans = [
  {
    name: 'Credits',
    price: '0.10',
    unit: 'per credit',
    features: ['Pay as you go', 'No monthly commitment', 'Basic support']
  },
  {
    name: 'Basic',
    price: '29',
    unit: 'per month',
    features: ['1,000 credits/month', 'Priority support', 'API access']
  },
  {
    name: 'Pro',
    price: '99',
    unit: 'per month',
    features: ['5,000 credits/month', '24/7 support', 'Advanced features']
  }
];

export function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, register } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState((location.state as LocationState)?.plan || plans[1]);
  
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'paypal'>('card');
  const [showPlans, setShowPlans] = useState(false);
  const [formData, setFormData] = useState<PaymentFormData>({
    email: '',
    password: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    street: '',
    postalCode: '',
    city: '',
    country: ''
  });

  const annualDiscount = 0.1; // 10% discount
  const basePrice = parseFloat(selectedPlan.price);
  const annualPrice = basePrice * 12 * (1 - annualDiscount);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      await register(formData.email, formData.email, formData.password);
    }
    // Handle payment processing here
    navigate('/tools');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Complete your subscription
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              You're just one step away from accessing our AI tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                {/* Plan Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Selected Plan
                  </h3>
                  <div className="relative">
                    <button
                      onClick={() => setShowPlans(!showPlans)}
                      className="w-full flex items-center justify-between p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{selectedPlan.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          ${selectedPlan.price} {selectedPlan.unit}
                        </p>
                      </div>
                      <ChevronDown className={`h-5 w-5 transition-transform ${showPlans ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {showPlans && (
                      <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                        {plans.map((plan) => (
                          <button
                            key={plan.name}
                            onClick={() => {
                              setSelectedPlan(plan);
                              setShowPlans(false);
                            }}
                            className="w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <p className="font-medium text-gray-900 dark:text-white">{plan.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              ${plan.price} {plan.unit}
                            </p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Billing Cycle */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Billing Cycle
                  </h3>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setBillingCycle('monthly')}
                      className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                        billingCycle === 'monthly'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <p className="font-medium text-gray-900 dark:text-white">Monthly</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">${basePrice}/mo</p>
                    </button>
                    <button
                      onClick={() => setBillingCycle('annually')}
                      className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                        billingCycle === 'annually'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <p className="font-medium text-gray-900 dark:text-white">Annually</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ${(annualPrice / 12).toFixed(2)}/mo
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400">Save 10%</p>
                    </button>
                  </div>
                </div>

                {!isAuthenticated && (
                  <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Create Account
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                )}

                {/* Payment Method */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Payment Method
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        paymentMethod === 'card'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <CreditCard className="h-6 w-6 mx-auto mb-2 text-gray-900 dark:text-white" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Card</p>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('apple')}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        paymentMethod === 'apple'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <Apple className="h-6 w-6 mx-auto mb-2 text-gray-900 dark:text-white" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Apple Pay</p>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        paymentMethod === 'paypal'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <FaPaypal className="h-6 w-6 mx-auto mb-2 text-gray-900 dark:text-white" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">PayPal</p>
                    </button>
                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        required
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          name="expiry"
                          placeholder="MM/YY"
                          required
                          value={formData.expiry}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          CVC
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          name="cvc"
                          required
                          value={formData.cvc}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    </div>

                    {/* Billing Address */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        Billing Address
                      </h4>
                      <div>
                        <label htmlFor="street" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Street Address
                        </label>
                        <input
                          type="text"
                          id="street"
                          name="street"
                          required
                          value={formData.street}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Postal Code
                          </label>
                          <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            required
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Lock className="h-5 w-5 mr-2" />
                      Complete Purchase
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Order Summary
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">{selectedPlan.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {billingCycle === 'monthly' ? 'Monthly billing' : 'Annual billing'}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                      <span className="text-gray-900 dark:text-white">
                        ${billingCycle === 'monthly' ? basePrice : annualPrice.toFixed(2)}
                      </span>
                    </div>
                    {billingCycle === 'annually' && (
                      <div className="flex justify-between mt-2 text-green-600 dark:text-green-400">
                        <span>Annual discount</span>
                        <span>-${(basePrice * 12 * annualDiscount).toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between text-lg font-medium">
                      <span className="text-gray-900 dark:text-white">Total</span>
                      <span className="text-gray-900 dark:text-white">
                        ${billingCycle === 'monthly' ? basePrice : annualPrice.toFixed(2)}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}