import React from 'react'
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'

function HostelFunctions() {
  return (
    <>
      <NavBar/>
      <div className='d-flex'>
        <SideBar/>
        <section className='p-5 my-container col-10'>
          <h1>Hostel Functions</h1>
          <div class="row mt-5">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Register / apply for hostel</h5>
                  <p class="card-text mt-4">
                    Student can register themselves and apply for hostel. 
                    They can select their desired room type and hostel block (Block D / Block LY). 
                    The request for hostel will undergo approval after the application. 
                    Student will be notified once the application is approved.
                  </p>
                  <a href="/hostelfunction/hostelapplication" class="btn btn-primary float-end">Apply</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Change hostel period and duration</h5>
                  <p class="card-text mt-4">
                    Student can change their hostel period and duration if they are currently checked in for a selected hostel room.
                    The hostel book duration will be changed to the student request duration and will undergo approval checking, before notifying the student.
                  </p>
                  <a href="/hostelfunction/changehostelperiod" class="btn btn-primary float-end">Change</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Request for room checkout</h5>
                  <p class="card-text mt-4">
                    Student can request for checkout by filling the form provided. After the submission of the form with accurate information.
                    Student will be checked out and the post checked out workflow guidance will be send to the student.
                  </p>
                  <a href="/hostelfunction/requestroomcheckout" class="btn btn-primary float-end">Checkout</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Request for change room</h5>
                  <p class="card-text mt-4">
                    Student can request to change their room or hostel type (Block D/ Block LY) by filling the form with relevant information.
                    Student will need to provide certain proves for the validation checking from the department site before approval.
                  </p>
                  <a href="/hostelfunction/requestchangeroom" class="btn btn-primary float-end">Request</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HostelFunctions
