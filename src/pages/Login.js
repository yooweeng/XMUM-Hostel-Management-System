import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { LoginContext } from '../helper/Context'
import LoginSideBar from '../components/LoginSideBar'
import LoginHeaderBar from '../components/LoginHeaderBar'
import './css/Login.css'

export default function Login() {

    const {loginDetails, setLoginDetails} = useContext(LoginContext)
    const [userId,setUserId] = useState('');
    const [password,setPassword] = useState('');
    const [category,setCategory] = useState('student');

    console.log("login page")
    console.log(loginDetails)

    useEffect(() => {
        setLoginDetails(prevDetails => {
            return {...prevDetails, token: null}
        });
    }, [])

    function login(){
        fetch('http://localhost:8080/api/v1/student')
            .then(res => res.json())
            .then(data => verifyLogin(data))
    }
    
    function verifyLogin(data){

        console.log(userId,password,data)

        for(var i=0; i<data.length; i++){
            //if student id and password match for record in database
            if(userId === data[i].student_id && password === data[i].password){
                if(category === 'student'){
                    fetchToken();
                }
                else if(category === 'staff'){
                    // setLoginDetails(prevDetails =>{
                    //     return {isLoggedIn: true, userCategory: 'staff'};
                    // })
                }
                console.log('success')
                //console.log('LoginDetails: '+loginDetails.isLoggedIn+''+loginDetails.userCategory)
                break;
            }
            else if(i === (data.length-1)){
                console.log('fail')
            }
        }
    }

    function fetchToken(){
        fetch('http://localhost:8080/api/v1/login?category=student')
            .then(res => res.json())
            .then(data => setLoginDetails(prevDetails => {
                            return {...prevDetails, isAtLogin: false, token: data.token}
                        }))
    }

    return (
    <>
      {(loginDetails.token) &&
        <Navigate to="/home"/>
      }
      <LoginHeaderBar/>
      <div className='container-fluid px-0'>
          <div className='row w-100'>
              <div className='col-6 ps-5 py-5 pe-0'>
                <div className='card shadow me-5 ms-2 mt-4 py-5'>
                  <h1 className='ms-4 ps-2'>Login</h1>
                  <div className='row mt-4'>
                    <label className="col-2 col-form-label align-self-center p-0 ms-5">User ID:</label>
                    <div className="col-4">
                        <input type="text" className="form-control" value={userId} onChange={e => setUserId(e.target.value)}/>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <label className="col-2 col-form-label align-self-center p-0 ms-5">Password:</label>
                    <div className="col-4">
                        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <label className="col-2 col-form-label align-self-center ms-5 p-0">Category:</label>
                    <div className="col-4">
                        <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
                            <option value="student">Student</option>
                            <option value="staff">Staff</option>
                        </select>
                    </div>
                  </div>
                  <div className='row mt-5 offset-3'>
                    <button className='btn btn-primary col-2 p-0' onClick={login}>Login</button>
                    <Link className='col-2 p-0 ms-3' to='/register'>
                        <button className='btn btn-primary col-12'>Register</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-6 p-0 mt-3 mb-5 sidebar-background'>
                <LoginSideBar/>
              </div>
          </div>
      </div>
    </>
    )
}
