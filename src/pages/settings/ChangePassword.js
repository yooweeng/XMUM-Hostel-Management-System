import React from 'react'
import { Link } from 'react-router-dom'

function ChangePassword() {
  return (
    <div>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/settings">Settings</Link></li>
          <li className="breadcrumb-item active">Change Password</li>
        </ol>
      </nav>
      <h1 className='ps-4'>Change Password</h1>
      <form>
        <div className='card shadow ps-4 py-4 mt-4'>
            <h4>Password</h4>
            <div className="row col-6 mt-4">
                <label className="col-5 col-form-label">Old Password:</label>
                <div className="col-5">
                    <input type="password" className="form-control"/>
                </div>
            </div>
            <div className="row col-6 mt-4">
                <label className="col-5 col-form-label">New Password:</label>
                <div className="col-5">
                    <input type="password" className="form-control"/>
                </div>
            </div>
            <div className="row col-6 mt-4">
                <label className="col-5 col-form-label">Confirm New Password:</label>
                <div className="col-5">
                    <input type="password" className="form-control"/>
                </div>
            </div>
            <div className="form-group row">
              <div className="col-12 mt-5">
                <button type="submit" className="btn btn-primary">Update Password</button>
              </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword
