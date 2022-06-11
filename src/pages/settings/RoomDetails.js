import React from 'react'
import { Link } from 'react-router-dom'

function RoomDetails() {
  return (
    <div>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/settings">Settings</Link></li>
          <li className="breadcrumb-item active">Room Details</li>
        </ol>
      </nav>
      <h1 className='ps-4'>Room Details</h1>
      <form>
        <div className='card shadow ps-4 py-4 mt-4'>
          <h4>Details</h4>
          <div className="row col-5 mt-4">
            <label className="col-4 col-form-label">Room Status:</label>
            <div className="col-5">
                <input type="text" className="form-control" placeholder='SWE1904867' disabled/>
            </div>
          </div>
          <div className="row col-5 mt-4">
            <label className="col-4 col-form-label">Block Number:</label>
            <div className="col-6">
                <input type="text" className="form-control" placeholder='SWE1904867' disabled/>
            </div>
          </div>
          <div className="row col-5 mt-4">
            <label className="col-4 col-form-label">Room Type:</label>
            <div className="col-6">
                <input type="text" className="form-control" placeholder='SWE1904867' disabled/>
            </div>
          </div>
          <div className="row col-5 mt-4">
            <label className="col-4 col-form-label">Room Number:</label>
            <div className="col-6">
                <input type="text" className="form-control" placeholder='SWE1904867' disabled/>
            </div>
          </div>
          <div className="form-group row">
              <div className="col-12 mt-5">
                <Link to='/settings'>
                    <button type="submit" className="btn btn-primary">Back</button>
                </Link>
              </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RoomDetails
