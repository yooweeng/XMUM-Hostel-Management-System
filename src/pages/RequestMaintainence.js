import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

function RequestMaintainence() {
  return (
    <>
      <NavBar/>
      <div className='d-flex'>
        <SideBar/>
        <section className='p-5 my-container col-10'>
          <h1>Request maintainence</h1>
          </section>
      </div>
    </>
  )
}

export default RequestMaintainence
