import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    const [studentId,setStudentId] = useState('')
    const [password,setPassword] = useState('')

    function login(){
        fetch('http://localhost:8080/api/v1/student')
            .then(res => res.json())
            .then(data => verifyLogin(data))
    }
    
    function verifyLogin(data){
        console.log(studentId,password,data)
        for(var i=0; i<data.length; i++){
            if(studentId === data[i].student_id && password === data[i].password){
                console.log('success')
                break;
            }
            else if(i === (data.length-1)){
                console.log('fail')
            }
        }
    }

    return (
    <>
      <h1>Login</h1>
      <p>student id: </p><input value={studentId} onChange={e => setStudentId(e.target.value)}/><br/>
      <p>password: </p><input value={password} onChange={e => setPassword(e.target.value)}/><br/><br/>
      <button onClick={login}>Login</button>
      <Link to='/register'><button>Register</button></Link>
      <p id="output"></p>
    </>
    )
}
