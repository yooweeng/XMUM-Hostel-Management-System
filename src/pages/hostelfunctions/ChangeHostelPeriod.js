import React from 'react'
import { Link } from 'react-router-dom'

function ChangeHostelPeriod() {
  return (
    <>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/hostelfunction">Hostel Functions</Link></li>
          <li className="breadcrumb-item active">Change Hostel Period</li>
        </ol>
      </nav>
      <h1>Change Hostel Period</h1>
      <form>
        <div className='row'>
          <label className="col-2 col-form-label">End Date:</label>
          <div className="col-10 ps-0">
            <input type="date"/>
          </div>
        </div>
      </form>
    </>
  )
}

export default ChangeHostelPeriod
