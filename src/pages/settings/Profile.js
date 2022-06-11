import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/settings">Settings</Link></li>
          <li className="breadcrumb-item active">Profile</li>
        </ol>
      </nav>
      <h1 className='ps-4'>Profile</h1>
      <form>
        <div className='card shadow ps-4 py-4 mt-4'>
          <div className='row form-group'>
            <h4>User Details</h4>
            <div className="row col-4 mt-3">
              <label className="col-4 col-form-label">Student ID:</label>
              <div className="col-8">
                <input type="text" className="form-control" placeholder='SWE1904867' disabled/>
              </div>
            </div>
            <div className="row col-4 offset-md-1 mt-3">
              <label className="col-5 col-form-label">Student Name:</label>
              <div className="col-7">
                <input type="text" className="form-control" placeholder='Ng Yoo Wee' disabled/>
              </div>
            </div>
          </div>
          <div className='row form-group mt-4'>
            <div className="row col-4">
              <label className="col-4 col-form-label">Nationality:</label>
              <div className="col-8">
                <input type="text" className="form-control" placeholder='012-3456789' disabled/>
              </div>
            </div>
            <div className="row col-5  offset-md-1 ">
              <label className="col-6 col-form-label">NRIC/Passport Number:</label>
              <div className="col-5">
                <input type="text" className="form-control" placeholder='012345-01-1234' disabled/>
              </div>
            </div>
          </div>
          <h4 className='mt-5'>Display Name</h4>
          <div className='row form-group mt-3'>
            <div className="row col-4">
              <label className="col-4 col-form-label">First Name:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="row col-4 offset-md-1">
              <label className="col-5 col-form-label">Last Name:</label>
              <div className="col-7">
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="form-group row">
              <div className="col-12 mt-5">
                <button type="submit" className="btn btn-primary">Update Profile</button>
              </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Profile
