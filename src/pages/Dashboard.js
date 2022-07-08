import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../helper/Context';

function Dashboard() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);
  const [activeUser, setActiveUser] = useState();

  let token = JSON.parse(sessionStorage.getItem("token"));
  let tokenType;
  
  if(token != null){
    tokenType = token.slice(0,3);
  }

  if(tokenType != 'stu'){
    setLoginDetails(prevDetails => {
      return {...prevDetails, isAuthorized: false}
    });
  }

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/student')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].student_id){
                  setActiveUser(data[i])
                }
              }
            })
  }, [])

  return (
    <>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
      <h1>Dashboard</h1>
      <div className="card mt-5">
        <h5 className="card-header">Profile</h5>
        <table className="table">
          <tbody>
            <tr className='table-primary'>
                <td>Status: </td>
                <td>
                    {(!activeUser)
                      ?
                      <span>na</span>
                      :
                      <span>{activeUser.status}</span>
                    }
                </td>
              </tr>
            <tr>
              <td>Nationality: </td>
              <td>
                    {(!activeUser)
                      ?
                      <span>na</span>
                      :
                      <span>{activeUser.nationality}</span>
                    }
              </td>
            </tr>
            <tr className='table-primary'>
              <td>Student Name: </td>
              <td>
                  {(!activeUser)
                    ?
                    <span>na</span>
                    :
                    <span>{activeUser.fullname}</span>
                  }
              </td>
            </tr>
            <tr>
              <td>Student ID: </td>
              <td>
                  {(!activeUser)
                    ?
                    <span>na</span>
                    :
                    <span>{activeUser.student_id}</span>
                  }
              </td>
            </tr>
            <tr className='table-primary'>
              <td>NRIC/Passport Number: </td>
              <td>
                  {(!activeUser)
                    ?
                    <span>na</span>
                    :
                    <span>{activeUser.nric_passport}</span>
                  }
              </td>
            </tr>
            <tr>
              <td>Programme: </td>
              <td>
                  {(!activeUser)
                    ?
                    <span>na</span>
                    :
                    <span>{activeUser.programme}</span>
                  }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card mt-4">
        <h5 className="card-header">Room</h5>
        <table className="table">
          <tbody>
            <tr className='table-primary'>
              <td>Room Status: </td>
              <td>In Stay</td>
            </tr>
            <tr>
              <td>Room Number (if any): </td>
              <td>D2-D505</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Dashboard
