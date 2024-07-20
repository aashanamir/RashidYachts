import React, { useState } from "react";
import "./CallBackSection.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { BASEURL } from "../../../API/Baseurl";
import { toast } from "react-toastify";

const CallBackSection = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const callBackAction = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASEURL + "callback/create", {
        name,
        phone,
      });

      setName("");
      setPhone("");
      toast.success("Your Call Request Has Been Created Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div id="Contact" className="callback-section">
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
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <PhoneInput
              country={"pk"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              placeholder="Enter phone number"
              containerClass="phone-input-container"
              inputClass="form-input"
              buttonClass="phone-input-button"
            />
            <button
              onClick={callBackAction}
              type="submit"
              className="form-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallBackSection;
