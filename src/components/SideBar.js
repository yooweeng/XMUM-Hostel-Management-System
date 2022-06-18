import React from 'react'
import { Link } from 'react-router-dom'
import hmsLogo from '../images/hmsLogo.png'
import './css/SideBar.css'

function SideBar() {

  return (
    <>
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
                        <Link to='/maintainence' className='nav-link text-light text-center pl-4'>
                        <i className="bi bi-droplet-fill size-icon"></i><br/>
                        Request Maintainence
                        </Link>
                    </li>
                    <li className='nav-item navigation-item mt-1'>
                        <Link to='/report' className='nav-link text-light text-center pl-4'>
                        <i className="bi bi-receipt size-icon"></i><br/>
                        View Report
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
    </>
  )
}

export default SideBar
