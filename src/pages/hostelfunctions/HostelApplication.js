import React from 'react'
import { Link } from 'react-router-dom'

function HostelApplication() {
  return (
    <>
      <nav>
        <ol class="breadcrumb font-breadcrumb">
          <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li class="breadcrumb-item"><Link to="/hostelfunction">Hostel Functions</Link></li>
          <li class="breadcrumb-item active">Hostel Application</li>
        </ol>
      </nav>
      <h1>hostelapplication</h1>
    </>
  )
}

export default HostelApplication
