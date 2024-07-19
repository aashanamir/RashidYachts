import React, { useState } from "react";
import "./CallBackSection.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaFileDownload } from "react-icons/fa";

const CallBackSection = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="callback-section">
      <div className="callback-section-container">
        <div className="content">
          <h2>EMAAR</h2>
          <p>
            Emaar Properties is a leading real estate development company based
            in Dubai, United Arab Emirates. Founded in 1997, Emaar is renowned
            for its large-scale, innovative projects that shape skylines and
            communities. Notable developments include the Burj Khalifa, the
            tallest building in the world, and The Dubai Mall, one of the
            largest shopping malls globally. Emaar's portfolio encompasses
            residential, commercial, and hospitality properties, offering a
            blend of luxury and quality. The company operates internationally,
            with projects in the Middle East, North Africa, Asia, Europe, and
            North America, reinforcing its status as a global real estate
            powerhouse.
          </p>
        </div>
        <div className="callback-form">
          <h2>GET A CALL BACK</h2>
          <form className="form">
            <input type="text" placeholder="Your Name" className="form-input" />
            <PhoneInput
              country={"pk"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              containerClass="phone-input-container"
              inputClass="form-input"
              buttonClass="phone-input-button"
            />
            <button type="submit" className="form-button">
             Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallBackSection;
