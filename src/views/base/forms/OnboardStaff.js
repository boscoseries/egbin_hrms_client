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
  CFormText,
  CInput,
  CLabel,
  CSelect,
  CRow
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
// import { DocsLink } from "src/reusable";

const EmployeeForm = () => {
  const [staffdetails, setStaffDetails] = useState({ staffID: "123oo2" });

  const handeleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setStaffDetails(() => {
      staffdetails[name] = value;
      return { ...staffdetails };
    });
  };

  const submitForm = () => {
    console.error("submitted");
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
                    <CLabel htmlFor="othernames">Othernames</CLabel>
                    <CInput id="othernames" name="othernames" placeholder="Othernames" onChange={handeleInputChange} />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="dateOfBirth">Date of Birth</CLabel>
                    <CInput type="date" nae="dateOfBirth" id="dateOfBirth" placeholder="date" onChange={handeleInputChange} />
                  </CCol>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="designation">Designation</CLabel>
                    <CInput id="designation" name="designation" placeholder="Employee Job Title" required onChange={handeleInputChange} />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="6">
                    <CLabel htmlFor="text-input">Staff ID</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Employee ID No." />
                  </CCol>
                  <CCol sm="12" md="6">
                    <CLabel htmlFor="lineManager">Direct Line Manager</CLabel>
                    <CSelect custom name="lineManager" id="lineManager" onChange={handeleInputChange}>
                      <option value="0">Select Employee</option>
                      <option value="1">Staff 1</option>
                      <option value="2">Staff 2</option>
                    </CSelect>
                    <CFormText>
                      <strong>ID: {"EGB112"}</strong>
                    </CFormText>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="d-flex justify-content-between">
              <CButton type="submit" size="sm" color="primary" onClick={submitForm}>
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
              <CButton type="reset" size="sm" color="danger" onClick={() => console.log("cancelled")}>
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
