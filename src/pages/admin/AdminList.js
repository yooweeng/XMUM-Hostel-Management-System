import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AdminList() {

  const [adminList,setAdminList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/admin')
            .then(res => res.json())
            .then(data => {setAdminList(data)})
  }, []);
  
  return (
    <>
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
                  <td>{item.admin_id}</td>
                  <td>{item.name}</td>
                  <td>{item.registration_time}</td>
                  <td>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalTarget">
                      Delete
                    </button>
                    <div className="modal fade" id="modalTarget">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Admin Removed</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                          </div>
                          <div className="modal-body">
                            The selected admin has been successfully removed and deleted.
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Done</button>
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
      </div>
    </>
  )
}

export default AdminList
