import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProvideFeedback() {

  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');
  const [remarks, setRemarks] = useState('');

  function saveFeedback(){
    fetch('http://localhost:8080/api/v1/feedback',{
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
          {
            'subject' : subject,
            'comment' : comment,
            'remarks' : remarks
          }
      )
    })
    .then(res => res.json())
    .then(data => data)
  }

  return (
    <>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item active">Provide Feedbacks</li>
        </ol>
      </nav>
      <h1>Provide Feedbacks</h1>
      <form>
        <div className="form-group row mt-5">
          <label className="col-2 col-form-label">Subject/Issue:</label>
          <div className="col-10">
            <input type="text" className="form-control" placeholder='topic of discussion' value={subject} onChange={e => {setSubject(e.target.value)}}/>
          </div>
        </div>
        <div className="form-group row mt-4">
          <label className="col-2 col-form-label">Feedback/Comments:</label>
          <div className="col-10">
            <textarea rows='8' className="form-control feedback-textbox" 
            placeholder='eg. detail descriptions of the problems regarding hostel management system, bugs or fixs as well as any feedbacks regarding hostel booking workflow or any other enquiry'
            value={comment} onChange={e => {setComment(e.target.value);}}
            />
          </div>
        </div>
        <div className='row mt-4'>
          <label className="form-label col-2 mb-0">Special remarks (if applicable):</label>
          <div className="col-10">
            <input type="text" className="form-control" 
            placeholder='special remarks/requests'
            value={remarks} onChange={e => {setRemarks(e.target.value);}}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-12 mt-4">
              <button type="submit" className="btn btn-primary float-end" onClick={() => saveFeedback()}>Submit</button>
            </div>
          </div>
      </form>
    </>
  )
}

export default ProvideFeedback
