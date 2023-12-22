import React from 'react'
import { images } from '../../assets/images/index'
import { Link } from 'react-router-dom'
export default function Footer() {
    let date = new Date().getFullYear()
    return (
        <>
            <div className="container">
                <footer className="row flex-wrap-reverse pt-5 my-5">
                    <div className="col-12 col-md-6 col-gl-6 mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img src={images.logo} alt="logo" style={{ width: "10rem" }} />
                        </a>
                        <p className="text-body-secondary ">Connect with us on social media</p>
                        <Link to={"/"}><i className="fa-brands fa-facebook"></i></Link>
                        <Link to={"/"}><i className="fa-brands fa-twitter"></i></Link>
                        <Link to={"/"}><i className="fa-brands fa-instagram"></i></Link>
                        <Link to={"/"}><i className="fa-brands fa-linkedin-in"></i></Link>

                    </div>

                    <div className="d-flex flex-wrap justify-content-between col-12 col-md-6 col-gl-6">
                        <div className="col-12 col-md-2 col-gl-2 mb-3">
                            <h5>MENU</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Service</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>

                            </ul>
                        </div>

                        <div className="col-12 col-md-2 col-gl-2 mb-3">
                            <h5>CONTACT</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">(+92) 326-7090034</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">ijjazahmad705@gmail.com</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Faisalabad Pakistan</a></li>

                            </ul>
                        </div>

                        <div className="col-12 col-md-2 col-gl-2 mb-3">
                            <div className="float-lg-end">
                                <h5>SUPPORT</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </footer>
                <div className="row footer border-top">
                    <div className="col">
                        <p>Copyright © {date} EnvoyHealth. All rights reserved.</p>
                    </div>
                    <div className="col ">
                        <p className='float-end'>Privacy Policy | Terms of Use</p>
                    </div>
                </div>
            </div>
        </>
    )
}
