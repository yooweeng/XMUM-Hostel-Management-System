import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { LoginContext } from '../helper/Context'
import './css/Home.css'

export default function StudentHomepage() {

  const {loginDetails, setLoginDetails} = useContext(LoginContext)
  console.log(loginDetails)

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
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus nunc ut nulla accumsan placerat. Morbi fringilla posuere dignissim. Pellentesque sagittis aliquam suscipit. Sed a dolor volutpat, accumsan leo quis, vehicula quam. Nunc sed enim vulputate, tristique augue quis, sodales erat. Etiam efficitur, ante id sollicitudin placerat, nibh eros euismod ipsum, eget suscipit risus risus ac justo. Nunc ullamcorper aliquet nisi, vitae elementum quam pulvinar iaculis. Nulla tempus orci vitae nisl sollicitudin hendrerit. Nam porta ligula purus, in dapibus ipsum fermentum eget. Morbi tincidunt enim ex, sit amet posuere lacus tempus semper. Duis id arcu sollicitudin, interdum lorem nec, auctor nulla. Maecenas in convallis velit, eu ornare quam. Nulla facilisis tincidunt libero, et placerat mi malesuada vitae. Curabitur gravida dapibus dui, tempus malesuada quam maximus eu. Mauris dapibus luctus convallis.Nulla facilisi. Donec non leo a arcu auctor porttitor ac in lectus. Integer eros ligula, efficitur at tortor sed, vestibulum condimentum turpis. Nulla egestas a felis sed pulvinar. Morbi quis massa non eros semper molestie nec commodo velit. Suspendisse id ante nec libero maximus fermentum vitae vitae velit. Aenean elementum lectus sapien, vel maximus odio ornare vel. Nam non est porta, cursus elit vitae, placerat dui. Etiam aliquam vehicula sem, vel aliquam lacus. Quisque a nisl ornare, lacinia ligula quis, accumsan leo. Suspendisse eget elit sed justo tempus laoreet et id leo.</p>
        </section>
      </div>
    </>
  )
}


