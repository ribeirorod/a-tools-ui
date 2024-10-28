import React from 'react';
import { Check, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const plans = [
  {
    name: 'Credits',
    price: '$0.10',
    unit: 'per credit',
    description: 'Pay as you go for occasional use',
    features: [
      'No monthly commitment',
      'Credits never expire',
      'Basic support',
      'API access',
      'Usage analytics',
    ],
    notIncluded: [
      'Priority support',
      'Custom models',
      'Team collaboration',
    ],
    cta: 'Buy Credits',
    popular: false,
  },
  {
    name: 'Basic',
    price: '$29',
    unit: 'per month',
    description: 'Perfect for individual creators',
    features: [
      '1,000 credits/month',
      'Unused credits rollover',
      'Priority support',
      'API access',
      'Usage analytics',
      'Basic integrations',
    ],
    notIncluded: [
      'Custom models',
      'Team collaboration',
    ],
    cta: 'Start Basic',
    popular: true,
  },
  {
    name: 'Pro',
    price: '$99',
    unit: 'per month',
    description: 'For teams and power users',
    features: [
      '5,000 credits/month',
      'Unused credits rollover',
      '24/7 Priority support',
      'Advanced API access',
      'Advanced analytics',
      'Custom integrations',
      'Custom models',
      'Team collaboration',
    ],
    notIncluded: [],
    cta: 'Go Pro',
    popular: false,
  },
];

export function Pricing() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handlePlanSelection = (plan: typeof plans[0]) => {
    navigate('/payment', { state: { plan } });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">{plan.unit}</span>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">{plan.description}</p>

                <button
                  onClick={() => handlePlanSelection(plan)}
                  className={`mt-8 block w-full py-3 px-4 rounded-md text-center font-medium ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                    Included features
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-start opacity-50">
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Try it free for 14 days
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            No credit card required. Cancel anytime.
          </p>
          <button
            onClick={() => handlePlanSelection(plans[1])} // Default to Basic plan for trial
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Start your free trial
          </button>
        </div>
      </div>
    </div>
  );
}