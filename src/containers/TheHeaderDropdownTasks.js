import React, { useLayoutEffect, useState } from "react";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useSelector } from "react-redux";

const TheHeaderDropdown = ({ statusUpdate, handleDelete, displayDetails, className, updateKey, deleteKey, detailsKey }) => {
  const state = useSelector(state => state.users.loggedinUser);
  const { role } = state;
  const [userRole, setUserRole] = useState(role);

  useLayoutEffect(() => {
    setUserRole(role);
  }, []);

  return (
    <CDropdown className="c-header-nav-items mx-2" direction="up">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-list" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        {(userRole === "ADMIN" || userRole === "MANAGER") && (
          <CDropdownItem onClick={statusUpdate}>
            <strong className={className}>{updateKey}</strong>
          </CDropdownItem>
        )}
        {userRole === "ADMIN" && (
          <CDropdownItem onClick={handleDelete}>
            <strong className={className}>{deleteKey}</strong>
          </CDropdownItem>
        )}
        <CDropdownItem onClick={displayDetails}>
          <strong className={className}>{detailsKey}</strong>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
