import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../assets/images/index'

export default function Contact() {
  const [messageResponse, setMessageResponse] = useState(true)

  const handleMessage = () => {
    setMessageResponse(false)
    setTimeout(() => {
      setMessageResponse(true)
    }, 6500)
  }
  return (
    <div className='contact'>
      <div className="container-fluid py-5 contactForm">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="box bg-white button1 p-5">
              {
                messageResponse ?
                  <>

                    <div className="text-center">
                      <h3>Contact Us</h3>
                      <p style={{ fontSize: "14px" }}>Fill out the form and send us a secure message. We will respond as soon as possible.</p>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" className="form-control" id="name" placeholder="Enter name" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label">Subject</label>
                          <input type="text" className="form-control" id="subject" placeholder="Type your subject" />
                        </div>
                      </div>

                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label">Message</label>
                          <textarea type="text" rows={"5"} className="form-control" id="message" placeholder="Type message" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label " htmlFor="flexCheckDefault" style={{ fontSize: "14px" }}>
                            This site is protected by reCAPTCHA and the Google <Link>Privacy Policy</Link> and <Link>Terms of Service</Link> apply.
                          </label>
                        </div>
                      </div>

                      <div className="col-12 col-md-12 col-lg-4 text-center">
                        <button onClick={handleMessage} className="btn btn-primary text-white rounded-pill button1">SEND MESSAGE</button>
                      </div>
                    </div>
                  </>
                  :
                  <>
                    <div className="row Box">
                      <div className="col ">
                        <div className="tickImg">
                          <img src={images.submit} alt="" />
                        </div>
                        <h3>Thanks for sending us your message.</h3>
                        <div className="d-flex justify-content-center w-100">
                        <p className=' w-75'>We appreciate you contacting us. A member of our team will get back to you within 24 hours. Have a great day!</p>
                        </div>
                      </div>
                    </div>

                  </>

              }
            </div>
          </div>
        </div>
      </div>

      <div className="treatment">
        <div className="container mt-5 my-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-8 text-center">
              <h4 >We’d love to hear from you</h4>
              <p className='w-75 '>Supporting text</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card p-4 mb-4">
                <div className="imgDiv ">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h4 className='fs-5'>Visit Us</h4>
                <p>visit our office HQ</p>
                <p className='text-primary nav-link'>4118 Providence Lane <br /> Alhambra, CA 91801</p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card p-4 mb-4">
                <div className="imgDiv ">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <h4 className='fs-5'>Mail us</h4>
                <p>Speak with our team</p>
                <p className='text-primary nav-link'>Support@hwmresume.com <br />Sale@hwmresume.com</p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card p-4 mb-4">
                <div className="imgDiv ">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <h4 className='fs-5'>Call Us</h4>
                <p>Mon-Fri from 8am to 5pm</p>
                <p className='text-primary nav-link'>(+92) 326-7876344 <br />(+92) 326-7876344 </p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}
