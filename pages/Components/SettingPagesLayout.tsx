import React from "react";
import SideBar from "./SideBar";

const SettingPagesLayout = ({ children }: any) => {
  return (
    <div className="setting-container">
      <SideBar />
      <div className="seeting-shower-container">{children}</div>
    </div>
  );
};

export default SettingPagesLayout;
