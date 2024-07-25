import React, { useEffect, useState } from "react";
import "./CallRequests.css";
import axios from "axios";
import { BASEURL } from "../../../API/Baseurl";
import { toast } from "react-toastify";

const CallRequests = () => {
  const [requests, setRequests] = useState([]);
  const [actionRequestId, setActionRequestId] = useState(null);

  const fetchRequests = async () => {
    try {
      const { data } = await axios.get(`${BASEURL}callback/all`, {
        withCredentials: true,
      });
      setRequests(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(
        `${BASEURL}callback/update/${id}`,
        {
          status: newStatus,
        },
        {
          withCredentials: true,
        }
      );

      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id ? { ...request, status: newStatus } : request
        )
      );
      toast.success(`Status Updated Successfully to ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const handleActionClick = (id) => {
    setActionRequestId(id === actionRequestId ? null : id);
  };

  const handleActionSelect = async (id) => {
    try {
      const { data } = await axios.delete(`${BASEURL}callback/del/${id}`, {
        withCredentials: true,
      });
      toast.success(data.message);
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request._id !== id)
      );
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to perform action");
    }
    setActionRequestId(null); // Close the action dropdown
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="call-requests">
      <table className="call-requests-table">
        <thead>
          <tr>
            <th>SR</th>
            <th>Name</th>
            <th>Number</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={request._id}>
              <td>{index + 1}</td>
              <td>{request.name}</td>
              <td>{request.phone}</td>
              <td>
                <select
                  value={request.status}
                  onChange={(e) =>
                    handleStatusChange(request._id, e.target.value)
                  }
                  className="status-select"
                >
                  <option value="New">New</option>
                  <option value="Called">Called</option>
                  <option value="Not Called Yet">Not Called Yet</option>
                </select>
              </td>
              <td className="action-cell">
                <button
                  className="action-btn"
                  onClick={() => handleActionClick(request._id)}
                >
                  Action
                </button>
                {actionRequestId === request._id && (
                  <div className="action-dropdown">
                    <button onClick={() => handleActionSelect(request._id)}>
                      Delete
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

export default CallRequests;
