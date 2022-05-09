import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { LoginContext } from '../../helper/Context'
import xmumLogo from '../../images/xmumLogo.png'
import hmsLogo from '../../images/hmsLogo.png'
import './studentcss/StudentHomepage.css'

export default function StudentHomepage() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext)
  console.log(loginDetails)

  return (
    <>
      {/* {loginDetails.isLoggedIn === false && (
        <Navigate to='/'/>
      )
      } */}
      <div class='container-fluid text-center py-1 logo-background'>
        <div class='row'>
          <div class='col-8'>
            <img src={xmumLogo} class='logo-xmum' alt='Logo of XMUM'/>
          </div>
          <div class='col-2'>
            <a href='#' class='nav-link text-dark text-break'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"/>
              </svg><br/>
            Announcement
            </a>
          </div>
          <div class='col-2'>
            <a href='#' class='nav-link text-dark'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-unlock-fill" viewBox="0 0 16 16">
                  <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
              </svg><br/>
            Logout
            </a>
          </div>
        </div>
      </div>
      {/* <div class='d-flex justify-content-center mt-5'>
        <div class="col-2">
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
          </div>
        </div>
        <div class="col-6">
          <p>Hello</p>
        </div>
      </div> */}
      <div class='d-flex'>
        <nav class='navbar navbar-expand d-flex flex-column align-item-center col-2' id='sidebar'>
        <img class='logo-hms mt-3' src={hmsLogo} alt='Logo of Hostel Management System'/>
          <ul class='navbar-nav d-flex flex-column mt-5 h-100'>
            <li class='nav-item navigation-item'>
              <a href='#' class='nav-link text-light text-center pl-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg><br/>
                Hostel Related Functions
              </a>
            </li>
            <li class='nav-item navigation-item'>
              <a href='#' class='nav-link text-light text-center pl-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg><br/>
                Records
              </a>
            </li>
            <li class='nav-item navigation-item'>
              <a href='#' class='nav-link text-light text-center pl-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
                  <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/>
                </svg><br/>
                Request Maintainence
              </a>
            </li>
            <li class='nav-item navigation-item'>
              <a href='#' class='nav-link text-light text-center pl-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                </svg><br/>
                View Report
              </a>
            </li>
            <li class='nav-item navigation-item'>
              <a href='#' class='nav-link text-light text-center pl-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
              </svg><br/>
                Provide Feedback
              </a>
            </li>
            <li class='nav-item navigation-item'>
              <a href='#' class='nav-link text-light text-center pl-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                </svg><br/>
                Settings
                </a>
            </li>
          </ul>
        </nav>
        <section class='p-4 my-container col-10'>
          <h1>Lorem ipsum</h1>
          <p class='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus nunc ut nulla accumsan placerat. Morbi fringilla posuere dignissim. Pellentesque sagittis aliquam suscipit. Sed a dolor volutpat, accumsan leo quis, vehicula quam. Nunc sed enim vulputate, tristique augue quis, sodales erat. Etiam efficitur, ante id sollicitudin placerat, nibh eros euismod ipsum, eget suscipit risus risus ac justo. Nunc ullamcorper aliquet nisi, vitae elementum quam pulvinar iaculis. Nulla tempus orci vitae nisl sollicitudin hendrerit. Nam porta ligula purus, in dapibus ipsum fermentum eget. Morbi tincidunt enim ex, sit amet posuere lacus tempus semper. Duis id arcu sollicitudin, interdum lorem nec, auctor nulla. Maecenas in convallis velit, eu ornare quam. Nulla facilisis tincidunt libero, et placerat mi malesuada vitae. Curabitur gravida dapibus dui, tempus malesuada quam maximus eu. Mauris dapibus luctus convallis.

Nulla facilisi. Donec non leo a arcu auctor porttitor ac in lectus. Integer eros ligula, efficitur at tortor sed, vestibulum condimentum turpis. Nulla egestas a felis sed pulvinar. Morbi quis massa non eros semper molestie nec commodo velit. Suspendisse id ante nec libero maximus fermentum vitae vitae velit. Aenean elementum lectus sapien, vel maximus odio ornare vel. Nam non est porta, cursus elit vitae, placerat dui. Etiam aliquam vehicula sem, vel aliquam lacus. Quisque a nisl ornare, lacinia ligula quis, accumsan leo. Suspendisse eget elit sed justo tempus laoreet et id leo.</p>
        </section>
      </div>
    </>
  )
}


