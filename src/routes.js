import React from "react";

const Staff = React.lazy(() => import("./views/pages/admin/Users"));
const OnboardingForm = React.lazy(() => import("./views/pages/admin/Onboard"));
const Home = React.lazy(() => import("./views/pages/home/Home"));
const LeaveRequestForm = React.lazy(() => import("./views/pages/employee/LeaveRequest"));
const LeaveHistory = React.lazy(() => import("./views/pages/employee/LeaveHistory"));
const AdminLeaveRequest = React.lazy(() => import("./views/pages/admin/LeaveRequests"));
const LeaveRequestDetails = React.lazy(() => import("./views/pages/admin/LeaveRequestDetails"));
const EmployeeDetails = React.lazy(() => import("./views/pages/admin/UserDetails"));
const EmployeeLeaveDetails = React.lazy(() => import("./views/pages/employee/LeaveRequestDetails"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/admin/manage/:id", exact: true, name: "Leave Request Details", component: LeaveRequestDetails },
  { path: "/dashboard", exact: true, name: "Dashboard", component: Home },
  { path: "/admin/employees", exact: true, name: "Employees", component: Staff },
  { path: "/admin/employees/:id", exact: true, name: "Employee Details", component: EmployeeDetails },
  { path: "/admin/manage", exact: true, name: "Manage Leave Request", component: AdminLeaveRequest },
  { path: "/admin/onboard", exact: true, name: "Onboard", component: OnboardingForm },
  { path: "/request", exact: true, name: "Request Leave", component: LeaveRequestForm },
  { path: "/employee/summary", exact: true, name: "History", component: LeaveHistory },
  { path: "/employee/details/:id", exact: true, name: "Leave Request Details", component: EmployeeLeaveDetails }
];

export default routes;
