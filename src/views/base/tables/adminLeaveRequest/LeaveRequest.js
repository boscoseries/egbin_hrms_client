import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Card, Table, Container, Row } from "reactstrap";
import Title from "../../title/Title";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { HashLink } from "react-router-hash-link";
import { formatDistanceToNow } from "date-fns";
import { TheHeaderDropdownTasks as Menu } from "../../../../containers";
import swal from "@sweetalert/with-react";

const leaveRequests = [
  {
    staffId: 1,
    name: "John Doe",
    type: "Annual",
    starts: "2020-10-31",
    ends: "2020-10-31",
    duration: "10",
    relieveStaff: "Sodiq Ridwan",
    status: "Pending"
  },
  {
    staffId: 2,
    name: "John Doe",
    type: "Annual",
    starts: "2020-10-31",
    ends: "2020-10-31",
    duration: "10",
    relieveStaff: "Sodiq Ridwan",
    status: "Pending"
  }
];

const LeaveRequests = () => {
  // const dispatch = useDispatch();
  const history = useHistory();

  console.log(history);
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  // const pageChange = newPage => {
  //   currentPage !== newPage && history.push(`/users?page=${newPage}`);
  // };

  const handleRequestDetails = e => {
    e.preventDefault();
    const id = e.target.classList[0];
    console.log(e.target);
    return history.push(`/admin/manage/${id}`);
  };

  useEffect(() => {
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
                    <p className="pb-0 mb-1 font-weight-bold">There are no competitions at the moment.</p>
                    <p className="font-weight-bold"> Competitions will display here when they are available</p>
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
                            <th scope="col">ID</th>
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
                            const { staffId, name, type, starts, ends, duration, relieveStaff, status } = entry;
                            console.log(staffId);
                            return (
                              <tr key={index}>
                                <th scope="row">
                                  <Link to={`/admin/competitions/${staffId}`} style={{ color: "black" }}>
                                    <div className="pl-3">
                                      <span className="mb-0 text-sm d-inline-block text-truncate" style={{ maxWidth: "150px" }}>
                                        {staffId}
                                      </span>
                                    </div>
                                  </Link>
                                </th>
                                <td>{name}</td>
                                <td>
                                  <div>{type}</div>
                                </td>
                                <td>
                                  <div>{formatDistanceToNow(new Date(starts), { addSuffix: true })}</div>
                                </td>
                                <td>
                                  <div>{formatDistanceToNow(new Date(ends), { addSuffix: true })}</div>
                                </td>
                                <td>
                                  <div>{duration}</div>
                                </td>
                                <td>
                                  <div>{relieveStaff}</div>
                                </td>
                                <td>
                                  <div>{status}</div>
                                </td>
                                <td className="text-right">
                                  <span>
                                    <Menu
                                      updateKey={"Update Request"}
                                      deleteKey={"Delete Request"}
                                      detailsKey={"View Request"}
                                      className={staffId}
                                      statusUpdate={handleStatusUpdate}
                                      handleDelete={handleDelete}
                                      displayDetails={handleRequestDetails}
                                    />
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

export default LeaveRequests;
