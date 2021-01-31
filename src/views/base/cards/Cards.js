import React from "react";
import { CCard, CCardBody, CCol, CRow, CLink } from "@coreui/react";

const Cards = () => {
  return (
    <>
      <CRow className="d-flex justify-content-between px-5 mx-5">
        <div>
          <CCol xs="12" sm="6" md="12">
            <CLink to="/employee/summary" className="text-decoration-none pointer-cursor text-dark">
              <CCard>
                <CCardBody className="text-uppercase font-weight-bold">
                  <p>Leave History</p>
                </CCardBody>
              </CCard>
            </CLink>
          </CCol>
          <CCol xs="12" sm="6" md="12">
            <CCard>
              <CCardBody className="text-uppercase font-weight-bold">
                <p>Self Appraisal</p>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="12">
            <CCard>
              <CCardBody className="text-uppercase font-weight-bold">
                <p>My Holiday Calender</p>
              </CCardBody>
            </CCard>
          </CCol>
        </div>

        <div>
          <CCol xs="12" sm="6" md="12">
            <CCard>
              <CCardBody className="text-uppercase font-weight-bold">
                <p>No Birthdays Today</p>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6" md="12">
            <CCard>
              <CCardBody className="text-uppercase font-weight-bold">
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
