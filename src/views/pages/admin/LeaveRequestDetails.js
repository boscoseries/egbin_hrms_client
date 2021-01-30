import React from "react";
import { LeaveRequestTable } from "../../../reusable";

const LeaveRequests = props => {
  return (
    <div>
      <LeaveRequestTable match={props.match} />
    </div>
  );
};

export default LeaveRequests;
