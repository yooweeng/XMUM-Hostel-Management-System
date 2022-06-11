import React from 'react'
import { Link } from 'react-router-dom'
import xmumLogo from '../images/xmumLogo.png'
import './css/NavBar.css'

function NavBar() {
  return (
    <div>
      <div className='container-fluid text-center py-1 logo-background'>
        <div className='row'>
          <div className='col-8'>
            <Link to='/home'>
              <img src={xmumLogo} className='logo-xmum' alt='Logo of XMUM'/>
            </Link>
          </div>
          <div className='col-2'>
            <a href='#' className='nav-link text-dark text-break' data-bs-toggle="modal" data-bs-target="#announcementModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"/>
              </svg><br/>
              Announcement
              <div className="modal fade" id="announcementModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Announcement(s)</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                      Announcement 1
                      <br/>content
                    </div>
                    <div className="modal-body">
                      Announcement 2
                      <br/>content
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-success">Finish Reading</button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className='col-2 item-navbar'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-unlock-fill" viewBox="0 0 16 16">
                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
            </svg><br/>
            <div className="dropdown">
              <button className="btn dropdown-toggle status-button" type="button" data-bs-toggle="dropdown">
                Profile
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item disabled" href="#">Welcome, Ng Yoo Wee</a></li>
                <li><a className="dropdown-item" href="#">Account Details</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
