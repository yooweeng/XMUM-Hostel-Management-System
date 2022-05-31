import React from 'react'
import { Link } from 'react-router-dom'

function ProvideFeedback() {
  return (
    <>
      <nav>
        <ol class="breadcrumb font-breadcrumb">
          <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li class="breadcrumb-item active">Provide Feedbacks</li>
        </ol>
      </nav>
      <h1>Provide Feedbacks</h1>
      <form>
        <div className="form-group row mt-5">
          <label className="col-2 col-form-label">Subject/Issue:</label>
          <div className="col-10">
            <input type="text" className="form-control" placeholder='topic of discussion'/>
          </div>
        </div>
        <div className="form-group row mt-4">
          <label className="col-2 col-form-label">Feedback/Comments:</label>
          <div className="col-10">
            <textarea rows='8' className="form-control feedback-textbox" placeholder='eg. detail descriptions of the problems regarding hostel management system, bugs or fixs as well as any feedbacks regarding hostel booking workflow or any other enquiry'/>
          </div>
        </div>
        <div className='row mt-4'>
          <label className="form-label col-2 mb-0">Additional attachments (if any):</label>
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

export default ProvideFeedback
