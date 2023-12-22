import React, { useState } from 'react'


import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

const initialValues = { courseName: '', code: "", }


export default function AddCourse() {
  const [state, setState] = useState(initialValues)
  
  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
 

  const handleSubmit = async (e) => {
    e.preventDefault()
   

    
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
                  <input className="gate" id="courseName" type="text" placeholder="Course Name!" name='courseName' onChange={handleChange}  /><label htmlFor="courseName">Name</label>
                  
                </span>

              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate" id="code" type="text" placeholder="Course Code!" name='code' onChange={handleChange}  /><label htmlFor="code">Code</label>
                 
                </span>

              </div>
              
              <div className="col-12 col-md-12 col-lg-12">
                <span className='span'>
                  {/* <textarea className="gate" rows={6} id="class" type="text" placeholder="Complete Detail!" /> */}
                  <label className='bg-warning p-2 my-2' role="button" htmlFor='img'>Details</label>
                  {/* <ReactQuill theme="snow" onChange={setValue} className="ReactQuill bg-white  text-black" id='detail' /> */}
                </span>
              </div>
            </div>
           

            
            <div className="row Box my-4">
              <div className="col-12 text-center">
               
                  <button type='submit' className='btn btn-warning'   >ADD COURSE</button>
               
              </div>

            </div>
          </form>
        </div >
      </div >



    </>
  )
}
