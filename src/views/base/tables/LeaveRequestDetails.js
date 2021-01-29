import React from "react";
import LeaveRequestDetails from "../../base/tables/LeaveRequestDetails";

const AdminLeaveRequestDetails = props => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      type: "Annual",
      starts: "2020-10-31",
      ends: "2020-10-31",
      duration: "10",
      relieveStaff: "Sodiq Ridwan",
      status: "Pending"
    },
    {
      id: 2,
      name: "John Doe",
      type: "Annual",
      starts: "2020-10-31",
      ends: "2020-10-31",
      duration: "10",
      relieveStaff: "Sodiq Ridwan",
      status: "Pending"
    }
  ];

  return (
    <div>
      <LeaveRequestDetails tableData={data} match={props.match} />
    </div>
  );
};

export default AdminLeaveRequestDetails;