import React from 'react';
import "./Section1.css";
import FormComponent from '../../../components/Form/Form';
import Image1 from "../../../assets/marina-views.webp";

const Section1 = ({logo , Image}) => {
  return (
    <div id='Home' className='Section1'>
      <div className="left">
        <img src={Image || Image1} alt="" />
      </div>
      <div className="right">
        <FormComponent  logo={logo}/>
      </div>
    </div>
  )
}

export default Section1