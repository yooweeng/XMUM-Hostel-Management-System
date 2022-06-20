import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../helper/Context'

function ErrorPage() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext)
  const navigate = useNavigate();
  console.log("error page")
  console.log(loginDetails)

  return (
    <div className='card shadow mt-5 mx-5 p-5'>
      <h2 className='text-danger center-text'>Access denied</h2>
      <p className='center-text'>
        You are trying to access a resource that it should not be 
        allowed based on the given credentials.<br/> 
        Please contact the administrator on the privilege given, if you 
        should be authorized for the request resource.
      </p>
      <div className='row center-justify'>
        <div className='col-1 ms-4'>
          <Link to='/'>
              <button className='btn btn-primary' 
                onClick={() => setLoginDetails(prevDetails => {
                  return {...prevDetails, isAtLogin:true}
                })}>
                  Login
              </button>
          </Link>
        </div>
        <div className='col-1'>
          <button className='btn btn-primary' onClick={() => navigate(-1)}>
              Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
