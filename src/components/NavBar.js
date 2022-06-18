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
              <i className="bi bi-envelope-open-fill"></i><br/>
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
            <i className="bi bi-unlock-fill size-navbar-icon"></i><br/>
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
