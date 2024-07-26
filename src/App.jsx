import React from 'react';
import './App.css';
import PriceCard from './PriceCard.jsx';

const plans = [
  {
    name: 'FREE',
    price: '$0',
    features: [
      { text: 'Single User', isAvailable: true },
      { text: '50GB Storage', isAvailable: true },
      { text: 'Unlimited Public Projects', isAvailable: true },
      { text: 'Community Access', isAvailable: true },
      { text: 'Unlimited Private Projects', isAvailable: false },
      { text: 'Dedicated Phone Support', isAvailable: false },
      { text: 'Free Subdomain', isAvailable: false },
      { text: 'Monthly Status Reports', isAvailable: false },
    ],
    buttonText: 'BUTTON',
  },
  {
    name: 'PLUS',
    price: '$9',
    features: [
      { text: '5 Users', isAvailable: true },
      { text: '50GB Storage', isAvailable: true },
      { text: 'Unlimited Public Projects', isAvailable: true },
      { text: 'Community Access', isAvailable: true },
      { text: 'Unlimited Private Projects', isAvailable: true },
      { text: 'Dedicated Phone Support', isAvailable: true },
      { text: 'Free Subdomain', isAvailable: true },
      { text: 'Monthly Status Reports', isAvailable: false },
    ],
    buttonText: 'BUTTON',
  },
  {
    name: 'PRO',
    price: '$49',
    features: [
      { text: 'Unlimited Users', isAvailable: true },
      { text: '50GB Storage', isAvailable: true },
      { text: 'Unlimited Public Projects', isAvailable: true },
      { text: 'Community Access', isAvailable: true },
      { text: 'Unlimited Private Projects', isAvailable: true },
      { text: 'Dedicated Phone Support', isAvailable: true },
      { text: 'Free Subdomain', isAvailable: true },
      { text: 'Monthly Status Reports', isAvailable: true },
    ],
    buttonText: 'BUTTON',
  },
];

const App = () => {
  return (
    <div className="App">
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <PriceCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default App;
