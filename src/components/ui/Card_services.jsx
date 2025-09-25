import React from 'react';

const Card_services = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="cover">
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card_services;
