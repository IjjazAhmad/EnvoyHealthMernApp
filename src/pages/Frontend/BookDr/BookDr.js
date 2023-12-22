import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';
import { DocImg } from '../../../assets/images/doctorCard'
import { images } from '../../../assets/images/index'
import axios from "axios";
// --------------- react calender 


export default function BookDr() {
  const [isConfirm, setIsConfirm] = useState(true)
  const [value, onChange] = useState();
  const [selectedTime, setSelectedTime] = useState(''); // State to store the selected value

  // Function to handle the change in the select element
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTime(selectedValue);
  };

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [reminderButtonIndex, setReminderButtonIndex] = useState(0);

  const handleActiveTime = (event) => {
    // Iterate over all of the buttons.
    const buttonElements = document.querySelectorAll('.slot');
    for (const buttonElement of buttonElements) {
      // Check if the `active` class is present.
      if (buttonElement.classList.contains('active')) {
        // Remove the `active` class.
        buttonElement.classList.remove('active');
      }
    }

    // Add the `active` class to the clicked button element.
    const clickedButtonElement = event.target;
    clickedButtonElement.classList.add('active');

    // Update the `activeClass` state variable to the active button index.
    setActiveButtonIndex(clickedButtonElement.dataset.index);
  };
  const handleActiveReminder = (event) => {
    // Iterate over all of the buttons.
    const buttonElements = document.querySelectorAll('.reminder');
    for (const buttonElement of buttonElements) {
      // Check if the `active` class is present.
      if (buttonElement.classList.contains('active')) {
        // Remove the `active` class.
        buttonElement.classList.remove('active');
      }
    }

    // Add the `active` class to the clicked button element.
    const clickedButtonElement = event.target;
    clickedButtonElement.classList.add('active');

    // Update the `activeClass` state variable to the active button index.
    setReminderButtonIndex(clickedButtonElement.dataset.index);
  };


  // ------------------------------- 
  const handleBooking = () => {
    setIsConfirm(false);
    let date = value;
    // Assuming the server expects a YYYY-MM-DD format
const formattedDate = date.toISOString().split('T')[0];

    console.log("Selected date:", date);
    console.log("Selected time:", selectedTime);
  
    let drId = "123";
    const formData = { formattedDate, selectedTime, drId };
    
    console.log("Form data:", formData);
  
    axios.post("http://localhost:7000/appointment/addApoint", formData)
      .then((response) => {
        console.log("Appointment added successfully!!");
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  
  

  return (
    <>
      <div className="doctor mt-lg-5">


        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center">
              <div className="div">
                <div className="img">
                  <img src={DocImg.docter4} alt="Doctor image." />
                </div>
                <div className="imgDetail m-4">
                  <h5>Camilla Wasif <span className='fs-6 ms-3'> ⭐ 4.9(250)</span></h5>
                  <p className='fs-6' >Oncologist <br /><span className='text-body-tertiary '><i className="fa-solid fa-location-dot"></i> Henderson, Colorado</span> <br /><span className='text-danger fw-bold '>Consultancy Fee : $150</span></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className='float-lg-end mb-4'>
                <div>
                  <Calendar onChange={onChange} value={value} className="Calendar" />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="timeSlot mt-3">
                      <div className="head">
                        <p className='bg-secondary text-white'>Available Time ToDay</p>
                      </div>
                      {
                        isConfirm ?
                          <div className="body py-3">
                            <div className="row">
                              <div className="col-12 text-center d-flex flex-wrap" style={{ maxWidth: '373px' }}>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  onChange={handleChange}
                                  value={selectedTime} // This is important for controlled components in React
                                >
                                  <option disabled>Select Time</option>
                                  <option value="10">10 PM</option>
                                  <option value="11">11 PM</option>
                                  <option value="12">12 PM</option>
                                </select>
                              </div>
                            </div>
                            {/* <div className="row">
                              <div className="col">
                            
                                <select class="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div> */}
                            <div className="row">
                              <div className="col-12 text-center d-flex flex-wrap" style={{ maxWidth: '373px' }}>

                              </div>
                            </div>
                            <div className="row my-2">
                              <div className="col text-center">
                                <button type="button" className="btn btn-primary text-white rounded-pill px-5 " onClick={handleBooking} >CONFIRM</button>
                              </div>
                            </div>
                          </div>
                          :
                          <>
                            <div className="row Box">
                              <div className="col">
                                <div className="tickImg">
                                  <img src={images.submit} alt="" />
                                </div>
                                <h3>Booking confirmed</h3>
                                <div className="d-flex justify-content-center ">
                                  <p className=' w-75'>You're booked with Erik Sanders. An invitation has been emailed to you.</p>
                                </div>
                              </div>
                            </div>

                          </>

                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="row ">
              <div className="col">
                <div className="label">
                  <span className=' text-white text fs-5'>Professional Information</span>
                </div>
                <div className="list mt-3">
                  <ul>
                    <li>5 Years of experience</li>
                    <li>Spoken Language: English, Hindi, Urdu</li>
                    <li>Registration Number : 2587413</li>
                  </ul>
                </div>
                <div className="label mt-5">
                  <span className=' text-white text fs-5'>Educational Qualification</span>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <ul>
                  <li className='text-secondary fw-bold '>M.D</li>
                  <li>2019</li>
                  <li>Oncology</li>
                  <li>Delhi Medical Institute</li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <ul>
                  <li className='text-secondary fw-bold '>M.Phil</li>
                  <li>2017</li>
                  <li>Oncology</li>
                  <li>Delhi Medical Institute</li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <ul>
                  <li className='text-secondary fw-bold '>M.B.B.S</li>
                  <li>2014</li>
                  <li>Oncology</li>
                  <li>Delhi Medical Institute</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="label mt-5 mb-3">
                  <span className=' text-white text fs-5'>Noteworthy About Her</span>
                </div>
              </div>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="row">
              <div className="col">
                <div className="label mt-5 mb-5 ">
                  <span className=' text-white text fs-5'>Speciality</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-4 col-lg-3 ">
                  <p className='button1 p-3 rounded '>Speciality-1 name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-3 ">
                  <p className='button1 p-3 rounded '>Speciality-1 name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-3 ">
                  <p className='button1 p-3 rounded  '>Speciality-1 name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <p className='button1 p-3 rounded '>Speciality-1 name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
