import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Toast } from "primereact/toast";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAsync } from "../../../redux/asyncThunk/register.asyncThunk";

function SignUp() {
  const navigate = useNavigate();
  const toast = useRef(null);
  const dispatch = useDispatch();
  const { userRegisterStatus } = useSelector((state) => state.register);

  const formik = useFormik({
    initialValues: {
        FullName : "",
        FatherName : "",
        Email : "",
        PhoneNumber : "",
        Password : ""
    },
    onSubmit: (values) => {
      dispatch(userRegisterAsync(values))
        .unwrap()
        .then((res) => {
          navigate("/login");
          toast.current.show({
            severity: "success",
            summary: "Registration Succesful",
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
    },
    validate: values => {
        let errors = {};
        if (!values.Email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
            values.Email
          )
        ) {
          errors.Email = 'Invalid email address';
        }
        return errors;
      },
  });
  return (
    <div>
      <Toast ref={toast} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form
          style={{ border: "solid", padding: "30px" }}
          onSubmit={formik.handleSubmit}
        >
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          <div>
            <label style={{ padding: "10px" }} htmlFor="FullName">
              Full Name :
            </label>
            <input
              className="mt-4"
              id="FullName"
              name="FullName"
              type="text"
              placeholder="Enter your FullName"
              onChange={formik.handleChange}
              value={formik.values.FullName}
            />
            {formik.errors.FullName ? (
              <div style={{ color: "red" }}>{formik.errors.FullName}</div>
            ) : null}
          </div>
          <br />
          <div>
            <label style={{ padding: "10px" }} htmlFor="FatherName">
              Father Name :
            </label>
            <input
              className="mt-4"
              id="FatherName"
              name="FatherName"
              type="text"
              placeholder="Enter your Username"
              onChange={formik.handleChange}
              value={formik.values.FatherName}
            />
            {formik.errors.FatherName ? (
              <div style={{ color: "red" }}>{formik.errors.FatherName}</div>
            ) : null}
          </div>
          <br />
          <div>
            <label style={{ padding: "10px" }} htmlFor="email">
              Email :
            </label>{" "}
            &nbsp; &nbsp; &nbsp;
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
          <br />
          <div>
            <label style={{ padding: "10px" }} htmlFor="username">
               Phone Number :
            </label>
            <input
              className="mt-4"
              id="PhoneNumber"
              name="PhoneNumber"
              type="text"
              placeholder="Enter your PhoneNumber"
              onChange={formik.handleChange}
              value={formik.values.PhoneNumber}
            />
            {formik.errors.PhoneNumber ? (
              <div style={{ color: "red" }}>{formik.errors.PhoneNumber}</div>
            ) : null}
          </div>
          <br />
          <div>
            <label style={{ padding: "10px" }} htmlFor="Password">
              Password :
            </label>
            <input
              name="Password"
              type="Password"
              value={formik.values.Password}
              className="mt-4"
              placeholder="Enter your Password"
              onChange={formik.handleChange}
            />
            {formik.errors.Password ? (
              <div style={{ color: "red" }}>{formik.errors.Password}</div>
            ) : null}
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <button
              loading={userRegisterStatus === 'loading'}
              type="submit"
              label="SignUp"
              
              style={{height: '30px', width : '100px'}}
    color="success"
    size="lg"
            > Sign Up
            </button>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ textAlign: "right" }}>
            <Link to="/login">Already a Member? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;