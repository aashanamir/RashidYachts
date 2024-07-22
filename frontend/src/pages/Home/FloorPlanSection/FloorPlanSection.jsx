import React, { useState } from 'react';
import './FloorPlanSection.css';
import Floor1 from "../../../assets/Floor1.webp";
import Floor2 from "../../../assets/Floor1.webp";
import Floor3 from "../../../assets/Floor3.webp";
import { FaRegFilePdf } from 'react-icons/fa';
import Popup from '../../../components/PopForm/PopForm';



const FloorPlanSection = () => {
  const [activePlan, setActivePlan] = useState(1);

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const popHandler = () => {
    setShowPopup(!showPopup);
  };


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
          <a className="floor-plan-button">
            <button onClick={popHandler}> <FaRegFilePdf /> Download Floor Plan.pdf</button>
          </a>
        </div>
        <Popup show={showPopup} handleClose={togglePopup} />

        <img src={plans[activePlan].img} alt={plans[activePlan].title} className="plan-image" />
      </div>
    </div>
  );
};

export default FloorPlanSection;
