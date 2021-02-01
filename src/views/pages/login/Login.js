import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../redux/actions";
import { useAlert } from "react-alert";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const [userCreds, setUserCreds] = useState({});

  const onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUserCreds(() => {
      userCreds[name] = value;
      return { ...userCreds };
    });
  };

  const handleSubmit = async () => {
    console.log("loggedin");
    const data = await dispatch(login({ ...userCreds }));
    if (data.result) {
      return history.push("/");
    } else {
      alert.show("Id and passwod do not match!");
      return history.push("/login");
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-5">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name="staff_id" placeholder="Username" autoComplete="username" onChange={onInputChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="password" placeholder="Password" autoComplete="current-password" onChange={onInputChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CButton color="primary" className="px-4 w-100" onClick={handleSubmit}>
                        Login
                      </CButton>
                    </CInputGroup>
                    <CCol xs="6" className="text-right">
                      <CButton color="link" className="px-0" onClick={handleSubmit}>
                        Forgot password?
                      </CButton>
                    </CCol>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
