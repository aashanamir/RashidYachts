import React from 'react';
import "./Section2.css";
import FormComponent from '../../../components/Form/Form';
import Image from "../../../assets/ocean-cove.webp";
import Logo from "../../../assets/ocean-cove-logo.webp";

const Section2 = () => {
  return (
    <div className='Section2'>
      <div className="left">
        <FormComponent logo={Logo}/>
      </div>
      <div className="right">
        <img src={Image} alt="Marina Views" />
      </div>
    </div>
  );
}

export default Section2;
