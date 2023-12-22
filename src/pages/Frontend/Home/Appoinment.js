import React from 'react'
import { appoinmentImg } from '../../../assets/images/appointment'
export default function Appoinment() {
    return (
        <>
            <div className="appoinmentSection my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6 d-none d-sm-block">
                            <div className="sideImg">
                                <img src={appoinmentImg.sideImg} alt="..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 mt-4">
                            <div className="sideContent">


                                <h4>Why choose us?</h4>
                                <p className='mb-lg-5 pb-lg-5'>Andrea has been a successful resumé and tender writer since 1998 and has helped thousands of people find employment.</p>
                                <div className="Box mb-2">
                                    <div className="row justify-content-center ">
                                        <div className="col-2">
                                            <div className="imgDiv imgDiv1">
                                                <img src={appoinmentImg.img1} alt="..." />
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <p><span className='text-black fs-4'>24/7 Medical Consultation</span> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="Box mb-2">
                                    <div className="row justify-content-center ">
                                        <div className="col-2">
                                            <div className="imgDiv imgDiv2">
                                                <img src={appoinmentImg.img2} alt="..." />
                                            </div>
                                        </div>
                                        <div className=" col-9">
                                            <p><span className='text-black fs-4'>Ongoing Healthcare help & Support</span> <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj gjska consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="Box mb-2">
                                    <div className="row justify-content-center ">
                                        <div className="col-2">
                                            <div className="imgDiv imgDiv3">
                                                <img src={appoinmentImg.img3} alt="..." />
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <p><span className='text-black fs-4'>Experts Doctors Of The Industry</span> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-5 text-center">
                                        <button type="button" className="btn btn-secondary rounded-pill me-4 px-5 button1">BOOK APPOINMENT TODAY</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
