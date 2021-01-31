import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Card, Table, Container, Row } from "reactstrap";
import Title from "../../title/Title";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaves, fetchUser } from "../../../../redux/actions";
import { TheHeaderDropdownTasks } from "../../../../containers";
import swal from "@sweetalert/with-react";
import { formatDistanceToNow } from "date-fns";

// const leaveRequests = [
//   {
//     staffId: 1,
//     name: "John Doe",
//     type: "Annual",
//     starts: "2020-10-31",
//     ends: "2020-10-31",
//     duration: "10",
//     relieveStaff: "Sodiq Ridwan",
//     status: "Pending"
//   },
//   {
//     staffId: 2,
//     name: "John Doe",
//     type: "Annual",
//     starts: "2020-10-31",
//     ends: "2020-10-31",
//     duration: "10",
//     relieveStaff: "Sodiq Ridwan",
//     status: "Pending"
//   }
// ];

const LeaveHistory = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const leaveRequests = state.leaves.leaves;

  console.log(leaveRequests);

  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  // const pageChange = newPage => {
  //   currentPage !== newPage && history.push(`/users?page=${newPage}`);
  // };

  const handleRequestDetails = e => {
    e.preventDefault();
    const id = e.target.classList[0];
    return history.push(`/admin/employee/details/${id}`);
  };

  useEffect(() => {
    dispatch(fetchLeaves());
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  const handleStatusUpdate = e => {
    e.preventDefault();
    const id = e.target.classList[0];
    swal("Update Leave Request Status", {
      content: (
        <select className="form-control" style={{ border: "2px solid" }} onChange={e => swal.setActionValue(e.target.value)}>
          <option value="">--Choose a Status--</option>
          <option value="accept">Accepted</option>
          <option value="reject">Rejected</option>
          <option value="pending">Pending</option>
        </select>
      ),
      buttons: {
        cancel: true,
        confirm: "Update!"
      },
      dangerMode: true,
      closeOnClickOutside: false
    }).then(async value => {
      // if (value) {
      //   const response = await dispatch(updateStatus(id, value));
      //   response.data
      //     ? swal({
      //         text: "Update Successful",
      //         icon: "success",
      //         button: false,
      //         timer: 2000
      //       })
      //     : swal({
      //         text: "Error updating Status",
      //         icon: "error",
      //         timer: 1500
      //       });
      // } else {
      //   swal({
      //     text: "Update cancelled",
      //     icon: "error",
      //     timer: 1200
      //   });
      // }
    });
  };

  const handleDelete = () => {};

  if (!leaveRequests) return null;

  return (
    <>
      <div>
        <div className="pb-5 pt-5 pt-md-8">
          <Container fluid style={{ width: "97%" }}>
            {!leaveRequests && (
              <div style={{ height: "70vh" }}>
                <div className="bg-white">
                  <div
                    className="d-flex flex-column justify-content-center align-items-center text-dark"
                    style={{ height: "30vh", fontSize: "17px" }}>
                    <p className="pb-0 mb-1 font-weight-bold">TYou don't have any leave requests for now.</p>
                  </div>
                </div>
              </div>
            )}
            {leaveRequests.length > 0 && (
              <>
                <Title titleClass="title text-white" title="Leave Requests" />
                <Row>
                  <div className="col">
                    <Card className="shadow p-0">
                      <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Staff ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Starts</th>
                            <th scope="col">Ends</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Relieve Staff</th>
                            <th scope="col">Status</th>
                            <th scope="col" />
                          </tr>
                        </thead>

                        <tbody>
                          {leaveRequests.map((entry, index) => {
                            const {
                              staff: { firstname, lastname, staff_id },
                              type,
                              leave_start,
                              leave_end,
                              duration,
                              relieve_staff,
                              status
                            } = entry;
                            console.log(relieve_staff);
                            return (
                              <tr key={index}>
                                <th scope="row">
                                  <Link to={`/employees/${staff_id}`} style={{ color: "black" }}>
                                    <div className="pl-3">
                                      <span className="mb-0 text-sm d-inline-block text-truncate" style={{ maxWidth: "150px" }}>
                                        {staff_id}
                                      </span>
                                    </div>
                                  </Link>
                                </th>
                                <td>{`${firstname}` + ` ${lastname}`}</td>
                                <td>{type}</td>
                                <td>
                                  <div>{new Date(leave_start).toDateString()}</div>
                                </td>
                                <td>
                                  <div>{new Date(leave_end).toDateString()}</div>
                                </td>
                                <td>
                                  <div>{duration}</div>
                                </td>
                                <td>
                                  <div>{`${relieve_staff.firstname}` + ` ${relieve_staff.lastname}`}</div>
                                </td>
                                <td>
                                  <div>{status}</div>
                                </td>
                                <td className="text-right">
                                  <span>
                                    <TheHeaderDropdownTasks detailsKey={"View Details"} className={staff_id} displayDetails={handleRequestDetails} />
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </Card>
                  </div>
                </Row>
              </>
            )}
          </Container>
        </div>
      </div>
    </>
  );
};

export default LeaveHistory;
