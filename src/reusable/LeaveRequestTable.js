import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow, CCardFooter, CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
// import LeaveRequestDetails from "../view/base/tables/LeaveRequestDetails";
// import LeaveRequestDetails from "../view/base/tables/LeaveRequestDetails";

const LeaveRequestTable = props => {
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
    <CRow className="d-flex justify-content-center">
      <CCol lg={6}>
        <CCard>
          <CCardHeader>Staff ID: {1}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {data.map(([key, value], index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{`${key}:`}</td>
                      <td>
                        <strong>{value}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CCardBody>
          <CCardFooter className="p-4">
            <CButton type="submit" size="sm" color="primary">
              <CIcon name="cil-scrubber" onSubmit={() => console.log("submitted")} /> Back
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default LeaveRequestTable;

// const StaffDetails = props => {
//   const res = staff.find(value => value.id.toString() === props.match.params.id);
//   const staffDetails = res
//     ? Object.entries(res)
//     : [
//       [
//         "id",
//         <span>
//           <CIcon className="text-muted" name="cui-icon-ban" /> Not found
//           </span>
//       ]
//     ];

//   return (
//     <CRow className="d-flex justify-content-center">
//       <CCol lg={6}>
//         <CCard>
//           <CCardHeader>Staff ID: {1}</CCardHeader>
//           <CCardBody>
//             <table className="table table-striped table-hover">
//               <tbody>
//                 {staffDetails.map(([key, value], index) => {
//                   return (
//                     <tr key={index.toString()}>
//                       <td>{`${ key }:`}</td>
//                       <td>
//                         <strong>{value}</strong>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </CCardBody>
//           <CCardFooter className="p-4">
//             <CButton type="submit" size="sm" color="primary">
//               <CIcon name="cil-scrubber" onSubmit={() => console.log("submitted")} /> Back
//             </CButton>
//           </CCardFooter>
//         </CCard>
//       </CCol>
//     </CRow>
//   );
// };

// export default StaffDetails;
