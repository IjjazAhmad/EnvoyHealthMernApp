import React, { useState } from 'react'
import { images } from '../../../assets/images/index'
import { Link } from 'react-router-dom'
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const formDataInitialState = {
  email: "",
  password: "",
};

export default function Register() {
  const [formData, setFormData] = useState(formDataInitialState);
  const [isRegister, setIsRegister] = useState(false);
  const [tokenValue, setTokenValue] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    // console.log('formData', formData)
    // return
    axios
      .post("https://envoy-health-api.vercel.app/auth/register", formData)
      .then((res) => {
        console.log("res.data : ", res.data);
        alert("User successfuly registered");
        setIsRegister(true);
        setFormData(formDataInitialState);
      })
      .catch((error) => {
        console.log("Error : ", error.message);
      });
  };



  return (
    <>
    <div className="container mt-5">
        <div className="row my-3">
          <div className="col">
            <div className="d-flex justify-content-center">
              <img src={images.logo} alt="logo" style={{ width: "10rem" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 contactForm">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="box bg-white button1 p-5 rounded">
              <div className="text-center">
                <h3>Register</h3>
                <p style={{ fontSize: "14px" }}>Welcome </p>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={handleChange} type="email" className="form-control rounded-pill text-secondary" id="email" placeholder="Enter email" name='email'/>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">

                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" onChange={handleChange} className="form-control rounded-pill text-secondary" id="password" placeholder="Enter password" name='password' />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="col-12 col-md-8 col-lg-8">
                  <Link  className="btn btn-primary text-white rounded-pill button1 w-100" onClick={handleRegister}>REGISTER</Link>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <p>Already Have An Account? <Link to={"/auth/login"}>Login</Link></p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
