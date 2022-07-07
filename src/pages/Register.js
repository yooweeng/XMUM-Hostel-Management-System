import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import LoginHeaderBar from '../components/LoginHeaderBar'

export default function Register() {

    const [userId,setUserId] = useState('')
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    function register(){

        fetch('http://localhost:8080/api/v1/student',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    'student_id': userId,
                    'email': email,
                    'fname': fname,
                    'lname': lname
                }
            )
        })
            .then(res => {
                console.log('successful')
                return res.json()
            })
            .then(data => console.log(data));

        fetch('http://localhost:8080/api/v1/userdetail',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        'userId': userId,
                        'category': 'student',
                        'pw': password
                    }
                )
            })
                .then(res => {
                    console.log('successful')
                    return res.json()
                })
                .then(data => console.log(data));
    }

    return (
        <>
            <LoginHeaderBar/>
            <div className='card shadow ms-5 my-5 py-4 col-6'>
                <h1 className='ms-4 ps-2'>Register</h1>
                <div className='row mt-4'>
                    <label className="col-2 col-form-label align-self-center p-0 ms-5">User ID:</label>
                    <div className="col-4">
                        <input type="text" className="form-control" value={userId} onChange={e => setUserId(e.target.value)}/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <label className="col-2 col-form-label align-self-center p-0 ms-5">First Name:</label>
                    <div className="col-4">
                        <input type="text" className="form-control" value={fname} onChange={e => setFname(e.target.value)}/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <label className="col-2 col-form-label align-self-center p-0 ms-5">Last Name:</label>
                    <div className="col-4">
                        <input type="text" className="form-control" value={lname} onChange={e => setLname(e.target.value)}/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <label className="col-2 col-form-label align-self-center p-0 ms-5">Email:</label>
                    <div className="col-4">
                        <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                {(email.length > 0) && (!email.includes('@')) &&
                 <div className="form-text text-danger offset-3">
                    ** Not a proper email format '@' missing
                 </div>
                }
                {(email.length > 0) && (!email.includes('.')) &&
                 <div className="form-text text-danger offset-3">
                    ** Not a proper email format '.' missing
                 </div>
                }
                </div>
                <div className='row mt-3'>
                    <label className="col-2 col-form-label align-self-center p-0 ms-5">Password:</label>
                    <div className="col-4">
                        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <label className="col-2 col-form-label align-self-center p-0 ms-5">Confirm Password:</label>
                    <div className="col-4">
                        <input type="password" className="form-control" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                    </div>
                </div>
                {(confirmPassword.length > 0) && (password !== confirmPassword) &&
                 <div className="form-text text-danger offset-3">
                    ** Password did not match
                 </div>
                }
                <div className="row mt-3">
                    <label className="col-2 col-form-label align-self-center ms-5 p-0">Category:</label>
                    <div className="col-4">
                        <input type="text" className="form-control" placeholder='Student' disabled/>
                    </div>
                </div>
                <div className='row mt-5 offset-3'>
                <button className='btn btn-primary col-2 p-0' onClick={() => {register();}}>Register</button>
                <Link className='col-2 p-0 ms-3' to='/'>
                    <button className='btn btn-primary col-12'>Back</button>
                </Link>
                </div>
            </div>
        </>
    )
}
