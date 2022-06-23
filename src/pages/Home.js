import React from 'react'
import './css/Home.css'
import '../App.css'
import StudentHome from './student/StudentHome'
import PendingHostelRequest from './admin/PendingHostelRequest'

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
          <PendingHostelRequest/>
        }
    </>
  )
}

export default Home
