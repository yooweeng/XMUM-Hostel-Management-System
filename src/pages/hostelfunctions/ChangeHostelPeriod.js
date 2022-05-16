import React from 'react'
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'

function ChangeHostelPeriod() {
  return (
    <>
      <NavBar/>
      <div className='d-flex'>
        <SideBar/>
        <section className='p-4 my-container col-10'>
          <h1>Provide feedbacks</h1>
          </section>
      </div>
    </>
  )
}

export default ChangeHostelPeriod
