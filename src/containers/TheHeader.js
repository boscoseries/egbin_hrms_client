import React, { useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { CHeader, CHeaderNav, CHeaderNavItem, CHeaderNavLink, CSubheader } from "@coreui/react";
import { TheHeaderDropdownMssg, TheHeaderDropdownNotif } from "./index";

const TheHeader = () => {
  const state = useSelector(state => state.users.user);
  const [userRole, setUserRole] = useState();
  const { role, firstname } = state;

  useLayoutEffect(() => {
    setUserRole(role);
  }, []);

  return (
    <CHeader withSubheader>
      <CSubheader className="px-3 justify-content-between">
        <img src="https://theeagleonline.com.ng/wp-content/uploads/2015/10/Egbin-logo.jpg" height="50" alt="Logo" />
        <div className="d-flex align-items-center">
          Welcome,
          <span>
            <strong className="px-2">{firstname}</strong>
          </span>
        </div>
      </CSubheader>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/request">Request Leave</CHeaderNavLink>
        </CHeaderNavItem>
        {userRole === "ADMIN" && (
          <>
            <CHeaderNavItem className="px-3">
              <CHeaderNavLink to="/admin/employees">Employees</CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem className="px-3">
              <CHeaderNavLink to="/admin/onboard">Onboard Employee</CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem className="px-3">
              <CHeaderNavLink to="/admin/manage">Manage Leave Requests</CHeaderNavLink>
            </CHeaderNavItem>
          </>
        )}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif />
        <TheHeaderDropdownMssg />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
