import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../helper/Context';

function ChangePassword() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  function checkOldPassword(){
    fetch('http://localhost:8080/api/v1/userdetail')
            .then(res => res.json())
            .then(data => {
              for(let i=0; i<data.length; i++){
                if(loginDetails.user == data[i].userId){
                  if(oldPassword == data[i].pw){
                    alert("Password updated successfully, you may now login using the new password.");
                    updatePassword();
                    window.location.reload(false);
                  }
                  else{
                    alert("Wrong old password please try again, the password is not updated.");
                  }
                }
              }
            })
  }

  function updatePassword(){
    fetch(`http://localhost:8080/api/v1/userdetail/${loginDetails.user}`,{
      method: 'PUT',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(
        {
            'pw': newPassword
        }
      )
    })
    .then(res => res.json())
    .then(data => data);
  }

  return (
    <div>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/settings">Settings</Link></li>
          <li className="breadcrumb-item active">Change Password</li>
        </ol>
      </nav>
      <h1 className='ps-4'>Change Password</h1>
      <form>
        <div className='card shadow ps-4 py-4 mt-4'>
            <h4>Password</h4>
            <div className="row col-6 mt-4">
                <label className="col-5 col-form-label">Old Password:</label>
                <div className="col-5">
                    <input type="password" className="form-control" value={oldPassword} onChange={e => {setOldPassword(e.target.value);}}/>
                </div>
            </div>
            <div className="row col-6 mt-4">
                <label className="col-5 col-form-label">New Password:</label>
                <div className="col-5">
                    <input type="password" className="form-control" value={newPassword} onChange={e => {setNewPassword(e.target.value);}}/>
                </div>
            </div>
            <div className="row col-6 mt-4">
                <label className="col-5 col-form-label">Confirm New Password:</label>
                <div className="col-5">
                    <input type="password" className="form-control" value={confirmNewPassword} onChange= {e => {setConfirmNewPassword(e.target.value);}}/>
                </div>
            </div>
            {(confirmNewPassword.length > 0) && (newPassword !== confirmNewPassword) &&
              <div className="form-text text-danger offset-2 ps-5">
                ** Password did not match
              </div>
            }
            <div className="form-group row">
              <div className="col-12 mt-5">
                {(oldPassword === '') || (newPassword === '') || (confirmNewPassword === '') || (newPassword !== confirmNewPassword)
                  ?
                  <button to="/settings/changepassword" type="submit" className="btn btn-primary" disabled>Update Password</button>
                  :
                  <Link to="/settings/changepassword" type="submit" className="btn btn-primary" onClick={() => {checkOldPassword();}}>Update Password</Link>
                }
                
              </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword
