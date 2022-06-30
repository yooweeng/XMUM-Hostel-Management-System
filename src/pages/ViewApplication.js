import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactToPdf from "react-to-pdf";

function ViewApplication() {

  const ref = React.createRef();
  const location = useLocation();
  const data = location.state;
  console.log(data)

  let token = JSON.parse(sessionStorage.getItem("token"));
  let tokenType;
  
  if(token != null){
    tokenType = token.slice(0,3);
  }
  console.log(tokenType)

  return (
    <>
      {(tokenType === 'adm') &&
          <div className=''>
            <div className='ms-3 pt-4 ps-3 offset-2' ref={ref}>
            {(data.category === 'Application') &&
            <>
                <h1 className='ps-3'>Residence Application Form</h1>
                <form>
                    <div className='container col-12 m-0'>
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
                            {data.studentId
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
                            {data.fullname
                            } 
                            disabled/>
                        </div>
                        </div>
                        <div className="row col-6">
                        <label className="col-4 col-form-label">Nick Name:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder={data.nickname} disabled/>
                        </div>
                        </div>
                    </div>
                    <div className='row form-group mt-3'>
                        <div className="row col-6 ps-0">
                        <label className="col-4 col-form-label">NRIC/Passport No.:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" 
                            placeholder=
                            {data.nricPassport
                            } 
                            disabled/>
                        </div>
                        </div>
                        <div className="row col-6">
                        <p className='col-4 m-0'>Gender:</p>
                        <div className="col-3 form-check ms-3">
                            {
                            <input className="form-check-input" type="checkbox" checked readOnly/>
                            
                            }
                            <label className="form-check-label">
                            Male
                            </label>
                        </div>
                        <div className="col-3 form-check m-0">
                            {
                            <input className="form-check-input" type="checkbox" checked readOnly/>
                            
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
                            {data.dob
                            } 
                            disabled/>
                        </div>
                        </div>
                        <div className="row col-6">
                        <label className="col-4 col-form-label">Nationality:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" 
                            placeholder=
                            {data.nationality
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
                            {data.programme
                            } 
                            disabled/>
                        </div>
                        </div>
                        <div className="row col-6">
                        <label className="col-6 col-form-label">Enrollment Month and Year:</label>
                        <div className="col-6">
                            <input type="text" className="form-control" 
                            placeholder=
                            {data.enrollmentDate
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
                            {data.email
                            } 
                            disabled/>
                        </div>
                        </div>
                        <div className="row col-6">
                        <label className="col-4 col-form-label">Mobile No.:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" 
                            placeholder=
                            {data.phoneNo
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
                            {data.address
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
                            <input type="text" className="form-control" placeholder={data.parentName1} disabled/>
                        </div>
                        </div>
                        <div className="row col-6">
                        <label className="col-4 col-form-label">Name 02:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder={data.parentName2} disabled/>
                        </div>
                        </div>
                    </div>
                    <div className='row form-group mt-3'>
                        <div className="row col-6 ps-0">
                        <label className="col-4 col-form-label">Relationship:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder={data.relationship1} disabled/>
                        </div>
                        </div>
                        <div className="row col-6">
                        <label className="col-4 col-form-label">Relationship:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder={data.relationship2} disabled/>
                        </div>
                        </div>
                    </div>
                    <div className='row form-group mt-3'>
                        <div className="row col-6 ps-0">
                        <label className="col-4 col-form-label">Mobile No.:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder={data.parentMobile1} disabled/>
                        </div>
                        </div>
                        <div className="row col-6">
                        <label className="col-4 col-form-label">Mobile No.:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder={data.parentMobile2} disabled/>
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
                                {data.selectedBlockD
                                    ?
                                    <input className="form-check-input" type="checkbox" checked readOnly/>
                                    :
                                    <input className="form-check-input" type="checkbox" disabled/>
                                }
                                </td>
                                <td className='text-center'>Twin (Block D)</td>
                                <td className='text-center'>RM340</td>
                                <td className='text-center'>RM500</td>
                            </tr>
                            <tr>
                                <td className='text-center'>
                                {!data.selectedBlockD
                                    ?
                                    <input className="form-check-input" type="checkbox" checked readOnly/>
                                    :
                                    <input className="form-check-input" type="checkbox" disabled/>
                                }
                                </td>
                                <td className='text-center'>Twin (Block LY)</td>
                                <td className='text-center'>RM390</td>
                                <td className='text-center'>RM500</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className='row border mt-4 text-center'>
                        <h5 className='m-0 py-1'>Others</h5>
                    </div>
                    <div className="row mt-3">
                        <label className="col-3 col-form-label ps-0">Name of Roomate (if applicable):</label>
                        <div className="col-9">
                        <input type="text" className="form-control" placeholder={data.roommateName} disabled/>
                        </div>
                    </div>
                    <div className='row form-group mt-3'>
                        <div className="row col-6 ps-0">
                        <label className="col-4 col-form-label">Roomate Mobile No.:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder={data.roommatePhoneNo} disabled/>
                        </div>
                        </div>
                        <div className="row col-6">
                        <label className="col-4 col-form-label">NRIC/Passport No.:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder={data.roommateNricPassport} disabled/>
                        </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <label className="col-3 col-form-label ps-0">Remark(s):</label>
                        <div className="col-9">
                        <input type="text" className="form-control" placeholder={data.remarks} disabled/>
                        </div>
                    </div>
                    <div className='row border mt-4 text-center'>
                        <h5 className='m-0 py-1'>Declaration</h5>
                    </div>
                    <div className='row mt-2'>
                        <div className="col-12 form-check fw-bold">
                            <input className="form-check-input" type="checkbox" checked readOnly/>
                            <label className="form-check-label">
                                I hereby confirming that I have read, understood, and agree to the terms and conditions.
                            </label>
                        </div>
                        <div className="row">
                            <div className="form-text mt-0 pt-0">
                                ** The student read and accepted the terms and conditions.
                            </div>
                        </div>
                    </div>
                    </div>
                </form>
            </>
            }
            {(data.category === 'Checkout') &&
            <>
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
                        <input type="text" className="form-control" placeholder={data.fullname} disabled/>
                      </div>
                    </div>
                    <div className='row form-group mt-3'>
                      <div className="row col-6 ps-0">
                        <label className="col-4 col-form-label">Student No:</label>
                        <div className="col-8">
                          <input type="text" className="form-control" 
                          placeholder=
                          {data.studentId}
                          disabled/>
                        </div>
                      </div>
                      <div className="row col-6">
                        <label className="col-4 col-form-label">IC/Passport No:</label>
                        <div className="col-8">
                          <input type="text" className="form-control" 
                          placeholder=
                          {data.nricPassport
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
                          {data.dob
                          } 
                          disabled/>
                        </div>
                      </div>
                      <div className="row col-6">
                        <label className="col-4 col-form-label">Contact No:</label>
                        <div className="col-8">
                          <input type="text" className="form-control" 
                          placeholder=
                          {data.phoneNo
                          } 
                          disabled/>
                        </div>
                      </div>
                    </div>
                    <div className='row form-group mt-3'>
                    <div className="row col-6">
                        <p className='col-4 m-0 ps-0'>Gender:</p>
                        <div className="col-3 form-check ms-3">
                          {(data.gender === 'Male')
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
                          {(data.gender === 'Female')
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
                          {(data.maritialStatus === 'Single')
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
                          {(data.maritialStatus === 'Married')
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
                          {data.email
                          } 
                          disabled/>
                        </div>
                      </div>
                      <div className="row col-6">
                        <label className="col-4 col-form-label">Nationality/Country:</label>
                        <div className="col-8">
                          <input type="text" className="form-control" 
                          placeholder=
                          {data.nationality
                          } 
                          disabled/>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <p className='col-2 ps-0'>Religion:</p>
                      <div className="col-1 form-check ms-2">
                        {(data.religion === 'Muslim')
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
                        {(data.religion === 'Buddhist')
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
                        {(data.religion === 'Christian')
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
                        {(data.religion === 'Hindu')
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
                        {(data.religion === 'Others')
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
                          {data.address
                          } 
                          disabled/>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Intake Date:</label>
                      <div className="col-10 ps-0">
                        <input type="text" className="form-control" 
                          placeholder=
                          {data.enrollmentDate
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
                        <input type="text" className="form-control" placeholder={data.parentName1} disabled/>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Relationship:</label>
                      <div className="col-10 ps-0">
                        <input type="text" className="form-control" placeholder={data.relationship1} disabled/>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Contact No:</label>
                      <div className="col-10 ps-0">
                        <input type="text" className="form-control" placeholder={data.phoneNo} disabled/>
                      </div>
                    </div>
                    <div className='row border mt-4 text-center'>
                      <h5 className='m-0 py-1'>Check Out Details</h5>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Date:</label>
                      <div className="col-10 ps-0">
                        <input type="date" className="form-control" value={data.modifyDate} disabled/>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Time:</label>
                      <div className="col-10 ps-0">
                        <input type="text" className="form-control" placeholder={data.checkoutTime} disabled/>
                        <div className="row col-10 form-text mt-0 pt-0 ps-3">
                          Time format: xx:xx
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Unit Number:</label>
                      <div className="col-10 ps-0">
                        <input type="text" className="form-control" 
                        placeholder=
                        {data.roomId
                        } 
                        disabled/>
                      </div>
                    </div>
                    <div className="row form-group mt-3">
                      <label className="col-2 col-form-label px-0">Reason:</label>
                      <div className="col-10 ps-0">
                        <textarea rows='2' className="form-control" placeholder={data.reason} disabled/>
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
                      <input className="form-check-input" type="checkbox" checked disabled/>
                      <label className="form-check-label">
                        I hereby confirming that I have read, understood, and agree to the terms and conditions.
                      </label>
                    </div>
                  </div>
                </form>
            </>
            }
            {(data.category === 'Exchange Room') &&
              <>
                <h1>Room Exchange Form</h1>
                <form>
                  <div className='container'>
                    <div className='row border mt-4 text-center'>
                      <h5 className='m-0 py-1'>Personal Details</h5>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Name:</label>
                      <div className="col-10 ps-0">
                        <input type="text" className="form-control" 
                          placeholder=
                          {(!data)
                            ?
                            'na'
                            :
                            data.fullname
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
                          {(!data)
                            ?
                            'na'
                            :
                            data.studentId
                          } 
                          disabled/>
                        </div>
                      </div>
                      <div className="row col-6">
                        <label className="col-4 col-form-label">IC/Passport No:</label>
                        <div className="col-8">
                          <input type="text" className="form-control" 
                          placeholder=
                          {(!data)
                            ?
                            'na'
                            :
                            data.nricPassport
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
                          {(!data)
                            ?
                            'na'
                            :
                            data.dob
                          } 
                          disabled/>
                        </div>
                      </div>
                      <div className="row col-6">
                        <label className="col-4 col-form-label">Contact No:</label>
                        <div className="col-8">
                          <input type="text" className="form-control" 
                          placeholder=
                          {(!data)
                            ?
                            'na'
                            :
                            data.phoneNo
                          } 
                          disabled/>
                        </div>
                      </div>
                    </div>
                    <div className='row form-group mt-3'>
                    <div className="row col-6">
                        <p className='col-4 m-0 ps-0'>Gender:</p>
                        <div className="col-3 form-check ms-3">
                          {(data && data.gender === 'Male')
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
                          {(data && data.gender === 'Female')
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
                          {(data && data.maritialStatus === 'Single')
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
                          {(data && data.maritialStatus === 'Married')
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
                          {(!data)
                            ?
                            'na'
                            :
                            data.email
                          } 
                          disabled/>
                        </div>
                      </div>
                      <div className="row col-6">
                        <label className="col-4 col-form-label">Nationality/Country:</label>
                        <div className="col-8">
                          <input type="text" className="form-control" 
                          placeholder=
                          {(!data)
                            ?
                            'na'
                            :
                            data.nationality
                          } 
                          disabled/>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <p className='col-2 ps-0'>Religion:</p>
                      <div className="col-1 form-check ms-2">
                        {(data && data.religion === 'Muslim')
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
                        {(data && data.religion === 'Buddhist')
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
                        {(data && data.religion === 'Christian')
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
                        {(data && data.religion === 'Hindu')
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
                        {(data && data.religion === 'Others')
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
                          {(!data)
                            ?
                            'na'
                            :
                            data.address
                          } 
                          disabled/>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Intake Date:</label>
                      <div className="col-10 ps-0">
                        <input type="text" className="form-control" 
                          placeholder=
                          {(!data)
                            ?
                            'na'
                            :
                            data.enrollmentDate
                          } 
                          disabled/>
                      </div>
                    </div>
                    <div className='row border mt-4 text-center'>
                      <h5 className='m-0 py-1'>Current Room Details</h5>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Date:</label>
                      <div className="col-10 ps-0">
                        <input type="date" className="form-control" 
                        value=
                        {(!data)
                          ?
                          '0001-01-01'
                          :
                          data.startDate
                        } 
                        disabled/>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Time:</label>
                      <div className="col-10 ps-0">
                        <input type="text" className="form-control"
                        placeholder=
                        {(!data)
                          ?
                          'na'
                          :
                          data.startTime
                        } 
                        disabled/>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Unit Number:</label>
                      <div className="col-10 ps-0">
                        <input type="text" className="form-control"
                        placeholder=
                        {(!data)
                          ?
                          'na'
                          :
                          data.roomId
                        } 
                        disabled/>
                      </div>
                    </div>
                    <div className='row border mt-4 text-center'>
                      <h5 className='m-0 py-1'>Exchanged Room Details</h5>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Date:</label>
                      <div className="col-10 ps-0">
                        <input type="date" className="form-control" value={data.modifyDate} disabled/>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Time:</label>
                      <div className="col-10 ps-0">
                        <input type="text" className="form-control" placeholder={data.checkoutTime} disabled/>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <label className="col-2 col-form-label ps-0">Unit Number:</label>
                      <div className="col-10 ps-0">
                        <input type="text" className="form-control" placeholder={data.roomId} disabled/>
                        <div className="row col-10 form-text mt-0 pt-0 ps-3">
                            Unit number format: eg. D2-D505
                          </div>
                      </div>
                    </div>
                    <div className="row form-group mt-3">
                      <label className="col-2 col-form-label px-0">Reason:</label>
                      <div className="col-10 ps-0">
                        <textarea rows='2' className="form-control" placeholder={data.reason} disabled/>
                      </div>
                    </div>
                    <div className='row border mt-4 text-center'>
                      <h5 className='m-0 py-1'>Declaration</h5>
                    </div>
                    <div className='row mt-4'>
                      I hereby declare that I have read and fully understand that terms and conditions 
                      of applying for room exchange stipulated in the 
                      XMUM RESIDENCES MANAGEMENT RULES & REGULATIONS.<br/>
                      I understand that it is my responsibility to familiarize myself with the said material 
                      and I agree by all policies and regulations of XMUM that stated within.
                    </div>
                    <div className="col-12 form-check mt-4 fw-bold">
                      <input className="form-check-input" type="checkbox" checked disabled/>
                      <label className="form-check-label">
                        I hereby confirming that I have read, understood, and agree to the terms and conditions.
                      </label>
                    </div>
                  </div>
                </form>
              </>
            }
            {(data.category === 'Change Period') &&
              <>
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
                        {(!data)
                          ?
                          'na'
                          :
                          data.fullname
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
                        {(!data)
                          ?
                          'na'
                          :
                          data.studentId
                        } 
                        disabled/>
                      </div>
                    </div>
                    <div className="row col-6">
                      <label className="col-4 col-form-label">IC/Passport No:</label>
                      <div className="col-8">
                        <input type="text" className="form-control" 
                        placeholder=
                        {(!data)
                          ?
                          'na'
                          :
                          data.nricPassport
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
                        {(!data)
                          ?
                          'na'
                          :
                          data.dob
                        } 
                        disabled/>
                      </div>
                    </div>
                    <div className="row col-6">
                      <label className="col-4 col-form-label">Contact No:</label>
                      <div className="col-8">
                        <input type="text" className="form-control" 
                        placeholder=
                        {(!data)
                          ?
                          'na'
                          :
                          data.phoneNo
                        } 
                        disabled/>
                      </div>
                    </div>
                  </div>
                  <div className='row form-group mt-3'>
                  <div className="row col-6">
                      <p className='col-4 m-0 ps-0'>Gender:</p>
                      <div className="col-3 form-check ms-3">
                        {(data && data.gender === 'Male')
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
                        {(data && data.gender === 'Female')
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
                        {(data && data.maritialStatus === 'Single')
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
                        {(data && data.maritialStatus === 'Married')
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
                        {(!data)
                          ?
                          'na'
                          :
                          data.email
                        } 
                        disabled/>
                      </div>
                    </div>
                    <div className="row col-6">
                      <label className="col-4 col-form-label">Nationality/Country:</label>
                      <div className="col-8">
                        <input type="text" className="form-control" 
                        placeholder=
                        {(!data)
                          ?
                          'na'
                          :
                          data.nationality
                        } 
                        disabled/>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <p className='col-2 ps-0'>Religion:</p>
                    <div className="col-1 form-check ms-2">
                      {(data && data.religion === 'Muslim')
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
                      {(data && data.religion === 'Buddhist')
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
                      {(data && data.religion === 'Christian')
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
                      {(data && data.religion === 'Hindu')
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
                      {(data && data.religion === 'Others')
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
                        {(!data)
                          ?
                          'na'
                          :
                          data.address
                        } 
                        disabled/>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <label className="col-2 col-form-label ps-0">Intake Date:</label>
                    <div className="col-10 ps-0">
                      <input type="text" className="form-control" 
                        placeholder=
                        {(!data)
                          ?
                          'na'
                          :
                          data.enrollmentDate
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
                        {(!data)
                          ?
                          '0001-01-01'
                          :
                          data.startDate
                        } 
                        disabled/>
                      </div>
                    </div>
                    <div className='row col-6'>
                      <label className="col-4 col-form-label">Previous End Date:</label>
                      <div className="col-8 ps-0">
                        <input className='ps-2' type="text" 
                        value=
                        {(!data)
                          ?
                          '0001-01-01'
                          :
                          data.endDate
                        }
                        disabled/>
                      </div>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <label className="col-2 col-form-label ps-0">Modify Date:</label>
                    <div className="col-9 ps-0">
                      <input className='ps-2' type="date" value={data.modifyDate} disabled/>
                    </div>
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
                      <input className="form-check-input" type="checkbox" checked disabled/>
                      <label className="form-check-label">
                        I hereby confirming that I have read, understood, and agree to the terms and conditions.
                      </label>
                    </div>
                </form>
              </>
            }
            </div>
            <ReactToPdf targetRef={ref} filename="download.pdf" scale={0.67}>
                {({ toPdf }) => <button type="button" className="btn btn-danger mt-4 float-end" data-bs-dismiss="modal" 
                onClick={toPdf}>Generate Form<i className="bi bi-filetype-pdf ms-2" style={{fontSize: "20px"}}></i></button>}
            </ReactToPdf>
          </div>
      }
    </>
  )
}

export default ViewApplication
