import React from "react";
import { LeaveRequestTable } from "../../../reusable";

const EmployeeRequestDetails = props => {
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
      <LeaveRequestTable tableData={data} match={props.match} />
    </div>
  );
};

export default EmployeeRequestDetails;
