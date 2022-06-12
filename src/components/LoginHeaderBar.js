import React from 'react'
import xmumLogo from '../images/xmumLogo.png'
import hmsLogo from '../images/hmsLogo.png'
import './css/LoginHeaderBar.css'
import '../App.css'
import { Link } from 'react-router-dom'

function LoginHeaderBar() {
  return (
    <>
      <div className='container-fluid header-background center-text'>
        <Link to='/'>
          <img className='logo-xmum-headerbar' src={xmumLogo} alt='Logo of XMUM'/>
        </Link>
        <img className='logo-xmum-headerbar' src={hmsLogo} alt='Logo of XMUM Hostel Management System'/>
      </div>
    </>
  )
}

export default LoginHeaderBar
