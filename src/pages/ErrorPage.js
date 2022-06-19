import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../helper/Context'

function ErrorPage() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext)
  console.log("error page")
  console.log(loginDetails)

  return (
    <div>
      Error
      <Link to='/'>
          <button className='btn btn-primary' 
            onClick={() => setLoginDetails(prevDetails => {
              return {...prevDetails, isAtLogin:true}
            })}>
              Register
          </button>
      </Link>
    </div>
  )
}

export default ErrorPage
