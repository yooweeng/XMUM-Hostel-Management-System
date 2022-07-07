import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function HostelRequestRecord() {

  const [applicationRequestList, setApplicationRequestList] = useState();
  const [roomRecords, setRoomRecords] = useState();
  const [dHostelRates, setDHostelRates] = useState('');
  const [lyHostelRates, setLyHostelRates] = useState('');
  const [modifyDHostelRates, setModifyDHostelRates] = useState('');
  const [modifyLyHostelRates, setModifyLyHostelRates] = useState('');

  const [isCardMode, setIsCardMode] = useState(true);

  useEffect(() => {
      fetch('http://localhost:8080/api/v1/applicationrequest')
              .then(res => res.json())
              .then(data => {setApplicationRequestList(data)});
      fetch('http://localhost:8080/api/v1/hostel')
              .then(res => res.json())
              .then(data => {setRoomRecords(data)});
      fetch('http://localhost:8080/api/v1/hostelrate')
              .then(res => res.json())
              .then(data => {
                setDHostelRates(data[0].dRate);
                setLyHostelRates(data[0].lyRate);
              });
  }, [])

  function updateBlockDHostelRate(){
    fetch(`http://localhost:8080/api/v1/hostelrate/1`,{
      method: 'PUT',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
        {
            'dRate': modifyDHostelRates
        }
      )
    })
    .then(res => res.json())
    .then(data => data)
  }

  function updateBlockLyHostelRate(){
    fetch(`http://localhost:8080/api/v1/hostelrate/1`,{
      method: 'PUT',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
        {
            'lyRate': modifyLyHostelRates
        }
      )
    })
    .then(res => res.json())
    .then(data => data)
  }

  function deleteHostelRecord(id){
    fetch(`http://localhost:8080/api/v1/hostel/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => data);
  }

  console.log(roomRecords)

  return (
    <>
        <nav className='ms-4'>
            <ol className="breadcrumb font-breadcrumb">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
            <li className="breadcrumb-item active">Hostel Request Record/Log</li>
            </ol>
        </nav>
        <div className='row'>
          <div className='col-3 offset-9'>
            <button className='btn btn-primary float-end col-3' onClick={() => {setIsCardMode(false)}}>
              <i className="bi bi-hdd-stack-fill" style={{fontSize: "20px"}}></i>
            </button>
            <button className='btn btn-primary float-end col-3 me-1' onClick={() => {setIsCardMode(true)}}>
              <i className="bi bi-collection" style={{fontSize: "20px"}}></i>
            </button>
          </div>
          
        </div>
        <div className='container ms-3'>
          <h1>Hostel Request Record / Log</h1>
          <div className='row'>
          {isCardMode && applicationRequestList && applicationRequestList.map((item, index) => {
            let block;
            if(item.selectedBlockD){
              block = 'Block D';
            }
            else{
              block = 'Block LY';
            }
            
            return(
              <div className='col-4 mt-3'>
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
                      <button className="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target={`#modalTargetViewDetails${item.applicationId}`}>View Details</button>
                      <div className="modal fade" id={`modalTargetViewDetails${item.applicationId}`}>
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Application</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
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
                              <Link to="/viewapplication" state={item}>
                                  <button type="button" className="btn btn-warning" data-bs-dismiss="modal">View In Form</button>
                              </Link>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Back</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) 
          })}
          </div>
          {!isCardMode && 
            <>
                <table className="table table-striped mt-5">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Request type</th>
                    <th scope="col">Block</th>
                    <th scope="col">Student id</th>
                    <th scope="col">Remarks</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {applicationRequestList && applicationRequestList.map((item, index) => {
                    let block;
                    if(item.selectedBlockD){
                      block = 'Block D';
                    }
                    else{
                      block = 'Block LY';
                    }
                    return(
                      <tr key={item.applicationId}>
                        <th scope ='row'>{index +1}</th>
                        <td>{item.category}</td>
                        <td>{block}</td>
                        <td>{item.studentId}</td>
                        <td>{item.remarks}</td>
                        <td>{item.status}</td>
                        <td>
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modalTargetViewDetails${item.applicationId}`}>
                            View Details
                          </button>
                          <div className="modal fade" id={`modalTargetViewDetails${item.applicationId}`}>
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">Application</h5>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
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
                                  <Link to="/viewapplication" state={item}>
                                      <button type="button" className="btn btn-warning" data-bs-dismiss="modal">View In Form</button>
                                  </Link>
                                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Back</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </>
          }
          <div className='container ms-3 mt-5'>
            <h1>Room Record</h1>
            <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student Id</th>
                <th scope="col">Start Date</th>
                <th scope="col">Registration Time</th>
                <th scope="col">End Date</th>
                <th scope="col">Room Id</th>
                <th scope="col">Room Type</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            {roomRecords && roomRecords.map((item, index) => {

            return(
              <tr key={index}>
                <th scope ='row'>{index +1}</th>
                <td>{item.user_id}</td>
                <td>{item.startDate}</td>
                <td>{item.startTime}</td>
                <td>{item.endDate}</td>
                <td>{item.room_id}</td>
                <td>{item.room_type}</td>
                <td>{item.status}</td>
                <td>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#modalTargetDeleteStudent${index}`}>
                  Remove
                </button>
                <div className="modal fade" id={`modalTargetDeleteStudent${index}`}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Removed Student from Hostel</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                        Do you sure to remove this student from the hostel. <br/><br/>
                        The data will be removed from the database and this action is not reversible.
                      </div>
                      <div className="modal-footer">
                        <a href='/requestlog'>
                          <button type="button" className="btn btn-success" data-bs-dismiss="modal" 
                          onClick={() => {
                            deleteHostelRecord(item.seq_id);
                            alert("The selected student has been successfully removed from the hostel.");
                            }}>
                              Confirm</button>
                        </a>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>
                      </div>
                    </div>
                  </div>
                </div>
                </td>
              </tr>
            )
            })
            }
            </tbody>
            </table>
          </div>
        </div>
        <div className='container ms-5 mt-5'>
          <h1>Change Hostel Rates</h1>
          <div className='card shadow p-4 mt-4'>
            <div className="row mt-2">
              <h4 className='col-2 offset-3 ps-5'>Block D</h4>
              <h4 className='col-2 offset-4 ps-5'>Block LY</h4>
            </div>
            <div className="row mt-2">
                <label className="col-2 col-form-label">Current Hostel Rates: (RM per month)</label>
                <div className="col-4">
                  <input type="text" className="form-control" placeholder={dHostelRates} disabled/>
                </div>
                <label className="col-2 col-form-label">Current Hostel Rates: (RM per month)</label>
                <div className="col-4">
                    <input type="text" className="form-control" placeholder={lyHostelRates} disabled/>
                </div>
            </div>
            <div className="row mt-4">
                <label className="col-2 col-form-label">Modify Hostel Rates:</label>
                <div className="col-4">
                    <input type="text" className="form-control" value={modifyDHostelRates} onChange={e => {setModifyDHostelRates(e.target.value);}}/>
                    {((RegExp(/^\p{L}/,'u').test(modifyDHostelRates)) || (modifyDHostelRates === '')) && 
                        <div className="row col-10 form-text text-danger mt-0 pt-0 ps-3">
                          ** Please provide a valid rate
                        </div>
                    }
                </div>
                <label className="col-2 col-form-label">Modify Hostel Rates:</label>
                <div className="col-4">
                    <input type="text" className="form-control" value={modifyLyHostelRates} onChange={e => {setModifyLyHostelRates(e.target.value);}}/>
                    {((RegExp(/^\p{L}/,'u').test(modifyLyHostelRates)) || (modifyLyHostelRates === '')) && 
                        <div className="row col-10 form-text text-danger mt-0 pt-0 ps-3">
                          ** Please provide a valid rate
                        </div>
                    }
                </div>
            </div>
            <div className='row'>
            {((RegExp(/^\p{L}/,'u').test(modifyDHostelRates)) || (modifyDHostelRates === ''))
              ?
              <Link to="/requestlog" className='btn btn-info col-1 offset-5 mt-4'
               onClick={() => {
                alert("Please provide a valid rate.");
               }}>Change</Link>
               :
               <a href="/requestlog" className='btn btn-info col-1 offset-5 mt-4'
               onClick={() => {
                updateBlockDHostelRate();
                alert("Hostel rates of Block D has been changed and updated.");
               }}>Change</a>
              }
               {((RegExp(/^\p{L}/,'u').test(modifyLyHostelRates)) || (modifyLyHostelRates === '')) 
                ? 
                <Link to="/requestlog" className='btn btn-info col-1 offset-5 mt-4'
               onClick={() => {
                alert("Please provide a valid rate.");
               }}>Change</Link>
                :
                <a href="/requestlog" className='btn btn-info col-1 offset-5 mt-4'
               onClick={() => {
                updateBlockLyHostelRate();
                alert("Hostel rates of Block LY has been changed and updated.");
               }}>Change</a>
              }
            </div>
          </div>
        </div>
    </>
  )
}

export default HostelRequestRecord
