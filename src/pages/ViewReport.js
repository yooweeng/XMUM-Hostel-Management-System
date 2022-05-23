import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

function ViewReport() {
  return (
    <>
      <NavBar/>
      <div className='d-flex'>
        <SideBar/>
        <section className='p-5 my-container col-10'>
          <nav>
            <ol class="breadcrumb font-breadcrumb">
              <li class="breadcrumb-item"><a href="/home">Home</a></li>
              <li class="breadcrumb-item active">ViewReport</li>
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
            <h5>Maintainence Records</h5>
            <div className='card'>
              <table className="table">
                <thead>
                  <tr className='table-primary'>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Service Type</th>
                    <th>Status</th>
                    <th>Technician Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>11-09-2019</td>
                      <td>Water dripping from air conditioner</td>
                      <td>Air Conditioner</td>
                      <td>Solved</td>
                      <td>DONE- Repair drain pipe leaking</td>
                  </tr>
                  <tr>
                      <td>24-05-2020</td>
                      <td>Basin stuck and overflow</td>
                      <td>Fitting and Plumbing</td>
                      <td>Solved</td>
                      <td>Work done on 28 May 2020</td>
                  </tr>
                  <tr>
                      <td>07-07-2020</td>
                      <td>Sink blockage and faucet leakage</td>
                      <td>Fitting and Plumbing</td>
                      <td>Solved</td>
                      <td>Job complete on 9 August 2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>  
        </section>
      </div>
    </>
  )
}

export default ViewReport
