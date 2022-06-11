import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
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

export default function Mainpage() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext)
  console.log(loginDetails)

  const {item, subitem} = useParams()

  return (
    <>
      {/* {loginDetails.isLoggedIn === false && (
        <Navigate to='/'/>
      )
      } */}
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
          {(item === 'hostelfunction' && subitem == null) &&
            <HostelFunctions/>
          }
          {(subitem === 'hostelapplication') &&
            <HostelApplication/>
          }
          {(subitem === 'changehostelperiod') &&
            <ChangeHostelPeriod/>
          }
          {(subitem === 'requestroomcheckout') &&
            <RequestRoomCheckout/>
          }
          {(subitem === 'requestchangeroom') &&
            <RequestChangeRoom/>
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
          </section>
      </div>
    </>
  )
}


