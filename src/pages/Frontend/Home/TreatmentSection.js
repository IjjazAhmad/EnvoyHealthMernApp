import React from 'react'
import { treatmentImg } from '../../../assets/images/treatmentCard'
export default function TreatmentSection() {
    return (
        <>
            <div className="treatment">
                <div className="container mt-5 my-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8 text-center">
                            <h4 >Explore Treatment Across Specialities</h4>
                            <p className='w-75 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="  col-6 ">
                            <div className="card p-4 mb-4 ">
                                <div className="imgDiv ">
                                    <img src={treatmentImg.box1} alt="...." />
                                </div>
                                <h4 className='fs-5'>Cardiologist</h4>
                                
                                <p className='d-none d-sm-block'>You got the job!!!! That is the total purpose of a resume - to help you land your dream job.</p>
                                <a href="" className='text-primary nav-link'>Try now<i className="fa-solid fa-arrow-right text-primary ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card p-4 mb-4">
                                <div className="imgDiv ">
                                    <img src={treatmentImg.box2} alt="...." />
                                </div>
                                <h4 className='fs-5'>Oncology</h4>
                                <p className='d-none d-sm-block'>A cover letter is usually the first thing your potential employer is going to read when looking at your resume.</p>
                                <a href="" className='text-primary nav-link'>Try now<i className="fa-solid fa-arrow-right text-primary ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card p-4 mb-4">
                                <div className="imgDiv ">
                                    <img src={treatmentImg.box3} alt="...." />
                                </div>
                                <h4 className='fs-5'>Orthopedic</h4>
                                <p className='d-none d-sm-block'>A cover letter is usually the first thing your potential employer is going to read when looking at your resume.</p>
                                <a href="" className='text-primary nav-link'>Try now <i className="fa-solid fa-arrow-right text-primary ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card p-4 mb-4">
                                <div className="imgDiv ">
                                    <img src={treatmentImg.box4} alt="...." />
                                </div>
                                <h4 className='fs-5'>Gynecologist</h4>
                                <p className='d-none d-sm-block'>You got the job!!!! That is the total purpose of a resume -to help you land your dream job. </p>
                                <a href="" className='text-primary nav-link'>Try now <i className="fa-solid fa-arrow-right text-primary ms-2"></i></a>
                            </div>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col my-5 text-center">
                            <button type="button" className="btn btn-secondary rounded-pill px-5 button1">SEE ALL</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
