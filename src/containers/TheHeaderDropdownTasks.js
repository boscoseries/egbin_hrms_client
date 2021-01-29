import React from "react";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdown = ({ statusUpdate, handleDelete, displayDetails, className, updateKey, deleteKey, detailsKey }) => {
  return (
    <CDropdown className="c-header-nav-items mx-2" direction="up">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-list" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem onClick={statusUpdate}>
          <strong className={className}>{updateKey}</strong>
        </CDropdownItem>
        <CDropdownItem onClick={handleDelete}>
          <strong className={className}>{deleteKey}</strong>
        </CDropdownItem>
        <CDropdownItem onClick={displayDetails}>
          <strong className={className}>{detailsKey}</strong>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
