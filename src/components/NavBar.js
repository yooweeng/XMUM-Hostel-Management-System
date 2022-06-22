import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../helper/Context'
import xmumLogo from '../images/xmumLogo.png'
import './css/NavBar.css'

function NavBar() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);
  const [activeUser, setActiveUser] = useState();
  let tokenType;

  loginDetails.token = JSON.parse(sessionStorage.getItem("token"));
  //if token exist
  if(loginDetails.token != null){
    tokenType = loginDetails.token.slice(0,3);
  }

  useEffect(() => {
    if(tokenType == "stu"){
      fetch('http://localhost:8080/api/v1/student')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].student_id){
                  setActiveUser(data[i])
                }
              }
            })
    }
    else if(tokenType == "adm"){
      fetch('http://localhost:8080/api/v1/admin')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].adminId){
                  setActiveUser(data[i])
                }
              }
            })
    }
  }, [])
  
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
            {(tokenType === "stu") &&
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
            }
          </div>
          <div className='col-2 item-navbar'>
            <i className="bi bi-unlock-fill size-navbar-icon"></i><br/>
            <div className="dropdown">
              <button className="btn dropdown-toggle status-button" type="button" data-bs-toggle="dropdown">
                Profile
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item disabled" to="#">
                    Welcome, 
                    {(!activeUser) &&
                      <span> Guest</span>
                    }
                    {(activeUser && (tokenType == "stu")) &&
                      <span> {activeUser.fullname}</span>
                    }
                    {(activeUser && (tokenType == "adm")) &&
                      <span> {activeUser.name}</span>
                    }
                  </Link>
                  </li>
                <li><Link className="dropdown-item" to="/settings/profile">Account Details</Link></li>
                <li><Link className="dropdown-item" to="/settings/changepassword">Change Password</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/" 
                        onClick={() => {
                          setLoginDetails(prevDetails => {
                            return {...prevDetails, isAtLogin: true, token: null}
                          });
                          sessionStorage.setItem("token",null);
                          sessionStorage.setItem("user",null);
                        }}>Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
