import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginContext } from '../../helper/Context';

function EditPendingRequest() {
  const [studentPendingRequestList, setStudentPendingRequestList] = useState();
  const [isSelectFilter, setIsSelectFilter] = useState('Pending');

  let token = JSON.parse(sessionStorage.getItem("token"));
  let tokenType;
  
  if(token != null){
    tokenType = token.slice(0,3);
  }

  const {loginDetails, setLoginDetails} = useContext(LoginContext);

  if(tokenType != 'stu'){
    setLoginDetails(prevDetails => {
      return {...prevDetails, isAuthorized: false}
    });
  }
  
  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    fetch(`http://localhost:8080/api/v1/applicationrequest?studentId=${user}`)
            .then(res => res.json())
            .then(data => {setStudentPendingRequestList(data)});
  }, []);

  

  function deleteApplicationRequest(id){
    fetch(`http://localhost:8080/api/v1/applicationrequest/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => data)
  }

  console.log(studentPendingRequestList);

  return (
    <>
        <div className='row ms-4 mt-5 p-0'>
          <h2 className='mt-1 p-0'>Edit Pending Request</h2>
        </div>
        <div className='row'>
            <div className='ms-4' style={{fontSize: "1.1rem"}}>Filter: </div>
        </div>
        <div className='row mt-1'>
            <div className='col-6 ms-4'>
                {(isSelectFilter === 'All')
                ?
                <button className='btn btn-secondary col-1' onClick={() => {setIsSelectFilter('All')}}>All</button>
                :
                <button className='btn btn-primary col-1' onClick={() => {setIsSelectFilter('All')}}>All</button>
                }
                {(isSelectFilter === 'Approved')
                ?
                <button className='btn btn-secondary col-2 ms-3' onClick={() => {setIsSelectFilter('Approved')}}>Approved</button>
                :
                <button className='btn btn-primary col-2 ms-3' onClick={() => {setIsSelectFilter('Approved')}}>Approved</button>
                }
                {(isSelectFilter === 'Rejected')
                ?
                <button className='btn btn-secondary col-2 ms-3' onClick={() => {setIsSelectFilter('Rejected')}}>Rejected</button>
                :
                <button className='btn btn-primary col-2 ms-3' onClick={() => {setIsSelectFilter('Rejected')}}>Rejected</button>
                }
                {(isSelectFilter === 'Pending')
                ?
                <button className='btn btn-secondary col-2 ms-3' onClick={() => {setIsSelectFilter('Pending')}}>Pending</button>
                :
                <button className='btn btn-primary col-2 ms-3' onClick={() => {setIsSelectFilter('Pending')}}>Pending</button>
                }
            </div>
        </div>
        <div className='row ms-2'>
        {studentPendingRequestList && studentPendingRequestList.map((item, index) => {
          
          let block;
          if(item.selectedBlockD){
            block = 'Block D';
          }
          else{
            block = 'Block LY';
          }

          if((item.status === isSelectFilter) || (isSelectFilter === 'All')){
            return(
            <div className='col-4 mt-3' key={item.applicationId}>
              <div className='card shadow mt-3'>
                <div className='card-body p-4'>
                  <h5 className='card-title'>{item.category}</h5>
                  <div className='row mt-4'>
                    <div className='col-6 card-text'>
                      Student id: {item.studentId}
                    </div>
                    <div className='col-6 card-text'>
                      Block: {block}
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col-6 card-text'>
                      Remarks: {item.remarks}
                    </div>
                    {(item.status == "Approved") &&
                      <div className='col-6 card-text'>
                        Status: <span className='text-success'>{item.status}</span>
                      </div>
                    }
                    {(item.status == "Rejected") &&
                      <div className='col-6 card-text'>
                        Status: <span className='text-danger'>{item.status}</span>
                      </div>
                    }
                    {(item.status == "Pending") &&
                      <div className='col-6 card-text'>
                        Status: <span className='text-warning'>{item.status}</span>
                      </div>
                    }
                    <div className='row mt-4'>
                      <button className="btn btn-primary col-5 offset-1" data-bs-toggle="modal" data-bs-target={`#modalTarget${item.applicationId}`}>View Details</button>
                    {(item.status == "Pending") &&  
                      <a href='/editpendingrequest' className='col-5'>
                        <button className="btn btn-danger float-end ms-3" onClick={() => {deleteApplicationRequest(item.applicationId);}}>Revoke</button>
                      </a>
                    }
                    </div>
                    <div className="modal fade" id={`modalTarget${item.applicationId}`}>
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Application</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                          </div>
                          {(item.category === 'Application') &&
                            <>
                              <div className="modal-body">
                                <h5>Request Summary</h5>
                                Category: {item.category} <br/>
                                Student status: Existing Student <br/>
                                <h5 className='mt-3'>Personal Details</h5>
                                Student id: {item.studentId} <br/>
                                Fullname: {item.fullname} <br/>
                                Nickname: {item.nickname} <br/>
                                Nric/Passport: {item.nricPassport} <br/>
                                Gender: {item.gender} <br/>
                                Date of birth: {item.dob} <br/>
                                Nationality: {item.nationality} <br/>
                                Programme: {item.programme} <br/>
                                Enrollment Date: {item.enrollmentDate} <br/>
                                Email: {item.email} <br/>
                                Phone number: {item.phoneNo} <br/>
                                Address: {item.address} <br/>
                                <h5 className='mt-3'>Parent/Guardian/Next of Kin To Contact In Case of Emergency</h5>
                                Parent Name 01: {item.parentName1} <br/>
                                Relationship: {item.relationship1} <br/>
                                Mobile Number: {item.parentMobile1} <br/>
                                Parent Name 02: {item.parentName2} <br/>
                                Relationship: {item.relationship2} <br/>
                                Mobile Number: {item.parentMobile2} <br/>
                                <h5 className='mt-3'>Others</h5>
                                Name of Roomate (if applicable): {item.roommateName} <br/>
                                Roomate Mobile Number: {item.roommatePhoneNo} <br/>
                                Remark(s): {item.remarks}
                              </div>
                              <div className="modal-footer">
                                {(item.status === 'Pending') &&
                                <Link to="/hostelfunction/hostelapplication" state={item}>
                                    <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Edit In Form</button>
                                </Link>
                                }
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Back</button>
                              </div>
                              </>
                            }
                            {(item.category === 'Checkout') &&
                              <>
                              <div className="modal-body">
                                <h5>Request Summary</h5>
                                Category: {item.category} <br/>
                                Student status: Existing Student <br/>
                                <h5 className='mt-3'>Personal Details</h5>
                                Student id: {item.studentId} <br/>
                                Fullname: {item.fullname} <br/>
                                Nric/Passport: {item.nricPassport} <br/>
                                Gender: {item.gender} <br/>
                                Date of birth: {item.dob} <br/>
                                Nationality: {item.nationality} <br/>
                                Programme: {item.programme} <br/>
                                Enrollment Date: {item.enrollmentDate} <br/>
                                Email: {item.email} <br/>
                                Phone number: {item.phoneNo} <br/>
                                Address: {item.address} <br/>
                                <h5 className='mt-3'>Parent/Guardian/Next of Kin To Contact In Case of Emergency</h5>
                                Parent Name: {item.parentName1} <br/>
                                Relationship: {item.relationship1} <br/>
                                Mobile Number: {item.parentMobile1} <br/>
                                <h5 className='mt-3'>Others</h5>
                                Remark(s): {item.remarks}
                              </div>
                              <div className="modal-footer">
                                {(item.status === 'Pending') &&
                                <Link to="/hostelfunction/requestroomcheckout" state={item}>
                                    <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Edit In Form</button>
                                </Link>
                                }
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Back</button>
                              </div>
                              </>
                            }
                            {(item.category === 'Exchange Room') &&
                              <>
                              <div className="modal-body">
                                <h5>Request Summary</h5>
                                Category: {item.category} <br/>
                                Student status: Existing Student <br/>
                                <h5 className='mt-3'>Personal Details</h5>
                                Student id: {item.studentId} <br/>
                                Fullname: {item.fullname} <br/>
                                Nric/Passport: {item.nricPassport} <br/>
                                Gender: {item.gender} <br/>
                                Date of birth: {item.dob} <br/>
                                Nationality: {item.nationality} <br/>
                                Programme: {item.programme} <br/>
                                Enrollment Date: {item.enrollmentDate} <br/>
                                Email: {item.email} <br/>
                                Phone number: {item.phoneNo} <br/>
                                Address: {item.address} <br/>
                                <h5 className='mt-3'>Others</h5>
                                Remark(s): {item.remarks}
                              </div>
                              <div className="modal-footer">
                                {(item.status === 'Pending') &&
                                <Link to="/hostelfunction/requestchangeroom" state={item}>
                                    <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Edit In Form</button>
                                </Link>
                                }
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Back</button>
                              </div>
                              </>
                            }
                            {(item.category === 'Change Period') &&
                              <>
                              <div className="modal-body">
                                <h5>Request Summary</h5>
                                Category: {item.category} <br/>
                                Student status: Existing Student <br/>
                                <h5 className='mt-3'>Personal Details</h5>
                                Student id: {item.studentId} <br/>
                                Fullname: {item.fullname} <br/>
                                Nric/Passport: {item.nricPassport} <br/>
                                Gender: {item.gender} <br/>
                                Date of birth: {item.dob} <br/>
                                Nationality: {item.nationality} <br/>
                                Programme: {item.programme} <br/>
                                Enrollment Date: {item.enrollmentDate} <br/>
                                Email: {item.email} <br/>
                                Phone number: {item.phoneNo} <br/>
                                Address: {item.address} <br/>
                                <h5 className='mt-3'>Others</h5>
                                Remark(s): {item.remarks}
                              </div>
                              <div className="modal-footer">
                                {(item.status === 'Pending') &&
                                  <Link to="/hostelfunction/changehostelperiod" state={item}>
                                      <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Edit In Form</button>
                                  </Link>
                                }
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Back</button>
                              </div>
                            </>
                            }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          }
          })
          }
          </div>
    </>
  )
}

export default EditPendingRequest
