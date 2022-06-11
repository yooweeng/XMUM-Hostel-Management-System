import React from 'react'
import { Link } from 'react-router-dom'
import blockD from '../images/blockD.JPG'
import blockLY from '../images/blockLY.JPG'
import './css/Home.css'
import '../App.css'

function Home() {
  return (
    <>
        <h1 className='center-text'>Welcome to XMUMHMS</h1>
        <div className='card shadow home-font px-5 py-4 mt-4'>
            Welcome to XMUMHMS, the Hostel Management System at Xiamen 
            University Malaysia.<br/><br/>
            XMUM provides on-campus accommodation to all registered 
            students. Students are encouraged to live in campus 
            residences, as living on campus fosters a spirit of 
            cooperation and camaraderie that develops into lifelong 
            friendships, and facilitates participation in extra-curricular 
            activities through various cultural, recreational and social 
            programmes.<br/><br/>
            <h5>Rental:</h5>
            <div className='row center-justify fs-6'>
                <span className='col-4'>Twin sharing room (Block D) with en-suite bathroom RM340 per student per month</span>
                <span className='col-4 offset-1 ps-5'>Twin sharing room (Block LY) with en-suite bathroom RM390 per student per month </span>
            </div>
            <div className='row center-justify'>
                <img className='col-4 home-img' src={blockD} alt='Image of hostel of XMUM'/>
                <img className='col-4 home-img offset-1' src={blockLY} alt='Image of hostel of XMUM'/>
            </div><br/>
            Each of the registered student who lives in the campus 
            residences is required to pay a deposit of RM500 (refundable) 
            together with one-semester rental upon check-in.<br/><br/>
            <h5>Excellent Facilities:</h5>
            <ul>
                <li>Bed, study table, chair, wardrobe</li>
                <li>Internet WI-FI connection in every room</li>
                <li>An air-conditioner in every room</li>
                <li>
                    A common pantry on each floor equipped with a microwave 
                    oven, a refrigerator, a kettle and a water dispenser
                </li>
                <li>A laundry room</li>
                <li>A car parking area</li>
                <li> 
                    A five-floor student activity centre beside the residences, 
                    including a canteen, a shop, a gym, a table tennis room, a 
                    gymnastics room, a martial arts room, a yoga room, a swimming pool, 
                    a lounge, prayer rooms, etc.
                </li>
            </ul>
            <span className='mt-5'>Kindly click&nbsp;
            <Link to='/settings/help'>here</Link>
            &nbsp;for more online user frequently asked questions.</span>
        </div>
    </>
  )
}

export default Home
