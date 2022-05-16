import React from 'react'
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'

function RequestChangeRoom() {
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

export default RequestChangeRoom
