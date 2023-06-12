import React, { useEffect, useState } from "react";
import Users from "../data-source/users.json";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [user, setUser] = useState()
  const navigate = useNavigate();
  console.log({ email, password });
useEffect(()=>{
  localStorage.setItem('email', JSON.stringify(email));
  localStorage.setItem('password', JSON.stringify(password))
  console.log({email,password});
}, [email, password])

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    // if (!password.match(/^[a-zA-Z]{8,22}$/)) {
    //   formIsValid = false;
    //   setpasswordError(
    //     "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
    //   );
    //   return false;
    // } else {
    //   setpasswordError("");
    //   formIsValid = true;
    // }

    return formIsValid;
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleData = () => {
    console.log({ email, password });
    console.log(Users);
    const user = Users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      console.log("login success");
      alert("Login Success");
      <div>{user.name} is loggged in</div>
      handleNavigation();
      
    } else {
      alert("Login Failed")
      console.log("login Failed");
    }
  };
const handleNavigation = () =>{
  navigate('/welcome', { replace: true })
}
 
  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
    handleData();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={handleEmail}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={handlePassword}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button
                onClick={handleData}
                onChange={handleNavigation}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Login;

