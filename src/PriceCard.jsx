import React from 'react';

const PriceCard = ({ plan }) => {
  return (
    <div className="card">
      <h3>{plan.name}</h3>
      <h1 className="price">{plan.price}/month</h1>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index} className={feature.isAvailable ? 'available' : 'unavailable'}>
            {feature.isAvailable ? '✔️' : '❌'} {feature.text}
          </li>
        ))}
      </ul>
      <button>{plan.buttonText}</button>
    </div>
  );
};

export default PriceCard;
