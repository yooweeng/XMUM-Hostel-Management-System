import React from 'react'
import '../css/Settings.css'
import profileImg from '../../images/settingsProfile.png'
import changePasswordImg from '../../images/settingsChangePassword.png'
import helpImg from '../../images/settingsHelp.png'
import roomDetailsImg from '../../images/settingsRoomDetails.png'
import { Link } from 'react-router-dom'

function Settings() {
  return (
    <>
      <nav>
        <ol class="breadcrumb font-breadcrumb">
          <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li class="breadcrumb-item active">Settings</li>
        </ol>
      </nav>
      <h1>Settings</h1>
      <div class="row row-cols-3 g-4 mt-2">
        <div class="col">
          <Link to='/settings/profile'>
            <div class="row card shadow text-dark bg-primary me-2">
              <div class="row card-body">
                <img src={profileImg} class="card-img-left col-6" height="150" alt="..."/>
                <div className='col-6 center-card'>
                  <p class="card-text">Function to view or edit user profile</p>
                  <h5 class="card-title">View Profile</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col">
          <Link to='/settings/changepassword'>
            <div class="row card shadow text-dark bg-primary me-2">
              <div class="row card-body">
                <img src={changePasswordImg} class="card-img-left col-6" height="150" alt="..."/>
                <div className='col-6 center-card'>
                  <p class="card-text">Function to change user password</p>
                  <h5 class="card-title">Change Password</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col">
          <Link to='/settings/roomdetail'>
            <div class="row card shadow text-dark bg-primary me-0">
              <div class="row card-body">
                <img src={roomDetailsImg} class="card-img-left col-6" height="150" alt="..."/>
                <div className='col-6 center-card'>
                  <p class="card-text">Function to view room details</p>
                  <h5 class="card-title">Room Details</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col">
          <Link to='/settings/help'>
            <div class="row card shadow text-dark bg-primary me-2">
              <div class="row card-body">
                <img src={helpImg} class="card-img-left col-6" height="150" alt="..."/>
                <div className='col-6 center-card'>
                  <p class="card-text">Function to provide guide to the user</p>
                  <h5 class="card-title">Help</h5>
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
