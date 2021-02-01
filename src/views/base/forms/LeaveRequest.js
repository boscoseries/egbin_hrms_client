import React, { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { createLeaveRequest } from "../../../redux/actions";
import { fetchUsers } from "../../../redux/actions";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
  CSelect,
  CRow
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const LeaveRequest = () => {
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.users.user;
  const users = state.users.users.results;
  const [availableDays, setavailableDays] = useState("");
  const [formValues, setFormValues] = useState({});

  useLayoutEffect(() => {
    setavailableDays(user[formValues.leaveType]);
    dispatch(fetchUsers());
  }, [formValues.leaveType]);

  const onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues(() => {
      formValues[name] = value;
      return { ...formValues };
    });
  };

  const handleSubmit = async () => {
    if (Object.keys(formValues).length < 6) {
      return alert.show("Please complete all fields");
    }
    if (formValues.duration > availableDays) {
      return alert.show("You can only take " + availableDays + " days");
    }
    if (formValues.duration >= 14) {
      return alert.show("Please input a duration below 14 days");
    }
    const data = {
      ...formValues,
      leave_start: new Date(formValues.leave_start),
      leave_end: new Date(formValues.leave_end),
      resumption_date: new Date(formValues.resumption_date)
    };
    const response = await dispatch(createLeaveRequest(data));
    if (response.id) {
      history.push("/employee/summary");
    }
  };

  return (
    <>
      <CRow className="d-flex justify-content-center">
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader className="p-8 ">
              <strong>Leave Request Form</strong>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                {availableDays && (
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>
                        <strong>Availabe Days:</strong>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <p className="form-control-static">
                        <strong>{availableDays}</strong>
                      </p>
                    </CCol>
                  </CFormGroup>
                )}
                <CFormGroup row>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="type">Leave Type</CLabel>
                    <CSelect custom name="type" id="type" onChange={onInputChange}>
                      <option value="">Select Leave Type</option>
                      <option value="annual_leave">Annual Leave</option>
                      <option value="exam_leave">Examination Leave</option>
                      <option value="sick_leave">Sick Leave</option>
                      <option value="compassionate_leave">Compassionate Leave</option>
                    </CSelect>
                  </CCol>
                  <CCol md="6">
                    <CLabel htmlFor="duration">Duration</CLabel>
                    <CInput id="duration" name="duration" type="number" placeholder="Number of days" onChange={onInputChange} required />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="leave_start">Start</CLabel>
                    <CInput type="date" id="leave_start" name="leave_start" placeholder="date" onChange={onInputChange} />
                  </CCol>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="leave_end">End</CLabel>
                    <CInput type="date" id="leave_end" name="leave_end" placeholder="date" onChange={onInputChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="resumption_date">Resumption Date</CLabel>
                    <CInput type="date" id="resumption_date" name="resumption_date" placeholder="date" onChange={onInputChange} />
                  </CCol>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="relieve_staff">Relieve Staff</CLabel>
                    <CSelect custom name="relieve_staff" id="relieve_staff" onChange={onInputChange}>
                      <option value="">Select Employee</option>
                      {users &&
                        users.length &&
                        users
                          .filter(usr => usr.id !== user.staff_id)
                          .map(usr => <option key={usr.staff_id} value={user.staff_id}>{`${usr.firstname} ${usr.lastname}`}</option>)}
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol sm="12">
                    <CLabel htmlFor="description">Description</CLabel>
                    <CTextarea name="description" id="description" rows="4" placeholder="Tell us why..." onChange={onInputChange} />
                  </CCol>
                </CFormGroup>
              </CForm>
              <div>Reporting Manager: {user.line_manager}</div>
            </CCardBody>
            <CCardFooter className="d-flex justify-content-between">
              <CButton type="submit" size="sm" color="primary" onClick={handleSubmit}>
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

export default LeaveRequest;
