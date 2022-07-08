import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../helper/Context';

function Profile() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);
  const [activeUser, setActiveUser] = useState();

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  loginDetails.token = JSON.parse(sessionStorage.getItem("token"));
  let tokenType = loginDetails.token.slice(0,3);

  useEffect(() => {
    
    if(tokenType == "stu"){
      fetch('http://localhost:8080/api/v1/student')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].student_id){
                  setActiveUser(data[i])
                }
              }
            })
    }
    else if(tokenType == "adm"){
      fetch('http://localhost:8080/api/v1/admin')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].adminId){
                  setActiveUser(data[i])
                }
              }
            })
    }
  }, [])

  function updateAdmin(){
    fetch(`http://localhost:8080/api/v1/admin/${activeUser.seq_id}`,{
      method: 'PUT',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
        {
            'fname': fname,
            'lname': lname
        }
      )
    })
    .then(res => res.json())
    .then(data => data)
  }

  function updateStudent(){
    fetch(`http://localhost:8080/api/v1/student/${activeUser.seq_id}`,{
      method: 'PUT',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
        {
            'fname': fname,
            'lname': lname
        }
      )
    })
    .then(res => res.json())
    .then(data => data);
  }

  return (
    <>
      <nav>
          <ol className="breadcrumb font-breadcrumb">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/settings">Settings</Link></li>
            <li className="breadcrumb-item active">Profile</li>
          </ol>
      </nav>
      {(activeUser && (tokenType == "adm")) &&
        <>
          <h1 className='ps-4'>Profile</h1>
          <form>
            <div className='card shadow ps-4 py-4 mt-4'>
              <div className='row form-group'>
                <h4>User Details</h4>
                <div className="row col-4 mt-3">
                  <label className="col-4 col-form-label">Admin ID:</label>
                  <div className="col-8">
                    <input type="text" className="form-control" 
                    placeholder=
                    {(!activeUser)
                      ?
                      'na'
                      :
                      activeUser.adminId
                    }
                    disabled/>
                  </div>
                </div>
                <div className="row col-4 offset-md-1 mt-3">
                  <label className="col-5 col-form-label">Admin Name:</label>
                  <div className="col-7">
                    <input type="text" className="form-control" 
                    placeholder=
                    {(!activeUser)
                      ?
                      'na'
                      :
                      activeUser.name
                    }
                    disabled/>
                  </div>
                </div>
              </div>
              <h4 className='mt-5'>Display Name</h4>
              <div className='row form-group mt-3'>
                <div className="row col-4">
                  <label className="col-4 col-form-label">First Name:</label>
                  <div className="col-8">
                    <input type="text" className="form-control" value={fname} onChange={e => {setFname(e.target.value);}}/>
                  </div>
                </div>
                <div className="row col-4 offset-md-1">
                  <label className="col-5 col-form-label">Last Name:</label>
                  <div className="col-7">
                    <input type="text" className="form-control" value={lname} onChange={e => {setLname(e.target.value);}}/>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                  <div className="col-12 mt-5">
                    <button type="submit" className="btn btn-primary"
                     onClick={ () => {
                      updateAdmin();
                      alert('The user details are updated with the information provided.')
                     }}>Update Profile</button>
                  </div>
              </div>
            </div>
          </form>
        </>
      }
      {(activeUser && (tokenType == "stu")) &&
        <>
          <h1 className='ps-4'>Profile</h1>
          <form>
            <div className='card shadow ps-4 py-4 mt-4'>
              <div className='row form-group'>
                <h4>User Details</h4>
                <div className="row col-4 mt-3">
                  <label className="col-4 col-form-label">Student ID:</label>
                  <div className="col-8">
                    <input type="text" className="form-control" 
                    placeholder=
                    {(!activeUser)
                      ?
                      'na'
                      :
                      activeUser.student_id
                    }
                    disabled/>
                  </div>
                </div>
                <div className="row col-4 offset-md-1 mt-3">
                  <label className="col-5 col-form-label">Student Name:</label>
                  <div className="col-7">
                    <input type="text" className="form-control" 
                    placeholder=
                    {(!activeUser)
                      ?
                      'na'
                      :
                      activeUser.fullname
                    }
                    disabled/>
                  </div>
                </div>
              </div>
              <div className='row form-group mt-4'>
                <div className="row col-4">
                  <label className="col-4 col-form-label">Nationality:</label>
                  <div className="col-8">
                    <input type="text" className="form-control" 
                    placeholder=
                    {(!activeUser)
                      ?
                      'na'
                      :
                      activeUser.nationality
                    }
                    disabled/>
                  </div>
                </div>
                <div className="row col-5  offset-md-1 ">
                  <label className="col-6 col-form-label">NRIC/Passport Number:</label>
                  <div className="col-5">
                    <input type="text" className="form-control" 
                    placeholder=
                    {(!activeUser)
                      ?
                      'na'
                      :
                      activeUser.nric_passport
                    }
                    disabled/>
                  </div>
                </div>
              </div>
              <h4 className='mt-5'>Display Name</h4>
              <div className='row form-group mt-3'>
                <div className="row col-4">
                  <label className="col-4 col-form-label">First Name:</label>
                  <div className="col-8">
                    <input type="text" className="form-control" value={fname} onChange={e => {setFname(e.target.value);}}/>
                  </div>
                </div>
                <div className="row col-4 offset-md-1">
                  <label className="col-5 col-form-label">Last Name:</label>
                  <div className="col-7">
                    <input type="text" className="form-control" value={lname} onChange={e => {setLname(e.target.value);}}/>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                  <div className="col-12 mt-5">
                    <button type="submit" className="btn btn-primary"
                     onClick={() => {
                      updateStudent();
                      alert('The user details are updated with the information provided.')
                     }}>Update Profile</button>
                  </div>
              </div>
            </div>
          </form>
        </>
      }
    </>
  )
}

export default Profile
