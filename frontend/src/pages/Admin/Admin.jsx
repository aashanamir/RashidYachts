import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import CallRequests from "../Admin/CallRequests/CallRequests";

const Admin = () => {

  return (
    <div style={{ paddingTop: "120px", display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <CallRequests />
      </div>
    </div>
  );
};

export default Admin;
