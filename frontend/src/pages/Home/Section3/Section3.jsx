import React from 'react';
import "./Section3.css";
import BrochureImage from '../../../assets/about.webp'; // Replace with the correct image path
import { FaRegFilePdf } from 'react-icons/fa';

const Section3 = () => {
  return (
    <div id="About" className='Section3'>
      <div className="left">
        <img src={BrochureImage} alt="Marina Views" />
      </div>
      <div className="right">
        <h1 className="title">Rashid Yachts & Marina</h1>
        <p className="description">
          Wake up to the serene melody of nature's embrace and the gentle glow of Dubai's sun-kissed mornings at Ocean, nestled within Rashid Yachts & Marina. Here, contemporary sophistication intertwines seamlessly with the tranquil essence of Dubai's rich heritage. Ocean Point offers residents an elevated lifestyle, harmonizing luxury, convenience, and the tranquility of modern living amidst nature's serene embrace.
        </p>
        <p className="description">
          Every day at Ocean Point unfolds with breathtaking vistas, from dawn to dusk. Verdant landscapes, a vibrant poolside, and the iconic Dubai Downtown skyline create a captivating panorama. This visual symphony beautifully contrasts the serene allure of nature with the vibrant energy of city life, offering residents a daily retreat into both tranquility and glamour.
        </p>
        <button className="download-button"><FaRegFilePdf />Download Brochure.pdf</button>
      </div>
    </div>
  );
}

export default Section3;
