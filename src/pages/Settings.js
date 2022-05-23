import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import './css/Settings.css'
import profileImg from '../images/settingsProfile.png'
import changePasswordImg from '../images/settingsChangePassword.png'
import helpImg from '../images/settingsHelp.png'
import roomDetailsImg from '../images/settingsRoomDetails.png'

function Settings() {
  return (
    <>
      <NavBar/>
      <div className='d-flex'>
        <SideBar/>
        <section className='p-5 my-container col-10'>
          <nav>
            <ol class="breadcrumb font-breadcrumb">
              <li class="breadcrumb-item"><a href="/home">Home</a></li>
              <li class="breadcrumb-item active">Settings</li>
            </ol>
          </nav>
          <h1>Settings</h1>
          <div class="row row-cols-3 g-4 mt-2">
            <div class="col">
              <div class="row card shadow text-dark bg-primary me-2">
                <div class="row card-body">
                  <img src={profileImg} class="card-img-left col-6" height="150" alt="..."/>
                  <div className='col-6 center-card'>
                    <p class="card-text">Function to view user profile</p>
                    <h5 class="card-title">View Profile</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row card shadow text-dark bg-primary me-2">
                <div class="row card-body">
                  <img src={changePasswordImg} class="card-img-left col-6" height="150" alt="..."/>
                  <div className='col-6 center-card'>
                    <p class="card-text">Function to change user password</p>
                    <h5 class="card-title">Change Password</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row card shadow text-dark bg-primary me-0">
                <div class="row card-body">
                  <img src={roomDetailsImg} class="card-img-left col-6" height="150" alt="..."/>
                  <div className='col-6 center-card'>
                    <p class="card-text">Function to view room details</p>
                    <h5 class="card-title">Room Details</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row card shadow text-dark bg-primary me-2">
                <div class="row card-body">
                  <img src={helpImg} class="card-img-left col-6" height="150" alt="..."/>
                  <div className='col-6 center-card'>
                    <p class="card-text">Function to provide guide to the user</p>
                    <h5 class="card-title">Help</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Settings
