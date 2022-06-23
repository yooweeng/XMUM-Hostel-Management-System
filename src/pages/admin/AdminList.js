import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../helper/Context';

function AdminList() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);
  const [adminList,setAdminList] = useState([]);

  loginDetails.user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/admin')
            .then(res => res.json())
            .then(data => {setAdminList(data)})
  }, []);

  function deleteAdmin(id){
    fetch(`http://localhost:8080/api/v1/admin/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => data)
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
                                <a href='/home'>
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
