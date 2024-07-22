import React, { useState } from 'react';
import './PaymentPlanSection.css';
import StartingPrice from "../../../assets/price-tag.webp";
import PayToBook from "../../../assets/pay-to-book.webp";
import PaymentPlan from "../../../assets/payment-plan.webp";
import { FaRegFilePdf } from 'react-icons/fa';
import Popup from '../../../components/PopForm/PopForm';

const PaymentPlanSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const popHandler = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div id='Gallery' className="payment-plan-container">
      <h1 className='payment-plan-container-heading'>Payment Plan</h1>
      <div className="payment-plan">
        <div className="plan-item">
          <div className="icon">
            <img src={StartingPrice} alt="Starting Price" />
          </div>
          <h3>Starting Price</h3>
          <p>AED 1.6M</p>
        </div>
        <div className="plan-item">
          <div className="icon">
            <img src={PayToBook} alt="Pay To Book" />
          </div>
          <h3>Pay To Book</h3>
          <p>Coming Soon</p>
        </div>
        <div className="plan-item">
          <div className="icon">
            <img src={PaymentPlan} alt="Payment Plan" />
          </div>
          <h3>Payment Plan</h3>
          <p>90/10</p>
        </div>
      </div>
      <a href='#' className="download-button">
        <button className='payment-btn' onClick={popHandler}><FaRegFilePdf />Download Payment Plan.pdf</button>
        <Popup show={showPopup} handleClose={togglePopup} />
      </a>
    </div>
  );
};

export default PaymentPlanSection;
