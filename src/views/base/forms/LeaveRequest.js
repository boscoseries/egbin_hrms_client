import React, { useState } from "react";
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


const AdminLeaveManagement = () => {
  const [formValues, setFormValues] = useState({ reportingManager: "Daniel Ale" });

  const onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues(() => {
      formValues[name] = value;
      return { ...formValues };
    });
  };

  const handleSubmit = () => {
    console.log("submitted");
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
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Availabe Leave Days</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">10</p>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="leaveType">Leave Type</CLabel>
                    <CSelect custom name="leaveType" id="leaveType" onChange={onInputChange}>
                      <option value="0">Select Leave Type</option>
                      <option value="1">Annual Leave</option>
                      <option value="2">Examination Leave</option>
                      <option value="3">Maternity Leave</option>
                      <option value="3">Sick Leave</option>
                      <option value="3">Compensation Leave</option>
                    </CSelect>
                  </CCol>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="leaveFor">Leave For</CLabel>
                    <CSelect custom name="leaveFor" id="leaveFor" onChange={onInputChange}>
                      <option value="0">Full Day</option>
                      <option value="1">Half Day</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="startDate">From</CLabel>
                    <CInput type="date" id="startDate" name="startDate" placeholder="date" onChange={onInputChange} />
                  </CCol>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="endDate">To</CLabel>
                    <CInput type="date" id="endDate" name="endDate" placeholder="date" onChange={onInputChange} />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="6">
                    <CLabel htmlFor="number-input">Days</CLabel>
                    <CInput id="number-input" name="number-input" type="number" placeholder="Number of days" onChange={onInputChange} />
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
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                    <CTextarea name="textarea-input" id="textarea-input" rows="4" placeholder="Tell us why..." onChange={onInputChange} />
                  </CCol>
                </CFormGroup>
              </CForm>
              <div>Reporting Manager: {"Daniel Ale"}</div>
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

export default AdminLeaveManagement;
