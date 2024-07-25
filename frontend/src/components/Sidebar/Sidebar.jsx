import React, { useEffect } from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { userStatus, userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus === "loading" || ("error" && userData === null)) {
      navigate("/login");
    }
  }, [userData, userStatus, navigate]);

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/admin" className="sidebar-link">
            Call Requests
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/download-broucher-page" className="sidebar-link">
            Download Broucher
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/admin/broucher-pop" className="sidebar-link">
            Pop Broucher
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
