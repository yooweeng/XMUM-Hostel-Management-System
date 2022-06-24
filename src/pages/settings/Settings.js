import React from 'react'
import '../css/Settings.css'
import profileImg from '../../images/settingsProfile.png'
import changePasswordImg from '../../images/settingsChangePassword.png'
import helpImg from '../../images/settingsHelp.png'
import roomDetailsImg from '../../images/settingsRoomDetails.png'
import { Link } from 'react-router-dom'

function Settings() {

  let token = JSON.parse(sessionStorage.getItem("token"));
  let tokenType;
  
  if(token != null){
    tokenType = token.slice(0,3);
  }
  
  return (
    <>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item active">Settings</li>
        </ol>
      </nav>
      <h1>Settings</h1>
      <div className="row row-cols-3 g-4 mt-2">
        <div className="col">
          <Link to='/settings/profile'>
            <div className="row card shadow text-dark bg-primary me-2">
              <div className="row card-body">
                <img src={profileImg} className="card-img-left col-6" height="150" alt="..."/>
                <div className='col-6 center-card'>
                  <p className="card-text">Function to view or edit user profile</p>
                  <h5 className="card-title">View Profile</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to='/settings/changepassword'>
            <div className="row card shadow text-dark bg-primary me-2">
              <div className="row card-body">
                <img src={changePasswordImg} className="card-img-left col-6" height="150" alt="..."/>
                <div className='col-6 center-card'>
                  <p className="card-text">Function to change user password</p>
                  <h5 className="card-title">Change Password</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {(tokenType == "stu") &&
          <div className="col">
            <Link to='/settings/roomdetail'>
              <div className="row card shadow text-dark bg-primary me-0">
                <div className="row card-body">
                  <img src={roomDetailsImg} className="card-img-left col-6" height="150" alt="..."/>
                  <div className='col-6 center-card'>
                    <p className="card-text">Function to view room details</p>
                    <h5 className="card-title">Room Details</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        }
        <div className="col">
          <Link to='/settings/help'>
            <div className="row card shadow text-dark bg-primary me-2">
              <div className="row card-body">
                <img src={helpImg} className="card-img-left col-6" height="150" alt="..."/>
                <div className='col-6 center-card'>
                  <p className="card-text">Function to provide guide to the user</p>
                  <h5 className="card-title">Help</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Settings
