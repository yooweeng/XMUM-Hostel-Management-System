import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

function ProvideFeedback() {
  return (
    <>
      <NavBar/>
      <div className='d-flex'>
        <SideBar/>
        <section className='p-5 my-container col-10'>
          <h1>Provide feedbacks</h1>
          <form>
            <div class="form-group row mt-5">
              <label class="col-2 col-form-label">Subject/Issue:</label>
              <div class="col-10">
                <input type="text" class="form-control" placeholder='topic of discussion'/>
              </div>
            </div>
            <div class="form-group row mt-4">
              <label class="col-2 col-form-label">Feedback/Comments:</label>
              <div class="col-10">
                <textarea rows='8' class="form-control feedback-textbox" placeholder='eg. detail descriptions of the problems regarding hostel management system, bugs or fixs as well as any feedbacks regarding hostel booking workflow or any other enquiry'/>
              </div>
            </div>
            <div class='row mt-4'>
              <label class="form-label col-2">Additional attachments (if any):</label>
              <div class="col-10">
                <input class="form-control col-10" type="file" multiple/>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-12 mt-4">
                <button type="submit" class="btn btn-primary float-end">Submit</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default ProvideFeedback
