import React from "react";
import { CCard, CCardBody, CCol, CRow, CLink } from "@coreui/react";

const Cards = () => {
  return (
    <>
      <CRow className="d-flex justify-content-between">
        <div>
          <CCol xs="12" sm="6" md="12">
            <CLink to="/employee/summary">
              <CCard>
                <CCardBody>
                  <p>Leave History</p>
                </CCardBody>
              </CCard>
            </CLink>
          </CCol>
          <CCol xs="12" sm="6" md="12">
            <CCard>
              <CCardBody>
                <p>Self Appraisal</p>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="12">
            <CCard>
              <CCardBody>
                <p>My Holiday Calender</p>
              </CCardBody>
            </CCard>
          </CCol>
        </div>

        <div>
          <CCol xs="12" sm="6" md="12">
            <CCard>
              <CCardBody>
                <p>No Birthdays Today</p>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="12">
            <CCard>
              <CCardBody>
                <p>Company Announcements</p>
              </CCardBody>
            </CCard>
          </CCol>
        </div>
      </CRow>
    </>
  );
};

export default Cards;
