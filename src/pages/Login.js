import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { LoginContext } from '../helper/Context'
import LoginSideBar from '../components/LoginSideBar'
import LoginHeaderBar from '../components/LoginHeaderBar'
import './css/Login.css'

export default function Login() {

    const {loginDetails, setLoginDetails} = useContext(LoginContext)
    const [studentId,setStudentId] = useState('')
    const [password,setPassword] = useState('')
    const [category,setCategory] = useState('student')

    console.log(loginDetails)

    function login(){
        fetch('http://localhost:8080/api/v1/student')
            .then(res => res.json())
            .then(data => verifyLogin(data))
    }
    
    function verifyLogin(data){

        console.log(studentId,password,data)

        for(var i=0; i<data.length; i++){
            //if student id and password match for record in database
            if(studentId === data[i].student_id && password === data[i].password){
                if(category === 'student'){
                    setLoginDetails(prevDetails =>{
                        return {isLoggedIn: true, userCategory: 'student'}
                    })
                }
                else if(category === 'staff'){
                    setLoginDetails(prevDetails =>{
                        return {isLoggedIn: true, userCategory: 'staff'}
                    })
                }
                console.log('success')
                console.log('LoginDetails: '+loginDetails.isLoggedIn+''+loginDetails.userCategory)
                break;
            }
            else if(i === (data.length-1)){
                console.log('fail')
            }
        }
    }

    return (
    <>
      {loginDetails.isLoggedIn===true && (
          <Navigate to="/home"/>
      )}
      <LoginHeaderBar/>
      <div className='container-fluid px-0'>
          <div className='row w-100'>
              <div className='col-6 ps-5 py-5 pe-0'>
                  <h1>Login</h1>
                  <p>student id: </p><input value={studentId} onChange={e => setStudentId(e.target.value)}/><br/>
                  <p>password: </p><input value={password} onChange={e => setPassword(e.target.value)}/><br/><br/>
                  Category: <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                  </select><br/><br/>
                  <button className='btn btn-primary' onClick={login}>Login</button>
                  <Link to='/register'>
                    <button className='btn btn-primary'>Register</button>
                  </Link>
              </div>
              <div className='col-6 p-0 mt-3 mb-5 sidebar-background'>
                <LoginSideBar/>
              </div>
          </div>
      </div>
    </>
    )
}
