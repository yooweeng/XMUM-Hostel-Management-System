import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { LoginContext } from '../helper/Context'
import HostelFunctions from "./hostelfunctions/HostelFunctions";
import Dashboard from "./Dashboard";
import RequestMaintainence from "./RequestMaintainence";
import ViewReport from "./ViewReport";
import ProvideFeedback from "./ProvideFeedback";
import Settings from "./Settings";
import ChangeHostelPeriod from "./hostelfunctions/ChangeHostelPeriod";
import HostelApplication from "./hostelfunctions/HostelApplication";
import RequestChangeRoom from "./hostelfunctions/RequestChangeRoom";
import RequestRoomCheckout from "./hostelfunctions/RequestRoomCheckout";
import './css/Mainpage.css'

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
            <>
              <h1>Lorem ipsum</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus nunc ut nulla accumsan placerat. Morbi fringilla posuere dignissim. Pellentesque sagittis aliquam suscipit. Sed a dolor volutpat, accumsan leo quis, vehicula quam. Nunc sed enim vulputate, tristique augue quis, sodales erat. Etiam efficitur, ante id sollicitudin placerat, nibh eros euismod ipsum, eget suscipit risus risus ac justo. Nunc ullamcorper aliquet nisi, vitae elementum quam pulvinar iaculis. Nulla tempus orci vitae nisl sollicitudin hendrerit. Nam porta ligula purus, in dapibus ipsum fermentum eget. Morbi tincidunt enim ex, sit amet posuere lacus tempus semper. Duis id arcu sollicitudin, interdum lorem nec, auctor nulla. Maecenas in convallis velit, eu ornare quam. Nulla facilisis tincidunt libero, et placerat mi malesuada vitae. Curabitur gravida dapibus dui, tempus malesuada quam maximus eu. Mauris dapibus luctus convallis.Nulla facilisi. Donec non leo a arcu auctor porttitor ac in lectus. Integer eros ligula, efficitur at tortor sed, vestibulum condimentum turpis. Nulla egestas a felis sed pulvinar. Morbi quis massa non eros semper molestie nec commodo velit. Suspendisse id ante nec libero maximus fermentum vitae vitae velit. Aenean elementum lectus sapien, vel maximus odio ornare vel. Nam non est porta, cursus elit vitae, placerat dui. Etiam aliquam vehicula sem, vel aliquam lacus. Quisque a nisl ornare, lacinia ligula quis, accumsan leo. Suspendisse eget elit sed justo tempus laoreet et id leo.</p>
            </>
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
          {(item === 'settings') &&
            <Settings/>
          }
          </section>
      </div>
    </>
  )
}


