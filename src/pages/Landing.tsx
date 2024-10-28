import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cpu, Check } from 'lucide-react';

const pricingPlans = [
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
    ],
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
      'Basic integrations',
    ],
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
      'Custom integrations',
      'Team collaboration',
    ],
  },
];

export function Landing() {
  const navigate = useNavigate();

  const handlePlanSelection = (plan: typeof pricingPlans[0]) => {
    navigate('/payment', { state: { plan } });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Powerful AI Tools</span>
            <span className="block text-blue-600 dark:text-blue-400">for Everyone</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover our collection of AI-powered tools designed to enhance your productivity and creativity. Start using them today!
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button
                onClick={() => navigate('/tools')}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 dark:bg-blue-400 rounded-md shadow-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Lightning Fast</h3>
                  <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                    Get instant results with our optimized AI processing pipeline.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 dark:bg-blue-400 rounded-md shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Secure & Private</h3>
                  <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                    Your data is encrypted and protected with enterprise-grade security.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 dark:bg-blue-400 rounded-md shadow-lg">
                      <Cpu className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Advanced AI</h3>
                  <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                    Powered by state-of-the-art machine learning models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Choose your plan
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Start with a 14-day free trial. No credit card required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
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
                    Start Free Trial
                  </button>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}