import React from 'react';
import "./Section1.css";
import FormComponent from '../../../components/Form/Form';
import Image from "../../../assets/marina-views.webp";

const Section1 = () => {
  return (
    <div id='Home' className='Section1'>
      <div className="left">
        <img src={Image} alt="" />
      </div>
      <div className="right">
        <FormComponent />
      </div>
    </div>
  )
}

export default Section1