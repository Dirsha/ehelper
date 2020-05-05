import React from "react";

import "./MainTemplate.css";
import Header from "../../components/Header";
import LeftMenu from "../../components/LeftMenu";

const MainTemplate = ({ children }) => {
  return (
    <div className="maintemplate">
      <div className="maintemplate-left">
        <LeftMenu />
      </div>
      <div className="maintemplate-right">
        <Header />
        {children}
      </div>
    </div>
  );
};
export default MainTemplate;
