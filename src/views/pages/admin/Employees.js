import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Card, Table, Container, Row } from "reactstrap";
import Title from "../../base/title/Title";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateStatus } from "../../../redux/actions";
import { TheHeaderDropdownTasks } from "../../../containers";
import swal from "@sweetalert/with-react";

const Employees = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const users = state.users.users.results;

  const handleRequestDetails = e => {
    e.preventDefault();
    const id = e.target.classList[0];
    return history.push(`/admin/employee/details/${id}`);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleStatusUpdate = e => {
    e.preventDefault();
    const id = e.target.classList[0];
    swal("Update Leave Request Status", {
      content: (
        <select className="form-control" style={{ border: "2px solid" }} onChange={e => console.log(e)}>
          <option value="">--Choose a Status--</option>
          <option value="APPROVED">APPROVED</option>
          <option value="REJECTED">REJECTED</option>
          <option value="PENDING">PENDING</option>
        </select>
      ),
      buttons: {
        cancel: true,
        confirm: "Update!"
      },
      dangerMode: true,
      closeOnClickOutside: false
    }).then(async value => {
      if (value) {
        console.log({ value });
        const response = await dispatch(updateStatus(id, value));
        response.data
          ? swal({
              text: "Update Successful",
              icon: "success",
              button: false,
              timer: 2000
            })
          : swal({
              text: "Error updating Status",
              icon: "error",
              timer: 1500
            });
      } else {
        swal({
          text: "Update cancelled",
          icon: "error",
          timer: 1200
        });
      }
    });
  };

  console.log(users);

  const handleDelete = () => {};

  if (!users) return null;

  return (
    <>
      <h2>Manage Employees</h2>
      <div>
        <div className="pb-5 pt-5 pt-md-8">
          <Container fluid style={{ width: "97%" }}>
            {!users && (
              <div style={{ height: "70vh" }}>
                <div className="bg-white">
                  <div
                    className="d-flex flex-column justify-content-center align-items-center text-dark"
                    style={{ height: "30vh", fontSize: "17px" }}>
                    <p className="pb-0 mb-1 font-weight-bold">You don't have any leave requests for now.</p>
                  </div>
                </div>
              </div>
            )}
            {users.length > 0 && (
              <>
                <Title titleClass="title text-white" title="Leave Requests" />
                <Row>
                  <div className="col">
                    <Card className="shadow p-0">
                      <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Staff Id</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Middlename</th>
                            <th scope="col">Annual Leave</th>
                            <th scope="col">Sick Leave</th>
                            <th scope="col">Exam Leave</th>
                            <th scope="col">Compass. Leave</th>
                            <th scope="col">Line Manager</th>
                            <th scope="col">Role</th>
                            <th scope="col" />
                          </tr>
                        </thead>

                        <tbody>
                          {users.map((entry, index) => {
                            const {
                              id,
                              firstname,
                              lastname,
                              middlename,
                              staff_id,
                              annual_leave,
                              sick_leave,
                              exam_leave,
                              relieve_staff,
                              compassionate_leave,
                              role,
                              line_manager
                            } = entry;
                            console.log(relieve_staff);
                            return (
                              <tr key={index}>
                                <td>
                                  <strong>{staff_id}</strong>
                                </td>
                                <td>{firstname}</td>
                                <td>
                                  <div>{lastname}</div>
                                </td>
                                <td>
                                  <div>{middlename}</div>
                                </td>
                                <td>
                                  <div>{annual_leave}</div>
                                </td>
                                <td>
                                  <div>{exam_leave}</div>
                                </td>
                                <td>
                                  <div>{sick_leave}</div>
                                </td>
                                <td>
                                  <div>{compassionate_leave}</div>
                                </td>
                                <td>
                                  <div>{`${line_manager.firstname} ${line_manager.lastname}`}</div>
                                </td>
                                <td>
                                  <div>{role}</div>
                                </td>
                                <td className="text-right">
                                  <span>
                                    <TheHeaderDropdownTasks
                                      detailsKey={"View Details"}
                                      className={id}
                                      displayDetails={handleRequestDetails}
                                      handleDelete={handleDelete}
                                      deleteKey={"Delete Request"}
                                      updateKey={"Update Status"}
                                      statusUpdate={handleStatusUpdate}
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

export default Employees;
