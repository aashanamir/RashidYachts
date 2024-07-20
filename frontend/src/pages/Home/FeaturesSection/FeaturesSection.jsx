import React from 'react';
import './FeaturesSection.css';
import Water from "../../../assets/water.webp"
import Park from "../../../assets/park.webp"
import Pool from "../../../assets/private-pool.webp"
import Cafe from "../../../assets/cafe.webp"
import Berth from "../../../assets/berth.webp"
import Gym from "../../../assets/gym.webp"

const features = [
  { id: 1, title: "Waterfront Plaza", imgSrc: Water },
  { id: 2, title: "Community Park", imgSrc: Park },
  { id: 3, title: "Wet Berths", imgSrc: Pool },
  { id: 4, title: "The Canal Pool", imgSrc: Berth },
  { id: 5, title: "Restaurants & cafes", imgSrc: Cafe},
  { id: 6, title: "Gym", imgSrc: Gym},
];

const FeaturesSection = () => {
  return (
    <div id='Features' className="features-container">
      <h2 className="features-title">Features & Amenities</h2>
      <div className="features-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-item">
            <img src={feature.imgSrc} alt={feature.title} className="feature-icon" />
            <p className="feature-title">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
