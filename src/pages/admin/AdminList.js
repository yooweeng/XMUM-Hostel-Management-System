import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../helper/Context';

function AdminList() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);
  const [adminList,setAdminList] = useState([]);
  const [adminSelected, setAdminSelected] = useState(1);
  const [adminIdRegister, setAdminIdRegister] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password, setPassword] = useState('');

  loginDetails.user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/admin')
            .then(res => res.json())
            .then(data => {
              setAdminList(data);
            });
  }, []);

  function addAdmin(){
    let dateNow = new Date(Date.now());
    let date = dateNow.getFullYear().toString() + '-' + 
              (dateNow.getMonth()+1).toString() + '-' + 
              dateNow.getDate().toString() + ' ' + 
              dateNow.getHours().toString() + ':' + 
              dateNow.getMinutes().toString() + ':' + 
              dateNow.getSeconds().toString();

    fetch('http://localhost:8080/api/v1/admin',{
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
          {
            'adminId': adminIdRegister,
            'name': fname +" "+ lname,
            'registrationTime': date,
            'fname': fname,
            'lname': lname
          }
      )
    })
    .then(res => res.json())
    .then(data => data);

    fetch('http://localhost:8080/api/v1/userdetail',{
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
          {
            "userId": adminIdRegister,
            "category": "admin",
            "pw": password
          }
      )
    })
    .then(res => res.json())
    .then(data => data);
  }

  function updateAdmin(){
    fetch(`http://localhost:8080/api/v1/admin/${adminSelected}`,{
      method: 'PUT',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
        {
            'fname': fname,
            'lname': lname
        }
      )
    })
    .then(res => res.json())
    .then(data => data)
  }

  function deleteAdmin(id){
    fetch(`http://localhost:8080/api/v1/admin/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => data);

    fetch(`http://localhost:8080/api/v1/userdetail/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => data);
  }
  
  return (
    <>
      <nav className='ms-4'>
          <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item active">Admin List</li>
          </ol>
      </nav>
      <div className='container mt-3 ms-3'>
        <h1>Administrator List</h1>
        <button type="button" className="btn btn-info float-end ms-1" data-bs-toggle="modal" data-bs-target="#modalTargetUpdateAdmin">
          Update Admin
        </button>
        <button type="button" className="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#modalTargetRegisterAdmin">
          Register Admin
        </button>
        <div className="modal fade" id="modalTargetRegisterAdmin">
          <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title">Register Admin</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body py-4">
            <div className="row mx-3">
                <label className="col-form-label">Admin Id:</label>
            </div>
            <div className="row col-10 mx-3">
                <input type="text" className="form-control" value={adminIdRegister} onChange={e => {setAdminIdRegister(e.target.value);}}/>
            </div>
            <div className="row mx-3 mt-4">
                <label className="col-form-label">First Name:</label>
            </div>
            <div className="row col-10 mx-3">
                <input type="text" className="form-control" value={fname} onChange={e => {setFname(e.target.value);}}/>
            </div>
            <div className="row mx-3 mt-4">
                <label className="col-form-label">Last Name:</label>
            </div>
            <div className="row col-10 mx-3">
                <input type="text" className="form-control" value={lname} onChange={e => {setLname(e.target.value);}}/>
            </div>
            <div className="row mx-3 mt-4">
                <label className="col-form-label">Password:</label>
            </div>
            <div className="row col-10 mx-3">
                <input type="password" className="form-control" value={password} onChange={e => {setPassword(e.target.value);}}/>
            </div>
          </div>
              <div className="modal-footer">
                <a href='/adminlist'>
                  <button type="button" className="btn btn-success" data-bs-dismiss="modal" 
                  onClick={() => {
                    addAdmin();
                    alert("The selected admin has been successfully registered.");
                    }}>
                      Register</button>
                </a>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Back</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modalTargetUpdateAdmin">
          <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title">Update Admin</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body py-4">
          <div className="row mt-2">
              <label className="col-2 col-form-label align-self-center mx-4 ps-3">Category:</label>
              <div className="col-6">
                  <select className="form-select" value={adminSelected} onChange={e => {setAdminSelected(e.target.value);}}>
                    {adminList && adminList.map((item, index) => {
                      return(
                        <>
                          <option key={item.adminId} value={item.seq_id}>{item.adminId}</option>
                        </>
                      )
                    })}
                  </select>
              </div>
            </div>
            <div className="row mx-3 mt-4">
                <label className="col-form-label">First Name:</label>
            </div>
            <div className="row col-10 mx-3">
                <input type="text" className="form-control" value={fname} onChange={e => {setFname(e.target.value);}}/>
            </div>
            <div className="row mx-3 mt-4">
                <label className="col-form-label">Last Name:</label>
            </div>
            <div className="row col-10 mx-3">
                <input type="text" className="form-control" value={lname} onChange={e => {setLname(e.target.value);}}/>
            </div>
          </div>
              <div className="modal-footer">
                <a href='/adminlist'>
                  <button type="button" className="btn btn-info" data-bs-dismiss="modal" 
                  onClick={() => {
                    updateAdmin();
                    alert("The selected admin has been successfully updated with the new details.");
                    }}>
                      Update</button>
                </a>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Back</button>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Admin Id</th>
              <th scope="col">Admin Name</th>
              <th scope="col">Registration Time</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {adminList && adminList.map((item, index) => {
              return(
                <tr key={index}>
                  <th scope ='row'>{index +1}</th>
                  <td>{item.adminId}</td>
                  <td>{item.name}</td>
                  <td>{item.registrationTime}</td>
                  <td>
                    {(loginDetails.user != item.adminId) &&
                      <>
                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#modalTarget${index}`}>
                          Delete
                        </button>
                        <div className="modal fade" id={`modalTarget${index}`}>
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Admin Removed</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                              </div>
                              <div className="modal-body">
                                Do you sure to remove and delete this admin. <br/><br/>
                                The access granted will be revoked for the admin, and the account will be removed.
                              </div>
                              <div className="modal-footer">
                                <a href='/adminlist'>
                                  <button type="button" className="btn btn-success" data-bs-dismiss="modal" 
                                  onClick={() => {
                                    deleteAdmin(item.adminId);
                                    alert("The selected admin has been successfully removed and deleted.");
                                    }}>
                                      Yes</button>
                                </a>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    }
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminList
