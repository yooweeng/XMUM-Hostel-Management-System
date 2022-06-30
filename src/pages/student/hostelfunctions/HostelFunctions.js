import React from 'react'
import { Link } from 'react-router-dom'

function HostelFunctions() {
  return (
    <>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item active">Hostel Functions</li>
        </ol>
      </nav>
      <h1>Hostel Functions</h1>
      <div className="row mt-5">
        <div className="col-sm-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Register / apply for hostel</h5>
              <p className="card-text mt-4">
                Student can register themselves and apply for hostel. 
                They can select their desired room type and hostel block (Block D / Block LY). 
                The request for hostel will undergo approval after the application. 
                Student will be notified once the application is approved.
              </p>
              <Link to="/hostelfunction/hostelapplication" className="btn btn-primary float-end">Apply</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Change hostel period and duration</h5>
              <p className="card-text mt-4">
                Student can change their hostel period and duration if they are currently checked in for a selected hostel room.
                The hostel book duration will be changed to the student request duration and will undergo approval checking, before notifying the student.
              </p>
              <Link to="/hostelfunction/changehostelperiod" className="btn btn-primary float-end">Change</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Request for room checkout</h5>
              <p className="card-text mt-4">
                Student can request for checkout by filling the form provided. After the submission of the form with accurate information.
                Student will be checked out and the post checked out workflow guidance will be send to the student.
              </p>
              <Link to="/hostelfunction/requestroomcheckout" className="btn btn-primary float-end">Checkout</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Request for room change</h5>
              <p className="card-text mt-4">
                Student can request to change their room or hostel type (Block D/ Block LY) by filling the form with relevant information.
                Student will need to provide certain proves for the validation checking from the department site before approval.
              </p>
              <Link to="/hostelfunction/requestchangeroom" className="btn btn-primary float-end">Request</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HostelFunctions
