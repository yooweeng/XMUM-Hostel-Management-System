import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../helper/Context';

function RoomDetails() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);
  const [activeUserHostel, setActiveUserHostel] = useState();

  useEffect(() => {
      fetch('http://localhost:8080/api/v1/hostel')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].user_id){
                  setActiveUserHostel(data[i])
                }
              }
            });
    }
  , [])
  
  return (
    <div>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/settings">Settings</Link></li>
          <li className="breadcrumb-item active">Room Details</li>
        </ol>
      </nav>
      <h1 className='ps-4'>Room Details</h1>
      <form>
        <div className='card shadow ps-5 py-4 mt-4'>
          <h4>Details</h4>
          <div className="row col-5 mt-4">
            <label className="col-4 col-form-label">Room Status:</label>
            <div className="col-5">
                <input type="text" className="form-control" 
                placeholder=
                {(!activeUserHostel)
                  ?
                  'na'
                  :
                  activeUserHostel.status
                }
                 disabled/>
            </div>
          </div>
          <div className="row col-5 mt-4">
            <label className="col-4 col-form-label">Block Number:</label>
            <div className="col-5">
                <input type="text" className="form-control" 
                placeholder=
                {(!activeUserHostel)
                  ?
                  'na'
                  :
                  activeUserHostel.block
                }
                 disabled/>
            </div>
          </div>
          <div className="row col-5 mt-4">
            <label className="col-4 col-form-label">Wing Number:</label>
            <div className="col-5">
                <input type="text" className="form-control" 
                placeholder=
                {(!activeUserHostel)
                  ?
                  'na'
                  :
                  activeUserHostel.wing_no
                }
                 disabled/>
            </div>
          </div>
          <div className="row col-5 mt-4">
            <label className="col-4 col-form-label">Room Number:</label>
            <div className="col-5">
                <input type="text" className="form-control" 
                placeholder=
                {(!activeUserHostel)
                  ?
                  'na'
                  :
                  activeUserHostel.room_no
                }
                 disabled/>
            </div>
          </div>
          <div className="row col-7 mt-4">
            <label className="col-3 col-form-label">Room Type:</label>
            <div className="col-8 ps-1">
                <input type="text" className="form-control" 
                placeholder=
                {(!activeUserHostel)
                  ?
                  'na'
                  :
                  activeUserHostel.room_type
                }
                 disabled/>
            </div>
          </div>
          <div className="form-group row">
              <div className="col-12 mt-4">
                <Link to='/settings'>
                    <button type="submit" className="btn btn-primary">Back</button>
                </Link>
              </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RoomDetails
