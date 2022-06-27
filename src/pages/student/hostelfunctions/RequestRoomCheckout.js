import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../../helper/Context';

function RequestRoomCheckout() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);
  const [activeUser, setActiveUser] = useState();
  const [activeUserHostel, setActiveUserHostel] = useState();

  const [isAgreeTnC,setIsAgreeTnC] = useState(false);

  const [parentName, setParentName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [checkoutTime, setCheckoutTime] = useState('');
  const [reason, setReason] = useState('');


  useEffect(() => {
    fetch('http://localhost:8080/api/v1/student')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].student_id){
                  setActiveUser(data[i]);
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
  }, []);

  return (
    <>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/hostelfunction">Hostel Functions</Link></li>
          <li className="breadcrumb-item active">Request Room Checkout</li>
        </ol>
      </nav>
      <h1>Check Out Form</h1>
      <form>
        <div className='container'>
          <div className='row border ps-4 pe-3 pt-3 pb-2 mt-3'>
            <ol>
              <li>
                Please read throughly the declaration section and complete the appropriate sections below.
              </li>
              <li>
                <span className='fw-bold'>Important Notes:- </span><br/>
                Please note that the check out process will only be processed after one month is past since 
                the applicant has fill in and submit this form. The applicant need to submit the form one 
                month prior to the exact check out date for the department as a notice of check out.
              </li>
            </ol>
          </div>
          <div className='row border mt-4 text-center'>
            <h5 className='m-0 py-1'>Personal Details</h5>
          </div>
          <div className="row mt-3">
            <label className="col-2 col-form-label ps-0">Name:</label>
            <div className="col-10 ps-0">
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
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Student No:</label>
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
            <div className="row col-6">
              <label className="col-4 col-form-label">IC/Passport No:</label>
              <div className="col-8">
                <input type="text" className="form-control" 
                placeholder=
                {(!activeUser)
                  ?
                  'na'
                  :
                  activeUser.nric_passport
                } 
                disabled/>
              </div>
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Date of Birth:</label>
              <div className="col-8">
                <input type="text" className="form-control" 
                placeholder=
                {(!activeUser)
                  ?
                  'na'
                  :
                  activeUser.dob
                } 
                disabled/>
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">Contact No:</label>
              <div className="col-8">
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
          <div className='row form-group mt-3'>
          <div className="row col-6">
              <p className='col-4 m-0 ps-0'>Gender:</p>
              <div className="col-3 form-check ms-3">
                {(activeUser && activeUser.gender === 'Male')
                  ?
                  <input className="form-check-input" type="checkbox" checked readOnly/>
                  :
                  <input className="form-check-input" type="checkbox" checked={false} disabled/>
                }
                <label className="form-check-label">
                  Male
                </label>
              </div>
              <div className="col-3 form-check m-0">
                {(activeUser && activeUser.gender === 'Female')
                  ?
                  <input className="form-check-input" type="checkbox" checked readOnly/>
                  :
                  <input className="form-check-input" type="checkbox" checked={false} disabled/>
                }
                <label className="form-check-label">
                  Female
                </label>
              </div>
            </div>
            <div className="row col-6">
              <p className='col-4 m-0'>Maritial Status:</p>
              <div className="col-3 form-check ms-3">
                {(activeUser && activeUser.maritialStatus === 'Single')
                  ?
                  <input className="form-check-input" type="checkbox" checked readOnly/>
                  :
                  <input className="form-check-input" type="checkbox" checked={false} disabled/>
                }
                <label className="form-check-label">
                  Single
                </label>
              </div>
              <div className="col-3 form-check m-0">
                {(activeUser && activeUser.maritialStatus === 'Married')
                  ?
                  <input className="form-check-input" type="checkbox" checked readOnly/>
                  :
                  <input className="form-check-input" type="checkbox" checked={false} disabled/>
                }
                <label className="form-check-label">
                  Married
                </label>
              </div>
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Email Address:</label>
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
            <div className="row col-6">
              <label className="col-4 col-form-label">Nationality/Country:</label>
              <div className="col-8">
                <input type="text" className="form-control" 
                placeholder=
                {(!activeUser)
                  ?
                  'na'
                  :
                  activeUser.nationality
                } 
                disabled/>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <p className='col-2 ps-0'>Religion:</p>
            <div className="col-1 form-check ms-2">
              {(activeUser && activeUser.religion === 'Muslim')
                  ?
                  <input className="form-check-input" type="checkbox" checked readOnly/>
                  :
                  <input className="form-check-input" type="checkbox" checked={false} disabled/>
                }
              <label className="form-check-label">
                Muslim
              </label>
            </div>
            <div className="col-1 form-check m-0">
              {(activeUser && activeUser.religion === 'Buddhist')
                  ?
                  <input className="form-check-input" type="checkbox" checked readOnly/>
                  :
                  <input className="form-check-input" type="checkbox" checked={false} disabled/>
                }
              <label className="form-check-label">
                Buddhist
              </label>
            </div>
            <div className="col-1 form-check m-0">
              {(activeUser && activeUser.religion === 'Christian')
                  ?
                  <input className="form-check-input" type="checkbox" checked readOnly/>
                  :
                  <input className="form-check-input" type="checkbox" checked={false} disabled/>
                }
              <label className="form-check-label">
                Christian
              </label>
            </div>
            <div className="col-1 form-check m-0">
              {(activeUser && activeUser.religion === 'Hindu')
                  ?
                  <input className="form-check-input" type="checkbox" checked readOnly/>
                  :
                  <input className="form-check-input" type="checkbox" checked={false} disabled/>
                }
              <label className="form-check-label">
                Hindu
              </label>
            </div>
            <div className="col-1 form-check m-0">
              {(activeUser && activeUser.religion === 'Others')
                  ?
                  <input className="form-check-input" type="checkbox" checked readOnly/>
                  :
                  <input className="form-check-input" type="checkbox" checked={false} disabled/>
                }
              <label className="form-check-label">
                Others
              </label>
            </div>
          </div>
          <div className="row form-group mt-3">
            <label className="col-2 col-form-label px-0">Home Address:</label>
            <div className="col-10 ps-0">
              <textarea rows='2' className="form-control" 
                placeholder=
                {(!activeUser)
                  ?
                  'na'
                  :
                  activeUser.address
                } 
                disabled/>
            </div>
          </div>
          <div className="row mt-3">
            <label className="col-2 col-form-label ps-0">Intake Date:</label>
            <div className="col-10 ps-0">
              <input type="text" className="form-control" 
                placeholder=
                {(!activeUser)
                  ?
                  'na'
                  :
                  activeUser.enrollmentDate
                } 
                disabled/>
            </div>
          </div>
          <div className='row border mt-4 text-center'>
            <h5 className='m-0 py-1'>Parent/Guardian/Next of Kin To Contact In Case of Emergency</h5>
          </div>
          <div className="row mt-3">
            <label className="col-2 col-form-label ps-0">Name:</label>
            <div className="col-10 ps-0">
              <input type="text" className="form-control" value={parentName} onChange={e => {setParentName(e.target.value)}}/>
            </div>
          </div>
          <div className="row mt-3">
            <label className="col-2 col-form-label ps-0">Relationship:</label>
            <div className="col-10 ps-0">
              <input type="text" className="form-control" value={relationship} onChange={e => {setRelationship(e.target.value)}}/>
            </div>
          </div>
          <div className="row mt-3">
            <label className="col-2 col-form-label ps-0">Contact No:</label>
            <div className="col-10 ps-0">
              <input type="text" className="form-control" value={contactNo} onChange={e => {setContactNo(e.target.value)}}/>
            </div>
          </div>
          <div className='row border mt-4 text-center'>
            <h5 className='m-0 py-1'>Check Out Details</h5>
          </div>
          <div className="row mt-3">
            <label className="col-2 col-form-label ps-0">Date:</label>
            <div className="col-10 ps-0">
              <input type="date" className="form-control" value={checkoutDate} onChange={e => {setCheckoutDate(e.target.value)}}/>
            </div>
          </div>
          <div className="row mt-3">
            <label className="col-2 col-form-label ps-0">Time:</label>
            <div className="col-10 ps-0">
              <input type="text" className="form-control" value={checkoutTime} onChange={e => {setCheckoutTime(e.target.value)}}/>
            </div>
          </div>
          <div className="row mt-3">
            <label className="col-2 col-form-label ps-0">Unit Number:</label>
            <div className="col-10 ps-0">
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
          <div className="row form-group mt-3">
            <label className="col-2 col-form-label px-0">Reason:</label>
            <div className="col-10 ps-0">
              <textarea rows='2' className="form-control" value={reason} onChange={e => {setReason(e.target.value)}}/>
            </div>
          </div>
          <div className='row border mt-4 text-center'>
            <h5 className='m-0 py-1'>Declaration</h5>
          </div>
          <div className='row mt-4'>
            I hereby declare that I have read and fully understand that terms and conditions 
            of checking out of XMUM student residences stipulated in the 
            XMUM RESIDENCES MANAGEMENT RULES & REGULATIONS.<br/>
            I understand that it is my responsibility to familiarize myself with the said material 
            and I agree by all policies and regulations of XMUM that stated within.
          </div>
          <div className="col-12 form-check mt-4 fw-bold">
            <input className="form-check-input" type="checkbox" value={isAgreeTnC} onClick={() => setIsAgreeTnC(!isAgreeTnC)}/>
            <label className="form-check-label">
              I hereby confirming that I have read, understood, and agree to the terms and conditions.
            </label>
          </div>
          {isAgreeTnC 
          ? <div className="form-group row">
              <div className="col-12 mt-4">
                <button type="submit" className="btn btn-primary float-end">Submit Form</button>
              </div>
            </div>
          : <div className="row">
              <div className="form-text mt-0 pt-0">
                ** It is required to read and accept the terms and conditions before submitting the form.
              </div>
            </div>
          }
        </div>
      </form>
    </>
  )
}

export default RequestRoomCheckout
