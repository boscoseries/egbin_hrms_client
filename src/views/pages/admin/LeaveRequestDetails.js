import React from "react";
import AdminLeaveRequestDetails from "../../base/tables/LeaveRequestDetails";

const LeaveRequests = props => {
  console.log("also got here");
  return (
    <div>
      <AdminLeaveRequestDetails match={props.match} />
    </div>
  );
};

export default LeaveRequests;
