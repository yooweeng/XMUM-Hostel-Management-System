import React from 'react'
import { Link } from 'react-router-dom'

function RequestChangeRoom() {
  return (
    <>
      <nav>
        <ol class="breadcrumb font-breadcrumb">
          <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li class="breadcrumb-item"><Link to="/hostelfunction">Hostel Functions</Link></li>
          <li class="breadcrumb-item active">Request Change Room</li>
        </ol>
      </nav>
      <h1>requestchangeroom</h1>
    </>
  )
}

export default RequestChangeRoom
