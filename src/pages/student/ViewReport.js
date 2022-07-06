import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../helper/Context';

function ViewReport() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);

  const [maintenanceRequestList, setMaintenanceRequestList] = useState();
  
  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/maintenancerequest?studentId=${loginDetails.user}`)
            .then(res => res.json())
            .then(data => {setMaintenanceRequestList(data)});
  }, [])

  return (
    <>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item active">ViewReport</li>
        </ol>
      </nav>
      <h1>View Report</h1>
      <div className="mt-5">
        <h5>Rental Fees</h5>
        <div className='card'>
          <table className="table">
            <thead>
              <tr className='table-primary'>
                <th>Date</th>
                <th>Record</th>
                <th>Amount</th>
                <th>Paid</th>
                <th>Balance remaining</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>14-04-2018</td>
                  <td>Deposit</td>
                  <td><span className='float-end'>500.00</span></td>
                  <td><span className='float-end'>(500.00)</span></td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>01-08-2018</td>
                  <td>Rental- Semester 2</td>
                  <td><span className='float-end'>1360.00</span></td>
                  <td><span className='float-end'>(1360.00)</span></td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>03-12-2018</td>
                  <td>Rental- Semester 3</td>
                  <td><span className='float-end'>1360.00</span></td>
                  <td><span className='float-end'>(1360.00)</span></td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>03-12-2018</td>
                  <td>Rental- Semester 3</td>
                  <td><span className='float-end'>1360.00</span></td>
                  <td><span className='float-end'>(1360.00)</span></td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>11-04-2019</td>
                  <td>Rental- Semester 1</td>
                  <td><span className='float-end'>1700.00</span></td>
                  <td><span className='float-end'>(1700.00)</span></td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>16-09-2019</td>
                  <td>Rental- Semester 2</td>
                  <td><span className='float-end'>1700.00</span></td>
                  <td><span className='float-end'>(1700.00)</span></td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>10-02-2020</td>
                  <td>Rental- Semester 3</td>
                  <td><span className='float-end'>680.00</span></td>
                  <td><span className='float-end'>(680.00)</span></td>
                  <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5">
        <h5>Maintenance Records</h5>
        <div className='card'>
          <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Service Type</th>
                <th scope="col">Status</th>
                <th scope="col">Technician Comments</th>
            </tr>
            </thead>
            <tbody>
            {maintenanceRequestList && maintenanceRequestList.map((item, index) => {

                return (
                <tr key={item.mrId}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.status}</td>
                <td>{item.technicianComments}</td>
                </tr>
                )
            })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ViewReport
