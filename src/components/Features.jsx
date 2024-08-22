import React from 'react';
import { FaShieldAlt, FaLeaf, FaHandshake, FaTruck } from 'react-icons/fa';

const Features = () => {
  const features = [
    { icon: <FaShieldAlt />, title: 'Secure Contracts', description: 'Guarantee your sales with legally binding contracts.' },
    { icon: <FaLeaf />, title: 'Quality Assurance', description: 'Regular quality checks ensure the best produce.' },
    { icon: <FaHandshake />, title: 'Reliable Payments', description: 'Secure and timely payments for all your contracts.' },
    { icon: <FaTruck />, title: 'Efficient Logistics', description: 'Track your shipments in real-time.' },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
