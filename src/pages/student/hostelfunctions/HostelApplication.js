import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../../helper/Context'

function HostelApplication() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);
  const [activeUser, setActiveUser] = useState();

  const [isAgreeTnC,setIsAgreeTnC] = useState(false);
  const [isValidForm, setIsValidForm] = useState(true);

  const [nickname, setNickname] = useState('');
  const [parentName1, setParentName1] = useState('');
  const [parentName2, setParentName2] = useState('');
  const [relationship1, setRelationship1] = useState('');
  const [relationship2, setRelationship2] = useState('');
  const [parentMobile1, setParentMobile1] = useState('');
  const [parentMobile2, setParentMobile2] = useState('');
  const [isSelectedBlockD, setIsSelectedBlockD] = useState(false);
  const [isSelectedBlockLY, setIsSelectedBlockLY] = useState(false);
  const [roommateName, setRoommateName] = useState('');
  const [roommateNricPassport, setRoommateNricPassport] = useState('');
  const [roommatePhoneNo, setRoommatePhoneNo] = useState('');
  const [remarks, setRemarks] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/student')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].student_id){
                  setActiveUser(data[i]);
                }
              }
            })
  }, []);

  function addApplicationRequest(){

    fetch('http://localhost:8080/api/v1/applicationrequest',{
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
          {
            'category' : 'Application',
            'existingStudent' : true,
            'studentId': activeUser.student_id,
            'fullname': activeUser.fullname,
            'nickname': nickname,
            'nricPassport': activeUser.nric_passport,
            'gender': activeUser.gender,
            'dob': activeUser.dob,
            'nationality': activeUser.nationality,
            'programme': activeUser.programme,
            'enrollmentDate': activeUser.enrollmentDate,
            'email': activeUser.email,
            'phoneNo': activeUser.phone_no,
            'address': activeUser.address,
            'parentName1': parentName1,
            'parentName2': parentName2,
            'relationship1': relationship1,
            'relationship2': relationship2,
            'parentMobile1': parentMobile1,
            'parentMobile2': parentMobile2,
            'selectedBlockD': isSelectedBlockD,
            'roommateName': roommateName,
            'roommatePhoneNo': roommatePhoneNo,
            'roommateNricPassport': roommateNricPassport,
            'remarks': remarks,
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
          <li className="breadcrumb-item active">Hostel Application</li>
        </ol>
      </nav>
      <h1>Residence Application Form</h1>
      <form>
        <div className='container'>
          <div className='row border ps-4 pe-3 pt-3 pb-2 mt-3'>
            <ol>
              <li>
                Please complete the sections below and pay the Residence Application Fee of RM100(non-refundable) 
                upon submissions of this form. Late submission will delay the application process.
              </li>
              <li>
                Please note that the allocation of rooms will only be processed once the applicant has 
                accepted an offer to study at XMUM.
              </li>
              <li>
                Application is subject to room availability and the University reserves the right to 
                assign any other type of residence available.
              </li>
            </ol>
          </div>
          <div className='d-flex row mt-3 align-items-end'>
            <p className='col-2 m-0'>Please tick (&#10003;):</p>
            <div className="col-2 form-check m-0">
              <input className="form-check-input" type="checkbox" disabled/>
              <label className="form-check-label">
                New Student
              </label>
            </div>
            <div className="col-2 form-check m-0">
              <input className="form-check-input" type="checkbox" checked readOnly/>
              <label className="form-check-label">
                Existing Student
              </label>
            </div>
            <div className="d-flex col-4 row">
              <label className="col-3 col-form-label align-self-end p-0">Student ID:</label>
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
          </div>
          <div className='row border mt-4 text-center'>
            <h5 className='m-0 py-1'>Personal Details</h5>
          </div>
          <div className='row form-group mt-4'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Full Name:</label>
              <div className="col-8">
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
            <div className="row col-6">
              <label className="col-4 col-form-label">Nick Name:</label>
              <div className="col-8">
                <input type="text" className="form-control" value ={nickname} onChange={e => {setNickname(e.target.value)}}/>
                {((/\d/.test(nickname)) || (nickname === '')) && 
                  <div className="row col-10 form-text text-danger mt-0 pt-0 ps-3">
                    ** Please provide a valid nickname
                  </div>
                }
              </div>
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">NRIC/Passport No.:</label>
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
            <div className="row col-6">
              <p className='col-4 m-0'>Gender:</p>
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
              <label className="col-4 col-form-label">Nationality:</label>
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
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Programme:</label>
              <div className="col-8">
                <input type="text" className="form-control" 
                placeholder=
                {(!activeUser)
                  ?
                  'na'
                  :
                  activeUser.programme
                } 
                disabled/>
              </div>
            </div>
            <div className="row col-6">
              <label className="col-6 col-form-label">Enrollment Month and Year:</label>
              <div className="col-6">
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
              <label className="col-4 col-form-label">Mobile No.:</label>
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
          <div className='row border mt-4 text-center'>
            <h5 className='m-0 py-1'>Parent/Guardian/Next of Kin To Contact In Case of Emergency</h5>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Name 01:</label>
              <div className="col-8">
                <input type="text" className="form-control" value={parentName1} onChange={e => {setParentName1(e.target.value)}}/>
                {((/\d/.test(parentName1)) || (parentName1 === '')) && 
                  <div className="row col-10 form-text text-danger mt-0 pt-0 ps-3">
                    ** Please provide a valid name
                  </div>
                }
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">Name 02:</label>
              <div className="col-8">
                <input type="text" className="form-control" value={parentName2} onChange={e => {setParentName2(e.target.value)}}/>
                {(/\d/.test(parentName2)) && 
                  <div className="row col-10 form-text text-danger mt-0 pt-0 ps-3">
                    ** Please provide a valid name
                  </div>
                }
              </div>
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Relationship:</label>
              <div className="col-8">
                <input type="text" className="form-control" value={relationship1} onChange={e => {setRelationship1(e.target.value)}}/>
                {((/\d/.test(relationship1)) || (relationship1 === '')) && 
                  <div className="row col-10 form-text text-danger mt-0 pt-0 ps-3">
                    ** Please provide a valid relationship
                  </div>
                }
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">Relationship:</label>
              <div className="col-8">
                <input type="text" className="form-control" value={relationship2} onChange={e => {setRelationship2(e.target.value)}}/>
                {(/\d/.test(relationship2)) && 
                  <div className="row col-10 form-text text-danger mt-0 pt-0 ps-3">
                    ** Please provide a valid relationship
                  </div>
                }
              </div>
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Mobile No.:</label>
              <div className="col-8">
                <input type="text" className="form-control" value={parentMobile1} onChange={e => {setParentMobile1(e.target.value)}}/>
                {((RegExp(/^\p{L}/,'u').test(parentMobile1)) || (parentMobile1 === '')) && 
                  <div className="row col-10 form-text text-danger mt-0 pt-0 ps-3">
                    ** Please provide a valid mobile number
                  </div>
                }
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">Mobile No.:</label>
              <div className="col-8">
                <input type="text" className="form-control" value={parentMobile2} onChange={e => {setParentMobile2(e.target.value)}}/>
                {(RegExp(/^\p{L}/,'u').test(parentMobile2)) && 
                  <div className="row col-10 form-text text-danger mt-0 pt-0 ps-3">
                    ** Please provide a valid mobile number
                  </div>
                }
              </div>
            </div>
          </div>
          <div className='row border mt-4 text-center'>
            <h5 className='m-0 py-1'>Residence Rental Rate</h5>
          </div>
          <div className="row form-text mt-2">
            *The charges below are subject to changes from time to time
          </div>
          <div className='card mt-4'>
            <table className="table">
              <thead>
                <tr className='table-primary'>
                  <th className='col-3 text-center'>Please select your preference</th>
                  <th className='col-3 text-center'>Room Type</th>
                  <th className='col-3 text-center'>Rate</th>
                  <th className='col-3 text-center'>Deposit (Refundable)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center fw-bold bg-secondary' colSpan={4}>Twin-sharing Ensuite</td>
                </tr>
                <tr>
                    <td className='text-center'>
                      {isSelectedBlockLY
                      ?
                      <input className="form-check-input" type="checkbox" value={isSelectedBlockD} onChange={() => {setIsSelectedBlockD(!isSelectedBlockD)}} disabled/>
                      :
                      <input className="form-check-input" type="checkbox" value={isSelectedBlockD} onChange={() => {setIsSelectedBlockD(!isSelectedBlockD)}}/>
                      }
                      
                    </td>
                    <td className='text-center'>Twin (Block D)</td>
                    <td className='text-center'>RM340</td>
                    <td className='text-center'>RM500</td>
                </tr>
                <tr>
                    <td className='text-center'>
                      {isSelectedBlockD
                      ?
                      <input className="form-check-input" type="checkbox" value={isSelectedBlockLY} onChange={() => {setIsSelectedBlockLY(!isSelectedBlockLY)}} disabled/>
                      :
                      <input className="form-check-input" type="checkbox" value={isSelectedBlockLY} onChange={() => {setIsSelectedBlockLY(!isSelectedBlockLY)}}/>
                      }
                      
                    </td>
                    <td className='text-center'>Twin (Block LY)</td>
                    <td className='text-center'>RM390</td>
                    <td className='text-center'>RM500</td>
                </tr>
              </tbody>
            </table>
          </div>
          {(!isSelectedBlockD && !isSelectedBlockLY) && 
            <div className="row form-text text-danger mt-0 pt-0 ps-3">
              ** Please select at one of the options
            </div>
          }
          <div className='row border mt-4 text-center'>
            <h5 className='m-0 py-1'>Others</h5>
          </div>
          <div className="row mt-3">
            <label className="col-3 col-form-label ps-0">Name of Roomate (if applicable):</label>
            <div className="col-9">
              <input type="text" className="form-control" value={roommateName} onChange={e => {setRoommateName(e.target.value)}}/>
              {((/\d/.test(roommateName)) || (roommateName === '')) && 
                <div className="row col-10 form-text text-danger mt-0 pt-0 ps-3">
                  ** Please provide a valid name
                </div>
              }
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Roomate Mobile No.:</label>
              <div className="col-8">
                <input type="text" className="form-control" value={roommatePhoneNo} onChange={e => {setRoommatePhoneNo(e.target.value)}}/>
                {((RegExp(/^\p{L}/,'u').test(roommatePhoneNo)) || (roommatePhoneNo === '')) && 
                  <div className="row col-10 form-text text-danger mt-0 pt-0 ps-3">
                    ** Please provide a valid mobile number
                  </div>
                }
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">NRIC/Passport No.:</label>
              <div className="col-8">
                <input type="text" className="form-control" value={roommateNricPassport} onChange={e => {setRoommateNricPassport(e.target.value)}}/>
                {((RegExp(/^\p{L}/,'u').test(roommateNricPassport)) || (roommateNricPassport === '')) && 
                  <div className="row form-text text-danger mt-0 pt-0 ps-3">
                    ** Please provide a valid nric/passport number
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <label className="col-3 col-form-label ps-0">Remark(s):</label>
            <div className="col-9">
              <input type="text" className="form-control" value={remarks} onChange={e => {setRemarks(e.target.value)}}/>
            </div>
          </div>
          <div className='row border mt-4 text-center'>
            <h5 className='m-0 py-1'>Declaration</h5>
          </div>
          <div className='row mt-4'>
            I hereby acknowledge that:
            <ol>
              <li>
                All information given by me is correct, accurate and true to the best of my knowledge at the point of filling up this form
                and I understand that any information given falsely or withheld will affect my application and/or agreement.
              </li>
              <li>
                I understand that this accommodation application is subject to room availability and the University reserves the right 
                to assign any other type of accommodation available.
              </li>
              <li>
                I have read the Residence Management Rules and Regulations, and agree to abide to the said rules and regulations.
              </li>
              <li>
                I fully understand that I I violate any of the terms in Residence Management Rules and Regulations, the University may 
                take further disciplinary measures, including rental termination for repeated violations.
              </li>
              <li>
                I understand that the monthly rental is EXCLUSIVE of electricity bills, which will be billed directly to me.
              </li>
              <li>
                I am expected to behave in a manner consistent with the good reputation of the University, refraining from any 
                behaviour which could endanger human life or health, or cause damage to property, disturb order and peace in the 
                Residence, or curtail the rights and liberties of the other residence within the Residence.
              </li>
              <li>
                I agree that my information will be protected in accordance with the Data Protection Act.
              </li>
            </ol>
            <div className="col-12 form-check mt-3 fw-bold">
              <input className="form-check-input" type="checkbox" value={isAgreeTnC} onClick={() => setIsAgreeTnC(!isAgreeTnC)}/>
              <label className="form-check-label">
                I hereby confirming that I have read, understood, and agree to the terms and conditions.
              </label>
            </div>
          </div>
          {(isAgreeTnC) 
          ? ((/\d/.test(nickname)) || (/\d/.test(parentName1)) || (/\d/.test(relationship1)) || (/\d/.test(parentName2)) || (/\d/.test(relationship2)) || 
            (/\d/.test(roommateName)) || (RegExp(/^\p{L}/,'u').test(parentMobile1)) || (RegExp(/^\p{L}/,'u').test(parentMobile2)) || 
            (RegExp(/^\p{L}/,'u').test(roommatePhoneNo)) || (RegExp(/^\p{L}/,'u').test(roommateNricPassport)) || (!isSelectedBlockD && !isSelectedBlockLY)) ||
            (nickname === '') || (parentName1 === '') || (relationship1 === '') || (roommateName === '') ||
            (roommatePhoneNo === '') || (roommateNricPassport === '') || (parentMobile1 === '')
            ?
            <div className="form-group row">
              <div className="col-12 mt-4">
                <Link to='/hostelfunction/hostelapplication'>
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
                    addApplicationRequest();
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
        </div>
      </form>
    </>
  )
}

export default HostelApplication
