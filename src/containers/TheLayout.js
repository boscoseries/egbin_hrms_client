import React from "react";
import { TheContent, TheFooter, TheHeader } from "./index";
import { useHistory } from "react-router-dom";
import { token } from "../redux/config";

const TheLayout = () => {
  const history = useHistory();
  if (!token || token.split(" ")[0] != "Bearer") {
    history.push("/login");
  }

  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
