import React from "react";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CImg } from "@coreui/react";
import { useHistory } from "react-router-dom";

const TheHeaderDropdownUser = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("key");
    return history.push("/login");
  };

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link d-block" caret={false}>
        <div className="c-avatar">
          <CImg
            src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
            className="c-avatar-img"
            alt=""
            height={100}
            witdth={100}
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0 bg-gradient-secondary text-white" placement="bottom-end">
        <CDropdownItem header tag="div" color="black" className="text-center">
          <strong>Account Settings</strong>
        </CDropdownItem>
        <CDropdownItem onClick={logout}>Logout</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdownUser;
