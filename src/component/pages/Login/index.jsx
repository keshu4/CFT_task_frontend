import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "primereact/resources/themes/lara-light-indigo/theme.css";      
import "primereact/resources/primereact.min.css";
import { userLoginAsync } from "../../../redux/asyncThunk/auth.asyncThunk";
import { Toast } from "primereact/toast";

function Login() {
  const navigate = useNavigate();
  const toast = useRef(null);
  const dispatch = useDispatch();
  const { userLoginStatus } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: (values) => {
      dispatch(userLoginAsync(values))
        .unwrap()
        .then((res) => {
          toast.current.show({
            severity: "success",
            summary: "Successfully Logged In",
          });
        })
        .catch((err) => {
          console.log(err);
          toast.current.show({
            severity: "error",
            summary: "Oops!",
            detail: err.message,
          });
        });
      //console.log(values);
    },
  });

  return (
    <>
      <Toast ref={toast} />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form style = {{  border: "solid", padding : "30px" }}onSubmit={formik.handleSubmit}>

        <h2 style = {{ textAlign:"center" }}>Login</h2>
        <div >
          <label style = {{padding : "10px"}} htmlFor="email">
            Email :      
          </label> &nbsp; &nbsp; &nbsp;
          <input
            className="mt-4"
              name="Email"
            type="Email"
            placeholder="Enter your Email"
            onChange={formik.handleChange}
            value={formik.values.Email}
          />
          {formik.errors.Email ? (
            <div style={{ color: "red" }}>{formik.errors.Email}</div>
          ) : null}
        </div>
            <br/>
        <div >
          <label style = {{padding : "10px"}} htmlFor="Password">
            Password :
          </label>
          <input
            name="Password"
            type="password"
            value={formik.values.Password}
            className="mt-4"
            placeholder="Enter your Password"
            onChange={formik.handleChange}
          />
          {formik.errors.Password ? (
            <div style={{ color: "red" }}>{formik.errors.Password}</div>
          ) : null}
        </div>
        <br/>
        <div style = {{textAlign:"center"}}>
        <button
          loading={userLoginStatus === 'loading'}
          type="submit"
          label="Login"
          style={{height: '30px', width : '100px'}}
    color="success"
    size="lg"
        >
            Log In
        </button>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div style = {{textAlign : "right"}}><Link to="/">Register</Link></div>
      </form>
    </div>
    </>
  );
}

export default Login;