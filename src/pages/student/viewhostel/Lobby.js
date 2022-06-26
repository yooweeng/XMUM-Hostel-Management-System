import React from 'react'
import { Link } from 'react-router-dom'

function Lobby(props) {
  return (
    <div>
        <nav>
            <ol className="breadcrumb font-breadcrumb">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/hosteloverview">Hostel Overview</Link></li>
            <li className="breadcrumb-item active">Hostel Description</li>
            </ol>
        </nav>
        <h1 className="change-hover-color" >Hostel Description</h1>
        {props.block}
    </div>
  )
}

export default Lobby
