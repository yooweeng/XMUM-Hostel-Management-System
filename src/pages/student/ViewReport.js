import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../helper/Context';

function ViewReport() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);

  const [maintenanceRequestList, setMaintenanceRequestList] = useState();
  const [rentalFeeList, setRentalFeeList] = useState();

  let balanceRemaining = 0;
  
  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/maintenancerequest?studentId=${loginDetails.user}`)
            .then(res => res.json())
            .then(data => {setMaintenanceRequestList(data)});
    fetch(`http://localhost:8080/api/v1/rentalfee?userId=${loginDetails.user}`)
            .then(res => res.json())
            .then(data => {setRentalFeeList(data)});       
  }, [])
  console.log(rentalFeeList)

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
                <th>Amount (RM)</th>
                <th>Paid (RM)</th>
                <th>Balance remaining (RM)</th>
              </tr>
            </thead>
            <tbody>
              {rentalFeeList && rentalFeeList.map((item, index) => {

                balanceRemaining += item.balanceRemaining;
                console.log(balanceRemaining)

                return(
                  <tr key={item.seq_id}>
                    <td>{item.date}</td>
                    <td>{item.record}</td>
                    <td><span className='float-end'>{parseFloat(item.amount).toFixed(2)}</span></td>
                    <td><span className='float-end'>({parseFloat(item.paid).toFixed(2)})</span></td>
                    <td>
                      {(balanceRemaining === 0)
                      ?
                      '-'
                      :
                      parseFloat(balanceRemaining).toFixed(2)
                      }
                    </td>
                </tr>
                )
              })
              }
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


