import React, { useState } from 'react';
import './FloorPlanSection.css';
import Floor1 from "../../../assets/Floor1.webp";
import Floor2 from "../../../assets/Floor1.webp";
import Floor3 from "../../../assets/Floor3.webp";
import { FaRegFilePdf } from 'react-icons/fa';

const FloorPlanSection = () => {
  const [activePlan, setActivePlan] = useState(1);

  const plans = {
    1: {
      title: "1 Bedroom Apartments",
      pdf: "/path/to/1-bedroom-floor-plan.pdf",
      img: Floor1
    },
    2: {
      title: "2 Bedroom Apartments",
      pdf: "/path/to/2-bedroom-floor-plan.pdf",
      img: Floor2
    },
    3: {
      title: "3 Bedroom Apartments",
      pdf: "/path/to/3-bedroom-floor-plan.pdf",
      img: Floor3
    }
  };

  return (
    <div id='Floor' className="floor-plan-container">
      <h1>Floor Plan</h1>
      <div className="button-group">
        {Object.keys(plans).map((key) => (
          <button
            key={key}
            className={`plan-button ${activePlan === parseInt(key) ? 'active' : ''}`}
            onClick={() => setActivePlan(parseInt(key))}
          >
            {`${key} Bedroom`}
          </button>
        ))}
      </div>
      <div className="plan-content">
        <div className="plan-details">
          <h2>{plans[activePlan].title}</h2>
          <a href={plans[activePlan].pdf} className="download-button" download>
            <button> <FaRegFilePdf /> Download Floor Plan.pdf</button>
          </a>
        </div>
        <img src={plans[activePlan].img} alt={plans[activePlan].title} className="plan-image" />
      </div>
    </div>
  );
};

export default FloorPlanSection;
