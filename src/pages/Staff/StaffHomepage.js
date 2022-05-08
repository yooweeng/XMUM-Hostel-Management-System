import React, { useContext } from 'react'
import { LoginContext } from '../../helper/Context'


export default function StaffHomepage() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext)
  console.log(loginDetails)

  return (
    <div>
      Here is staff home page
    </div>
  )
}
