import React, { useState } from "react";
import Image from "../../assets/marina-views.webp";
import "./SimpleComponent.css";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

const SimpleComponent = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="container">
      <div className="left">
        <img src={Image} alt="Demo" className="image" />
      </div>
      <div className="right">
        <h2 className="title">Rashid Yachts & Marina</h2>
        <p className="description">
          Discover Unparalleled Luxury at Marina Views' Rashid Yachts & Marina
          1, 2 & 3 BR Apartments
        </p>
        <p className="payment-plan">Payment Plan: 80/20</p>
        <p className="download-text">
          Download latest Prices for Marina Views
        </p>
        <form className="form">
          <input
            type="text"
            placeholder="Your Name"
            className="input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input"
            required
          />
          <div className="phone-input">
            {/* <PhoneInput
              country={"pk"}
              value={phone}
              placeholder="Enter phone number"
              onChange={(phone) => setPhone(phone)}
              inputClass="phone-input-class"
            /> */}
          </div>
          <button type="submit" className="button">
            Click Download Prices.pdf
          </button>
        </form>
      </div>
    </div>
  );
};

export default SimpleComponent;
