import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function HostelApplication() {

  const[isAgreeTnC,setIsAgreeTnC] = useState(false)

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
              <input className="form-check-input" type="checkbox"/>
              <label className="form-check-label">
                New Student
              </label>
            </div>
            <div className="col-2 form-check m-0">
              <input className="form-check-input" type="checkbox"/>
              <label className="form-check-label">
                Existing Student
              </label>
            </div>
            <div className="d-flex col-4 row">
              <label className="col-3 col-form-label align-self-end p-0">Student ID:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
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
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">Nick Name:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">NRIC/Passport No.:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="row col-6">
              <p className='col-4 m-0'>Gender:</p>
              <div className="col-3 form-check ms-3">
                <input className="form-check-input" type="checkbox"/>
                <label className="form-check-label">
                  Male
                </label>
              </div>
              <div className="col-3 form-check m-0">
                <input className="form-check-input" type="checkbox"/>
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
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">Nationality:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Programme:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="row col-6">
              <label className="col-6 col-form-label">Enrollment Month and Year:</label>
              <div className="col-6">
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Email Address:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">Mobile No.:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="row form-group mt-3">
            <label className="col-2 col-form-label px-0">Home Address:</label>
            <div className="col-10 ps-0">
              <textarea rows='2' className="form-control"/>
            </div>
          </div>
          <div className='row border mt-4 text-center'>
            <h5 className='m-0 py-1'>Parent/Guardian/Next of Kin To Contact In Case of Emergency</h5>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Name 01:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">Name 02:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Relationship:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">Relationship:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Mobile No.:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">Mobile No.:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
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
                      <input className="form-check-input" type="checkbox"/>
                    </td>
                    <td className='text-center'>Twin (Block D)</td>
                    <td className='text-center'>RM340</td>
                    <td className='text-center'>RM500</td>
                </tr>
                <tr>
                    <td className='text-center'>
                      <input className="form-check-input" type="checkbox"/>
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
              <input type="text" className="form-control"/>
            </div>
          </div>
          <div className='row form-group mt-3'>
            <div className="row col-6 ps-0">
              <label className="col-4 col-form-label">Roomate Mobile No.:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="row col-6">
              <label className="col-4 col-form-label">NRIC/Passport No.:</label>
              <div className="col-8">
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <label className="col-3 col-form-label ps-0">Remark(s):</label>
            <div className="col-9">
              <input type="text" className="form-control"/>
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

export default HostelApplication
