import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

    const [studentId,setStudentId] = useState('')
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function register(){

        fetch('http://localhost:8080/api/v1/student',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    'student_id': studentId,
                    'email': email,
                    'password': password,
                    'fname': fname,
                    'lname': lname
                }
            )
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <>
            <h1>Register</h1>
            <p>student id: </p><input type="text" value={studentId} onChange={e => setStudentId(e.target.value)}/><br/>
            <p>first name: </p><input type="text" value={fname} onChange={e => setFname(e.target.value)}/><br/>
            <p>last name: </p><input type="text" value={lname} onChange={e => setLname(e.target.value)}/><br/>
            <p>email: </p><input type="text" value={email} onChange={e => setEmail(e.target.value)}/><br/>
            <p>password: </p><input type="text" value={password} onChange={e => setPassword(e.target.value)}/><br/><br/>
            <button type="button" onClick={register}>Register</button>
            <Link to='/'><button>Back to Login</button></Link>

            <p id="output"></p>
        </>
    )
}
