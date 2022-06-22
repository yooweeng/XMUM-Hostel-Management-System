import React, { useContext, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { LoginContext } from '../helper/Context'
import HostelFunctions from "./hostelfunctions/HostelFunctions";
import Dashboard from "./Dashboard";
import RequestMaintainence from "./RequestMaintainence";
import ViewReport from "./ViewReport";
import ProvideFeedback from "./ProvideFeedback";
import Settings from "./settings/Settings";
import ChangeHostelPeriod from "./hostelfunctions/ChangeHostelPeriod";
import HostelApplication from "./hostelfunctions/HostelApplication";
import RequestChangeRoom from "./hostelfunctions/RequestChangeRoom";
import RequestRoomCheckout from "./hostelfunctions/RequestRoomCheckout";
import './css/Mainpage.css'
import Profile from './settings/Profile'
import ChangePassword from './settings/ChangePassword'
import RoomDetails from './settings/RoomDetails'
import Help from './settings/Help'
import Home from './Home'
import ViewHostel from './viewhostel/ViewHostel'
import Lobby from './viewhostel/Lobby'
import ErrorPage from './ErrorPage'
import Footer from '../components/Footer'
import AddAnnouncement from './admin/AddAnnouncement'

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
          {(item === 'hosteloverview' && subitem === 'lobby') &&
            <Lobby block={subitem2.substring(5).toUpperCase()}/>
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
          {(item === 'addannouncement') &&
            <AddAnnouncement/>
          }
          </section>
      </div>
    </>
  )
}


