import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://egbin-power.com/" target="_blank" rel="noopener noreferrer">
          Egnin Power
        </a>
        <span className="ml-1">&copy; 2020 HRMS</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://egbin-power.com/" target="_blank" rel="noopener noreferrer">
          Egbin Tech.
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
