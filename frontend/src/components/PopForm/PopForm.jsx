import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './PopForm.module.css';
import download from "../../assets/down.pdf";

const PopForm = ({ show, handleClose }) => {
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const downloadBtn = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      // Trigger file download
      const link = document.createElement("a");
      link.href = download;
      link.download = "brochure.pdf"; // Set the desired file name for the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setPhone("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${styles.popup} ${show ? styles.show : ''}`}>
      <div className={styles.popupInner}>
        <i className={styles.closeBtn} onClick={handleClose}>&times;</i>
        <h2>DOWNLOAD BROCHURE</h2>
        <p>Verify You’re a Human to Download</p>
        <PhoneInput
          country={'pk'}
          value={phone}
          onChange={setPhone}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
            placeholder: 'Your Number',
          }}
        />
        {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>} {/* Corrected error message check */}
        <button onClick={downloadBtn} className={styles.submitBtn}>Submit</button>
        <p className={styles.downloadTime}>*Time to Download - 2 Seconds</p>
      </div>
    </div>
  );
};

export default PopForm;
