import React from 'react'
import { images } from '../../../assets/images'
export default function HeroSection() {
  return (
    <>
      <div className="heroSection">
        <div className="row">
          <div className="col-12">
            <div className="bg-1">
              <img src={images.bg1} className='bg bg-1' />
            </div>
            <div className="bg-2">
              <img src={images.bg2} className='bg bg-2' />
            </div>

          </div>
        </div>
        <div className="container text-white">
          <div className="row hero">
            <div className="col-12 col-md-12 col-lg-7">
              <div className="div-1">
                <h4 className='text-secondary mt-5'>Bridging Barriers, Connecting Care</h4>
                <h1>GLOBAL HEALTHCARE MARKETPLACE</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className="button">
                  <div>
                    <button type="button" className="btn btn-secondary rounded-pill mb-3 button1 ">DOWNLOAD APP</button>
                  </div>
                  <div>
                    <button type="button" className="btn btn-outline-primary text-white border-white button1">BOOK APPOINMENT</button>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-5">
              <div className="hero-r ">
                <img src={images.heroimg} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="card button1 mt-sm-5">
                <p>Fine what you need</p>
                <div className="d-flex">

                  <div className="inner-card w-75 d-flex">
                    <div className="search">
                      <label htmlFor="searchBox" className="form-label">Search doctors or procedures</label>
                      <input type="text" className="form-control text-body-tertiary" id="searchBox" aria-describedby="emailHelp" placeholder='E.g Oncology' />
                    </div>
                    <div className="location">
                      <p className='border-start border-black ps-3'>Location <br /> <span className='text-body-tertiary NewYork'>New York</span></p>
                    </div>
                  </div>
                  <div className="buttn">
                    <button type="button " className="btn btn-primary ">EXPLORE</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        </div>
      </div>

    </>
  )
}
