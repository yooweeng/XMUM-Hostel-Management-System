import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

function Dashboard() {
  return (
    <>
      <NavBar/>
      <div className='d-flex'>
        <SideBar/>
        <section className='p-5 my-container col-10'>
          <nav>
            <ol class="breadcrumb font-breadcrumb">
              <li class="breadcrumb-item"><a href="/home">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
          <h1>Dashboard</h1>
          <div className="card mt-5">
            <h5 className="card-header">Profile</h5>
            <table className="table">
              <tbody>
                <tr className='table-primary'>
                    <td>Status: </td>
                    <td>Active</td>
                  </tr>
                <tr>
                  <td>Nationality: </td>
                  <td>Malaysian</td>
                </tr>
                <tr className='table-primary'>
                  <td>Student Name: </td>
                  <td>Ng Yoo Wee</td>
                </tr>
                <tr>
                  <td>Student ID: </td>
                  <td>SWE1904867</td>
                </tr>
                <tr className='table-primary'>
                  <td>NRIC/Passport Number: </td>
                  <td>012345-01-1234</td>
                </tr>
                <tr>
                  <td>Programme: </td>
                  <td>Bachelor in Software Engineering</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card mt-4">
            <h5 className="card-header">Room</h5>
            <table className="table">
              <tbody>
                <tr className='table-primary'>
                  <td>Room Status: </td>
                  <td>In Stay</td>
                </tr>
                <tr>
                  <td>Room Number (if any): </td>
                  <td>D2-D505</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard
