import React from 'react';
import "./Section2.css";
import FormComponent from '../../../components/Form/Form';
import Image from "../../../assets/ocean-cove.webp";

const Section2 = () => {
  return (
    <div id='AnotherSection' className='Section2'>
      <div className="left">
        <FormComponent />
      </div>
      <div className="right">
        <img src={Image} alt="Marina Views" />
      </div>
    </div>
  );
}

export default Section2;
