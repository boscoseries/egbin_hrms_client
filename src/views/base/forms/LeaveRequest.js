import React, { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { createLeaveRequest } from "../../../redux/actions";
import { useSelector } from "react-redux";
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
  const alert = useAlert();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const userState = state.users.user;
  const [availableDays, setavailableDays] = useState("");
  const [formValues, setFormValues] = useState({});

  useLayoutEffect(() => {
    setavailableDays(userState[formValues.leaveType]);
  }, [formValues.leaveType]);

  const onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues(() => {
      formValues[name] = value;
      return { ...formValues };
    });
  };

  const handleSubmit = () => {
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
    dispatch(createLeaveRequest(data));
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
                    <CLabel htmlFor="leaveType">Leave Type</CLabel>
                    <CSelect custom name="leaveType" id="leaveType" onChange={onInputChange}>
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
                    <CLabel htmlFor="relieveStaff">Relieve Staff</CLabel>
                    <CSelect custom name="relieveStaff" id="relieveStaff" onChange={onInputChange}>
                      <option value="0">Select Employee</option>
                      <option value="1">Staff 1</option>
                      <option value="2">Staff 2</option>
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
              <div>Reporting Manager: {userState.line_manager}</div>
            </CCardBody>
            <CCardFooter className="d-flex justify-content-between">
              <CButton type="submit" size="sm" color="primary" onClick={handleSubmit}>
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
              <CButton type="reset" size="sm" color="danger">
                <CIcon name="cil-ban" onClick={() => console.log("cancelled")} /> Cancel
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default LeaveRequest;
