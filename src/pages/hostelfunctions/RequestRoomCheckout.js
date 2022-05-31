import React from 'react'
import { Link } from 'react-router-dom'

function RequestRoomCheckout() {
  return (
    <>
      <nav>
        <ol class="breadcrumb font-breadcrumb">
          <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li class="breadcrumb-item"><Link to="/hostelfunction">Hostel Functions</Link></li>
          <li class="breadcrumb-item active">Request Room Checkout</li>
        </ol>
      </nav>
      <h1>requestroomcheckout</h1>
    </>
  )
}

export default RequestRoomCheckout
