import React, { useEffect, useState } from "react";
import "../CallRequests/CallRequests.css"; // Import the CSS file for styling
import axios from "axios";
import { BASEURL } from "../../../API/Baseurl";
import { toast } from "react-toastify";

const Broucher = () => {
  const [data, setData] = useState([]);
  const [actionRequestId, setActionRequestId] = useState(null);

  const handleActionClick = (id) => {
    setActionRequestId(actionRequestId === id ? null : id);
  };

  const handleActionSelect = async (id, action) => {
    try {
      const { data } = await axios.delete(`${BASEURL}broucher/del/${id}`, {
        withCredentials: true,
      });
      toast.success(data.message);
      setActionRequestId(null);
    } catch (error) {
      console.log(error);
      setActionRequestId(null);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}broucher/all`, {
          withCredentials: true,
        });
        setData(response.data.allDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [handleActionClick]);

  return (
    <div className="call-requests">
      <table className="call-requests-table">
        <thead>
          <tr>
            <th>SR</th>
            <th>Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((request, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{request.phone}</td>
              <td className="action-cell">
                <button
                  className="action-btn"
                  onClick={() => handleActionClick(index)}
                >
                  Action
                </button>
                {actionRequestId === index && (
                  <div className="action-dropdown">
                    <button onClick={() => handleActionSelect(request._id)}>
                      Delete
                    </button>
                    <button
                      onClick={() => handleActionSelect(request.sr, "Cancel")}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Broucher;
