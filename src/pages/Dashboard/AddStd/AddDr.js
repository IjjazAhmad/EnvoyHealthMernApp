import axios from 'axios'
import React, { useState } from 'react'

const initialValues = {
  name: "",
  phone: "",
  mail: "",
  speciallization: "",
  education: "",
  fee: ""
}


export default function AddDr() {

  const [state, setState] = useState(initialValues)



  // ================= 


  const handleChange = e => setState(s => ({
    ...s, [e.target.name]: e.target.value
  }))
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('state', state)
    axios
      .post("https://envoy-health-api.vercel.app/doctor/addDoctor", state)
      .then((res) => {
        console.log("res.data:", res.data);
        alert("User successfully added!");
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });

  }
  return (
    <>


      <div className="addproduct">

        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Add Course :</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row Box my-4">
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate" id="stdName" type="text" placeholder="Name!" name='name' onChange={handleChange} /><label htmlFor="stdName">Name</label>

                </span>

              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate" id="phone" type="text" placeholder="Enter Phone Number!" name='phone' onChange={handleChange} /><label htmlFor="phone">Phone</label>
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate" id="phone" type="email" placeholder="Enter Gmail" name='mail' onChange={handleChange} /><label htmlFor="phone">Enter Gmail</label>
                </span>
              </div>

              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate" id="phone" type="text" placeholder="Speciallization" name='speciallization' onChange={handleChange} /><label htmlFor="phone">Speciallization</label>
                </span>
              </div>

              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate" id="phone" type="text" placeholder="Education" name='education' onChange={handleChange} /><label htmlFor="phone">Education</label>
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate" id="phone" type="text" placeholder="Fee" name='fee' onChange={handleChange} /><label htmlFor="phone">Fee</label>
                </span>
              </div>


            </div>




            <div className="row Box my-4">
              <div className="col-12 text-center">

                <button type='submit' className='btn btn-warning'   >ADD Doctore</button>

              </div>

            </div>
          </form>
        </div >
      </div >



    </>
  )
}
