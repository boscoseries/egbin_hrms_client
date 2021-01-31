import React, { useLayoutEffect } from "react";
import { TheContent, TheFooter, TheHeader } from "./index";
import { decodeToken } from "../redux/actions/index";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { token } from "../redux/config";

const TheLayout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  if (!token || token.split(" ")[0] != "Bearer") {
    history.push("/login");
  }
  const userToken = token.split(" ")[1];

  useLayoutEffect(() => {
    const decoded = async () => dispatch(decodeToken(userToken));
    const valid = decoded();
    valid.then(() => {}).catch(() => history.push("/login"));
  }, []);

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
