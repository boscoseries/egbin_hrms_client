import React, { useState } from "react";
import { CButton, CCard, CCardBody, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from "@coreui/react";

const Modals = () => {
  const [primary, setPrimary] = useState(false);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardBody>
            <CButton color="primary" onClick={() => setPrimary(!primary)} className="mr-1">
              Primary modal
            </CButton>

            <CModal show={primary} onClose={() => setPrimary(!primary)} color="primary">
              <CModalHeader closeButton>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => setPrimary(!primary)}>
                  Do Something
                </CButton>{" "}
                <CButton color="secondary" onClick={() => setPrimary(!primary)}>
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Modals;
