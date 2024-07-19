import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaFileDownload } from "react-icons/fa";
import Logo from "../../assets/marina-views-logo.webp";
import "./Form.css";

const FormComponent = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="form-container">
      <img src={Logo} alt="Logo" className="logo" />
      <h2 className="form-title">Rashid Yachts & Marina</h2>
      <h5 className="form-description">
        Discover Unparalleled Luxury at Marina Views' Rashid Yachts & Marina 1,
        2 & 3 BR Apartments
      </h5>
      <h5 className="form-payment-plan">Payment Plan: 80/20</h5>
      <h5 className="form-download-text">
        Download latest Prices for Marina Views
      </h5>
      <form className="form">
        <input type="text" placeholder="Your Name" className="form-input" />
        <input type="email" placeholder="Your Email" className="form-input" />
        <PhoneInput
          country={"pk"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          containerClass="phone-input-container"
          inputClass="form-input"
          buttonClass="phone-input-button"
        />
        <button type="submit" className="form-button">
          <FaFileDownload /> Click Download Prices.pdf
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
