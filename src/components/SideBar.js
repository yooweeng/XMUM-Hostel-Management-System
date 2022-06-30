import React from 'react'
import { Link } from 'react-router-dom'
import hmsLogo from '../images/hmsLogo.png'
import './css/SideBar.css'

function SideBar() {

  let token = JSON.parse(sessionStorage.getItem("token"));
  let tokenType;

  if(token != null){
    tokenType = token.slice(0,3);
  }

  return (
    <>
        {(tokenType === 'stu') &&
            <div className='container-fluid px-0'>
                <nav className='navbar navbar-expand d-flex flex-column flex-grow align-item-center h-100 pb-5' id='sidebar'>
                    <Link to='/home'><img className='logo-hms mt-3' src={hmsLogo} alt='Logo of Hostel Management System'/></Link>
                    <ul className='navbar-nav d-flex flex-column mt-5'>
                        <li className='nav-item navigation-item'>
                            <Link to='/dashboard' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-key-fill size-icon"></i><br/>
                            Dashboard
                            </Link>
                        </li>
                        <li className='nav-item navigation-item mt-1'>
                            <Link to='/hosteloverview' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-bank2 size-icon"></i><br/>
                            View Hostel Overview
                            </Link>
                        </li>
                        <li className='nav-item navigation-item mt-1'>
                            <Link to='/hostelfunction' className='nav-link text-light text-center pl-1'>
                            <i className="bi bi-house-door-fill size-icon"></i><br/>
                            Hostel Related Functions
                        </Link>
                        </li>
                        <li className='nav-item navigation-item mt-1'>
                            <Link to='/report' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-receipt size-icon"></i><br/>
                            View Report
                            </Link>
                        </li>
                        <li className='nav-item navigation-item mt-1'>
                            <Link to='/editpendingrequest' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-basket2-fill size-icon"></i><br/>
                            Edit Pending Request
                            </Link>
                        </li>
                        <li className='nav-item navigation-item mt-1'>
                            <Link to='/maintainence' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-droplet-fill size-icon"></i><br/>
                            Request Maintenance
                            </Link>
                        </li>
                        <li className='nav-item navigation-item mt-1'>
                            <Link to='/feedback' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-send-fill size-icon"></i><br/>
                            Provide Feedback
                            </Link>
                        </li>
                        <li className='nav-item navigation-item mt-1'>
                            <Link to='/settings' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-sliders size-icon"></i><br/>
                            Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        }
        {(tokenType === 'adm') &&
            <div className='container-fluid px-0'>
                <nav className='navbar navbar-expand d-flex flex-column flex-grow align-item-center h-100 pb-5' id='sidebar'>
                    <Link to='/home'><img className='logo-hms mt-3' src={hmsLogo} alt='Logo of Hostel Management System'/></Link>
                    <ul className='navbar-nav d-flex flex-column mt-5'>
                        <li className='nav-item navigation-item mt-1'>
                            <Link to='/home' className='nav-link text-light text-center pl-1'>
                            <i className="bi bi-box-arrow-in-down-right size-icon"></i><br/>
                            Pending Hostel<br/>Request
                        </Link>
                        </li><br/>
                        <li className='nav-item navigation-item mt-2'>
                            <Link to='/adminlist' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-file-earmark-person-fill size-icon"></i><br/>
                            Admin List
                            </Link>
                        </li>
                        <li className='nav-item navigation-item mt-1'>
                            <Link to='/addannouncement' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-envelope-fill size-icon"></i><br/>
                            Add Announcement
                            </Link>
                        </li>
                        <li className='nav-item navigation-item mt-1'>
                            <Link to='/requestlog' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-file-ruled-fill size-icon"></i><br/>
                            Hostel Request Record/Log
                            </Link>
                        </li><br/>
                        <li className='nav-item navigation-item mt-2'>
                            <Link to='/generatereport' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-receipt size-icon"></i><br/>
                            Generate Report
                            </Link>
                        </li>
                        <li className='nav-item navigation-item mt-1'>
                            <Link to='/settings' className='nav-link text-light text-center pl-4'>
                            <i className="bi bi-sliders size-icon"></i><br/>
                            Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        }
    </>
  )
}

export default SideBar
