import React, { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Logo from "../../assets/marina-views-logo.webp";
import "./Form.css";
import axios from "axios";
import { BASEURL } from "../../API/Baseurl";
import download from "../../assets/down.pdf"; 
import {toast} from "react-toastify";

const FormComponent = ({logo}) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({}); 

  // Validate form data
  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
    if (!phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const downloadBtn = async (e) => {
    e.preventDefault();
    toast.success("Details Submitted Successfully");
    if (!validate()) return; 

    try {
      await axios.post(
        `${BASEURL}download/create`,
        { phone, name, email },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Download Started");

      // Trigger file download
      const link = document.createElement("a");
      link.href = download; 
      link.download = "brochure.pdf"; // Set the desired file name for the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setEmail("");
      setName("");
      setPhone("92");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <img src={logo || Logo} alt="Logo" className="logo" />
      <h2 className="form-title">Rashid Yachts & Marina</h2>
      <h5 className="form-description">
        Discover Unparalleled Luxury at Marina Views' Rashid Yachts & Marina 1,
        2 & 3 BR Apartments
      </h5>
      <h5 className="form-payment-plan">Payment Plan: 80/20</h5>
      <h5 className="form-download-text">
        Download latest Prices for Marina Views
      </h5>
      <form className="form" onSubmit={downloadBtn}>
        <input
          type="text"
          placeholder="Your Name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
        
        <input
          type="email"
          placeholder="Your Email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        
        <PhoneInput
          country="pk"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          containerClass="phone-input-container"
          inputClass="form-input"
          buttonClass="phone-input-button"
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
        
        <button className="form-button">
          <FaRegFilePdf /> Click Download Prices.pdf
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
