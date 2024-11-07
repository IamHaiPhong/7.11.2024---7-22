import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      icon: <Zap className="w-6 h-6" />,
      description: 'Perfect for students and individuals',
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      features: [
        'Single CV template',
        'Basic customization options',
        'PDF export',
        'Email support',
        '1 language option',
      ],
    },
    {
      name: 'Pro',
      icon: <Star className="w-6 h-6" />,
      description: 'Ideal for job seekers',
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      isRecommended: true,
      features: [
        'All Basic features',
        '5 Premium CV templates',
        'Advanced customization',
        'Multiple format exports',
        'Priority email support',
        '2 language options',
        'LinkedIn optimization',
      ],
    },
    {
      name: 'VIP',
      icon: <Crown className="w-6 h-6" />,
      description: 'For professionals and businesses',
      monthlyPrice: 39.99,
      annualPrice: 399.99,
      features: [
        'All Pro features',
        'Unlimited CV templates',
        'Custom branding options',
        'AI content suggestions',
        '24/7 priority support',
        'All language options',
        'Career coaching session',
        'ATS optimization',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Choose Your Perfect Plan
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get started with our flexible pricing options
        </p>

        <div className="flex items-center justify-center gap-3">
          <span className={`text-sm ${!isAnnual ? 'text-cyan-500 font-semibold' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-cyan-500"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-cyan-500 font-semibold' : 'text-gray-500'}`}>
            Annual
            <span className="ml-1 text-xs text-green-500 font-medium">Save 20%</span>
          </span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
              plan.isRecommended ? 'ring-2 ring-cyan-500' : ''
            }`}
          >
            {plan.isRecommended && (
              <div className="absolute top-0 right-0 bg-cyan-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Recommended
              </div>
            )}
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="text-cyan-500">{plan.icon}</div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <p className="text-4xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </p>
                <p className="text-gray-500">per {isAnnual ? 'year' : 'month'}</p>
              </div>

              <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                plan.isRecommended
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Get Started
              </button>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-500" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600">
          Need a custom plan? {' '}
          <a href="#" className="text-cyan-500 hover:text-cyan-600 font-medium">
            Contact us
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Pricing;