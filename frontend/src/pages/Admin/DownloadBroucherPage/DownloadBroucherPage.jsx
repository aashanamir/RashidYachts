import React from "react";
import DownloadBroucher from "../DownloadBroucher/DownloadBroucher";
import Sidebar from "../../../components/Sidebar/Sidebar";

const DownloadBroucherPage = () => {
  return (
    <div style={{ paddingTop: "120px", display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <DownloadBroucher />
      </div>
    </div>
  );
};

export default DownloadBroucherPage;
