import React from 'react'
import xmumLogo from '../images/xmumLogo.png'
import hmsLogo from '../images/hmsLogo.png'
import welcome from '../images/welcome.jpg'
import './css/LoginSideBar.css'
import '../App.css'

function LoginSideBar() {
  return (
    <>
    <div>
      <h1 className='text-light center-text pt-4'>Welcome to XMUMHMS</h1>
      <center><img className='login-image center-text' src={welcome} alt='Welcome image of XMUM campus'/></center>
      <p className='text-light py-4 px-4'>
        This system is limited for students and staffs of the campus only. 
        It requires Campus ID and password in order to authenticate the 
        user before accessing the system. The Hostel Management
        System helps to manage hostel related activities more easily.
      </p>
    </div>
    </>
  )
}

export default LoginSideBar
