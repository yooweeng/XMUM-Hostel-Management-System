import React, { useContext, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { LoginContext } from '../helper/Context'
import HostelFunctions from "./student/hostelfunctions/HostelFunctions";
import Dashboard from "./Dashboard";
import RequestMaintainence from "./student/RequestMaintainence";
import ViewReport from "./student/ViewReport";
import ProvideFeedback from "./student/ProvideFeedback";
import Settings from "./settings/Settings";
import ChangeHostelPeriod from "./student/hostelfunctions/ChangeHostelPeriod";
import HostelApplication from "./student/hostelfunctions/HostelApplication";
import RequestChangeRoom from "./student/hostelfunctions/RequestChangeRoom";
import RequestRoomCheckout from "./student/hostelfunctions/RequestRoomCheckout";
import './css/Mainpage.css'
import Profile from './settings/Profile'
import ChangePassword from './settings/ChangePassword'
import RoomDetails from './settings/RoomDetails'
import Help from './settings/Help'
import Home from './Home'
import ViewHostel from './student/ViewHostel'
import AddAnnouncement from './admin/AddAnnouncement'
import AdminList from './admin/AdminList'
import ViewApplication from './ViewApplication'
import HostelRequestRecord from './admin/HostelRequestRecord'
import GenerateReport from './admin/GenerateReport'
import EditPendingRequest from './student/EditPendingRequest'

export default function Mainpage() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext)
  console.log("main page")
  console.log(loginDetails)

  const {item, subitem, subitem2} = useParams()

  useEffect(() => {
    loginDetails.token = JSON.parse(sessionStorage.getItem("token"));
    loginDetails.user = JSON.parse(sessionStorage.getItem("user"));
    if(loginDetails.token){
      setLoginDetails(prevDetails => {
        return {...prevDetails, isAtLogin: false, isAuthorized: true}
      });
    }
    else{
      setLoginDetails(prevDetails => {
      return {...prevDetails, isAtLogin: false}
    })
    }
  }, [])

  return (
    <>
      <NavBar/>
      <div className='d-flex'>
        <SideBar/>
        <section className='p-5 my-container col-10'>
          {(item === 'home') &&
            <Home/>
          }
          {(item === 'dashboard') &&
            <Dashboard/>
          }
          {(item === 'hosteloverview' && subitem == null) &&
            <ViewHostel/>
          }
          {(item === 'hostelfunction' && subitem == null && subitem2 == null) &&
            <HostelFunctions/>
          }
          {(item === 'hostelfunction' && subitem === 'hostelapplication' && subitem2 == null) &&
            <HostelApplication/>
          }
          {(item === 'hostelfunction' && subitem === 'changehostelperiod' && subitem2 == null) &&
            <ChangeHostelPeriod/>
          }
          {(item === 'hostelfunction' && subitem === 'requestroomcheckout' && subitem2 == null) &&
            <RequestRoomCheckout/>
          }
          {(item === 'hostelfunction' && subitem === 'requestchangeroom' && subitem2 == null) &&
            <RequestChangeRoom/>
          }
          {(item === 'hostelfunction' && subitem === 'hostelapplication' && subitem2 === 'hostelselect') &&
            <ViewHostel name="Hostel Application" from={subitem}/>
          }
          {(item === 'hostelfunction' && subitem === 'requestchangeroom' && subitem2 === 'hostelselect') &&
            <ViewHostel name="Request Room Exchange" from={subitem}/>
          }
          {(item === 'maintainence') &&
            <RequestMaintainence/>
          }
          {(item === 'report') &&
            <ViewReport/>
          }
          {(item === 'editpendingrequest') &&
            <EditPendingRequest/>
          }
          {(item === 'feedback') &&
            <ProvideFeedback/>
          }
          {(item === 'settings' && subitem == null) &&
            <Settings/>
          }
          {(item === 'settings' && subitem === 'profile') &&
            <Profile/>
          }
          {(item === 'settings' && subitem === 'changepassword') &&
            <ChangePassword/>
          }
          {(item === 'settings' && subitem === 'roomdetail') &&
            <RoomDetails/>
          }
          {(item === 'settings' && subitem === 'help') &&
            <Help/>
          }
          {(item === 'adminlist') &&
            <AdminList/>
          }
          {(item === 'addannouncement') &&
            <AddAnnouncement/>
          }
          {(item === 'viewapplication') &&
            <ViewApplication/>
          }
          {(item === 'requestlog') &&
            <HostelRequestRecord/>
          }
          {(item === 'generatereport') &&
            <GenerateReport/>
          }
          </section>
      </div>
    </>
  )
}


