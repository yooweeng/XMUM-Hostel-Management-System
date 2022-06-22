import React from 'react'
import './css/Home.css'
import '../App.css'
import AdminList from './admin/AdminList'
import StudentHome from './student/StudentHome'

function Home() {

  let token = JSON.parse(sessionStorage.getItem("token"));
  let tokenType;
  
  if(token != null){
    tokenType = token.slice(0,3);
  }

  return (
    <>
        {(tokenType == "stu") &&
          <StudentHome/>
        }
        {(tokenType == "adm") &&
          <AdminList/>
        }
    </>
  )
}

export default Home
