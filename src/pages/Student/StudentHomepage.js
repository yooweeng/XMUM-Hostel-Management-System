import React, { useContext } from 'react'
import { LoginContext } from '../../helper/Context'

export default function StudentHomepage() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext)
  console.log(loginDetails)

  return (
    <div>
      Here is student home page
    </div>
  )
}
