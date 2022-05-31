import React from 'react'
import { Link } from 'react-router-dom'

function ChangeHostelPeriod() {
  return (
    <>
      <nav>
        <ol class="breadcrumb font-breadcrumb">
          <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li class="breadcrumb-item"><Link to="/hostelfunction">Hostel Functions</Link></li>
          <li class="breadcrumb-item active">Change Hostel Period</li>
        </ol>
      </nav>
      <h1>change hostel period</h1>
    </>
  )
}

export default ChangeHostelPeriod
