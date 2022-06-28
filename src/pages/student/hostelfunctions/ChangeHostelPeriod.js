import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../../helper/Context';

function ChangeHostelPeriod() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);
  const [activeUser, setActiveUser] = useState();
  const [activeUserHostel, setActiveUserHostel] = useState();

  const [isAgreeTnC,setIsAgreeTnC] = useState(false);
  const [isValidForm, setIsValidForm] = useState(true);

  const [modifyDate, setModifyDate] = useState('');

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

  function addChangeHostelPeriodRequest(){

    fetch('http://localhost:8080/api/v1/applicationrequest',{
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
          {
            'category' : 'Change Period',
            'existingStudent' : true,
            'studentId': activeUser.student_id,
            'fullname': activeUser.fullname,
            'nricPassport': activeUser.nric_passport,
            'gender': activeUser.gender,
            'dob': activeUser.dob,
            'nationality': activeUser.nationality,
            'programme': activeUser.programme,
            'enrollmentDate': activeUser.enrollmentDate,
            'email': activeUser.email,
            'phoneNo': activeUser.phone_no,
            'address': activeUser.address,
            'startDate': activeUserHostel.startDate,
            'endDate': activeUserHostel.endDate,
            'modifyDate': modifyDate,
            'status': 'Pending'
          }
      )
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

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
          <h5 className='m-0 py-1'>Change Hostel Period</h5>
        </div>
        <div className='row mt-4'>
          <div className='row col-6'>
            <label className="col-3 col-form-label ps-0">Start Date:</label>
            <div className="col-9 ps-0">
              <input className='ps-2' type="date" 
              value=
              {(!activeUserHostel)
                ?
                '0001-01-01'
                :
                activeUserHostel.startDate
              } 
              disabled/>
            </div>
          </div>
          <div className='row col-6'>
            <label className="col-4 col-form-label">Previous End Date:</label>
            <div className="col-8 ps-0">
              <input className='ps-2' type="text" 
              value=
              {(!activeUserHostel)
                ?
                '0001-01-01'
                :
                activeUserHostel.endDate
              }
              disabled/>
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          <label className="col-2 col-form-label ps-0">Modify Date:</label>
          <div className="col-9 ps-0">
            <input className='ps-2' type="date" value={modifyDate} onChange={e => {setModifyDate(e.target.value)}}/>
          </div>
          {(modifyDate === '') &&
            <div className='col-2 offset-2 ps-0' style={{fontSize: '0.8rem'}}>
            <label className="form-check-label text-danger">
              ** Please pick a valid date
            </label>
          </div>
          }
        </div>
        <div className='row border mt-4 text-center'>
            <h5 className='m-0 py-1'>Declaration</h5>
          </div>
          <div className='row mt-4'>
            I hereby declare that I have read and fully understand that terms and conditions 
            of applying for XMUM student residences period change stipulated in the 
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
          {(isAgreeTnC) 
          ? (modifyDate === '')
            ?
            <div className="form-group row">
              <div className="col-12 mt-4">
                <Link to='/hostelfunction/changehostelperiod'>
                  <button type="submit" className="btn btn-primary float-end" onClick={() => {setIsValidForm(false);}}>
                    Submit Form</button>
                </Link>
              </div>
            </div>
            :
            <div className="form-group row">
              <div className="col-12 mt-4">
                <button type="submit" className="btn btn-primary float-end" 
                onClick={() => {
                    setIsValidForm(true);
                    addChangeHostelPeriodRequest();
                    alert('Response received and stored.\n\nKindly wait for several operation day for the approval or rejection of the submitted request.');
                  }}>
                  Submit Form</button>
              </div>
            </div>
          : <div className="row">
              <div className="form-text mt-0 pt-0">
                ** It is required to read and accept the terms and conditions before submitting the form.
              </div>
            </div>
          }
          {(!isValidForm) &&
            <label className="form-check-label text-danger">
              Missing information some blocks are not been filled correct. Request submit unsuccessful.
            </label>
          }
      </form>
    </>
  )
}

export default ChangeHostelPeriod
