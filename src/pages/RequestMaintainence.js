import React from 'react'
import { Link } from 'react-router-dom'

function RequestMaintainence() {
  return (
    <>
      <nav>
        <ol class="breadcrumb font-breadcrumb">
          <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li class="breadcrumb-item active">Request Maintainence</li>
        </ol>
      </nav>
      <h1>Request Maintainence</h1>
      <form>
        <div className='row form-group mt-4'>
          <div className="row col-4">
            <label className="col-4 col-form-label">Campus ID:</label>
            <div className="col-8">
              <input type="text" className="form-control" placeholder='SWE1904867' disabled/>
            </div>
          </div>
          <div className="row col-4 offset-md-1">
            <label className="col-5 col-form-label">Student Name:</label>
            <div className="col-7">
              <input type="text" className="form-control" placeholder='Ng Yoo Wee' disabled/>
            </div>
          </div>
        </div>
        <div className='row form-group mt-4'>
          <div className="row col-4">
            <label className="col-4 col-form-label">Email:</label>
            <div className="col-8">
              <input type="text" className="form-control" placeholder='SWE1904867@xmu.edu.my' disabled/>
            </div>
          </div>
          <div className="row col-4 offset-md-1">
            <label className="col-5 col-form-label">Phone:</label>
            <div className="col-7">
              <input type="text" className="form-control" placeholder='012-3456789' disabled/>
            </div>
          </div>
        </div>
        <div className='row form-group mt-4'>
          <div className="row col-4">
            <label className="col-4 col-form-label">Category:</label>
            <div className="col-8">
              <select className="form-select">
                <option selected></option>
                <option value="1">Air Conditioner</option>
                <option value="2">Fitting and Plumbing</option>
                <option value="3">Furniture</option>
                <option value="4">General Electrical</option>
                <option value="5">Pest Control and Cleaning</option>
                <option value="6">Others</option>
              </select>
            </div>
          </div>
          <div className="row col-4 offset-md-1">
            <label className="col-6 col-form-label">Recurring Problem:</label>
            <div className="col-6">
              <select className="form-select">
                <option value="1">Yes</option>
                <option value="2" selected>No</option>
              </select>
            </div>
          </div>
        </div>
        <div className='row form-group mt-4'>
          <div className="row col-4">
            <label className="col-4 col-form-label">Room No:</label>
            <div className="col-8">
              <input type="text" className="form-control" placeholder='D1-123' disabled/>
            </div>
          </div>
        </div>
        <div className="form-group row mt-4">
          <label className="col-2 col-form-label">Description:</label>
          <div className="col-10">
            <textarea rows='8' className="form-control feedback-textbox" placeholder='Detailed description on the problem / any additional notes for the service personnel. Up to 100 characters allowed.'/>
          </div>
        </div>
        <div className='row mt-4'>
          <label className="form-label col-2 mb-0">Attachments:</label>
          <div className="col-10 mb-0 pb-0">
            <input className="form-control" type="file" multiple/>
          </div>
          <div className="row col-10 offset-md-2 form-text mt-0 pt-0">
            File types allowed: pdf, doc, docx, jpg, png file. Attachment size is limited to 20MB.
          </div>
        </div>
        <div className="form-group row">
          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-primary float-end">Submit</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default RequestMaintainence
