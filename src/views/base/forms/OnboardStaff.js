import React, { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/actions";
import { useHistory } from "react-router-dom";
import { fetchUsers, fetchUser } from "../../../redux/actions";
import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CForm, CFormGroup, CInput, CLabel, CSelect, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";

const EmployeeForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [staffdetails, setStaffDetails] = useState({});
  const state = useSelector(state => state);
  const users = state.users.users.results;

  const handeleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setStaffDetails(() => {
      staffdetails[name] = value;
      return { ...staffdetails };
    });
  };

  useLayoutEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const submitForm = async () => {
    const response = await dispatch(createUser(staffdetails));
    if (response.id) {
      history.push("/admin/employees");
    }
  };

  console.log(staffdetails);

  return (
    <>
      <CRow className="d-flex justify-content-center">
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader className="p-8 ">
              <strong>Onboard New Employee</strong>
            </CCardHeader>
            <CCardBody>
              <CForm className="form-horizontal">
                <CFormGroup row>
                  <CCol md="6">
                    <CLabel>
                      <strong>Input Employee Details</strong>
                    </CLabel>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol sm="12" md="4">
                    <CLabel htmlFor="lastname">Lastname</CLabel>
                    <CInput id="lastname" name="lastname" placeholder="Lastname" required onChange={handeleInputChange} />
                  </CCol>
                  <CCol sm="12" md="4">
                    <CLabel htmlFor="firstname">FIrstname</CLabel>
                    <CInput id="firstname" name="firstname" placeholder="Firstname" required onChange={handeleInputChange} />
                  </CCol>
                  <CCol sm="12" md="4">
                    <CLabel htmlFor="middlename">Othernames</CLabel>
                    <CInput id="middlename" name="middlename" placeholder="middlename" onChange={handeleInputChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol sm="12" md="4">
                    <CLabel htmlFor="annual_leave">Annual Leave Bal.</CLabel>
                    <CInput id="annual_leave" name="annual_leave" type="number" placeholder="No of days" required onChange={handeleInputChange} />
                  </CCol>
                  <CCol sm="12" md="4">
                    <CLabel htmlFor="sick_leave">Sick Leave Bal.</CLabel>
                    <CInput id="sick_leave" name="sick_leave" type="number" placeholder="No of days" required onChange={handeleInputChange} />
                  </CCol>
                  <CCol sm="12" md="4">
                    <CLabel htmlFor="othernames">Exam Leave Bal.</CLabel>
                    <CInput id="othernames" name="exam_leave" type="number" placeholder="No of days" onChange={handeleInputChange} />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="6">
                    <CLabel htmlFor="compassionate_leave">Compassionate Leave Bal</CLabel>
                    <CInput
                      id="compassionate_leave"
                      name="compassionate_leave"
                      type="number"
                      placeholder="No of days"
                      onChange={handeleInputChange}
                    />
                  </CCol>
                  <CCol md="6">
                    <CLabel htmlFor="staff_id">Staff ID</CLabel>
                    <CInput id="staff_id" name="staff_id" placeholder="Employee ID No." onChange={handeleInputChange} />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="line_manager">Direct Line Manager</CLabel>
                    <CSelect custom name="line_manager" id="line_manager" onChange={handeleInputChange}>
                      <option value="0">Select Employee</option>
                      {users &&
                        users.length &&
                        users.map(usr => <option key={usr.staff_id} value={usr.id}>{`${usr.firstname} ${usr.lastname}`}</option>)}
                    </CSelect>
                  </CCol>
                  <CCol md="6">
                    <CLabel htmlFor="role">Role</CLabel>
                    <CSelect custom name="role" id="role" onChange={handeleInputChange}>
                      <option value="">Select Role</option>
                      <option value="ADMIN">ADMIN</option>
                      <option value="STAFF">STAFF</option>
                      <option value="MANAGER">LINE MANAGER</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="d-flex justify-content-between">
              <CButton type="submit" size="sm" color="primary" onClick={submitForm}>
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
              <CButton type="reset" size="sm" color="danger" onClick={() => history.goBack()}>
                <CIcon name="cil-ban" /> Cancel
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default EmployeeForm;
