import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../helper/Context';

function RequestMaintainence() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);
  const [activeUser, setActiveUser] = useState();
  const [activeUserHostel, setActiveUserHostel] = useState();

  const [category, setCategory] = useState('General');
  const [recurringProblem, setRecurringProblem] = useState('no');
  const [description, setDescription] = useState('');
  const [remarks, setRemarks] = useState('');

  useEffect(() => {
    loginDetails.token = JSON.parse(sessionStorage.getItem("token"));
    let tokenType = loginDetails.token.slice(0,3);
    if(tokenType == "stu"){
      fetch('http://localhost:8080/api/v1/student')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].student_id){
                  setActiveUser(data[i])
                }
              }
            });
      fetch('http://localhost:8080/api/v1/hostel')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].user_id){
                  setActiveUserHostel(data[i])
                }
              }
            });
    }
    else if(tokenType == "adm"){
      fetch('http://localhost:8080/api/v1/admin')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].adminId){
                  setActiveUser(data[i])
                }
              }
            })
    }
  }, [])

  function sendMaintenanceRequest(){
    let dateNow = new Date(Date.now());
    let date = dateNow.getDate().toString() + '-' + 
              (dateNow.getMonth()+1).toString() + '-' + 
              dateNow.getFullYear().toString();

    fetch('http://localhost:8080/api/v1/maintenancerequest',{
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
          {
            'campusId' : activeUser.student_id,
            'studentName' : activeUser.fullname,
            'email' : activeUser.email,
            'phone' : activeUser.phone_no,
            'category' : category,
            'recurringProblem' : recurringProblem,
            'description' : description,
            'roomNo' : activeUserHostel.room_id,
            'remarks' : remarks,
            'status' : 'Pending',
            'date' : date
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
          <li className="breadcrumb-item active">Request Maintenance</li>
        </ol>
      </nav>
      <h1>Request Maintenance</h1>
      <form>
        <div className='row form-group mt-4'>
          <div className="row col-4">
            <label className="col-4 col-form-label">Campus ID:</label>
            <div className="col-8">
              <input type="text" className="form-control" 
                placeholder=
                {(!activeUser)
                  ?
                  'na'
                  :
                  activeUser.student_id
                }
               disabled/>
            </div>
          </div>
          <div className="row col-4 offset-md-1">
            <label className="col-5 col-form-label">Student Name:</label>
            <div className="col-7">
              <input type="text" className="form-control" 
              placeholder=
              {(!activeUser)
                ?
                'na'
                :
                activeUser.fullname
              }
               disabled/>
            </div>
          </div>
        </div>
        <div className='row form-group mt-4'>
          <div className="row col-4">
            <label className="col-4 col-form-label">Email:</label>
            <div className="col-8">
              <input type="text" className="form-control" 
              placeholder=
              {(!activeUser)
                ?
                'na'
                :
                activeUser.email
              }
              disabled/>
            </div>
          </div>
          <div className="row col-4 offset-md-1">
            <label className="col-5 col-form-label">Phone:</label>
            <div className="col-7">
              <input type="text" className="form-control" 
              placeholder=
              {(!activeUser)
                ?
                'na'
                :
                activeUser.phone_no
              }
               disabled/>
            </div>
          </div>
        </div>
        <div className='row form-group mt-4'>
          <div className="row col-4">
            <label className="col-4 col-form-label">Category:</label>
            <div className="col-8">
              <select className="form-select" value={category} onChange={e => {setCategory(e.target.value);}}>
                <option value="General"></option>
                <option value="Air Conditioner">Air Conditioner</option>
                <option value="Fitting and Plumbing">Fitting and Plumbing</option>
                <option value="Furniture">Furniture</option>
                <option value="General Electrical">General Electrical</option>
                <option value="Pest Control and Cleaning">Pest Control and Cleaning</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div className="row col-4 offset-md-1">
            <label className="col-6 col-form-label">Recurring Problem:</label>
            <div className="col-6">
              <select className="form-select" value={recurringProblem} onChange={e => {setRecurringProblem(e.target.value);}}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>
        <div className='row form-group mt-4'>
          <div className="row col-4">
            <label className="col-4 col-form-label">Room No:</label>
            <div className="col-8">
              <input type="text" className="form-control" 
              placeholder=
              {(!activeUserHostel)
                ?
                'na'
                :
                activeUserHostel.room_id
              }
               disabled/>
            </div>
          </div>
        </div>
        <div className="form-group row mt-4">
          <label className="col-2 col-form-label">Description:</label>
          <div className="col-10">
            <textarea rows='8' className="form-control feedback-textbox" 
            placeholder='Detailed description on the problem / any additional notes for the service personnel. Up to 100 characters allowed.'
            value={description} onChange={e => {setDescription(e.target.value);}}/>
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
            <button type="submit" className="btn btn-primary float-end"
             onClick={() => {
              sendMaintenanceRequest();
              alert('Maintenance request received. Request will be recorded and proceed with appropriate workflow.');
              }}>Submit</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default RequestMaintainence
