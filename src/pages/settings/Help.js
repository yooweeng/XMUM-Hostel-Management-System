import React from 'react'
import { Link } from 'react-router-dom'

function Help() {
  return (
    <div>
      <nav>
        <ol className="breadcrumb font-breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/settings">Settings</Link></li>
          <li className="breadcrumb-item active">Help</li>
        </ol>
      </nav>
      <h1>Help</h1>
      <div className='card shadow ps-4 pe-5 py-4 mt-4'>
        <h4 className='ps-3'>General</h4>
        <ol>
            <li className='mt-3'>
                <h6>Is on-campus accommodation provided?</h6>
                <p align='justify'>
                    XMUM provides on-campus accommodation to all registered students. Students are encouraged to 
                live in campus residences, as living on campus fosters a spirit of cooperation and camaraderie 
                that develops into lifelong friendships, and facilitates participation in extra-curricular activities 
                through various cultural, recreational and social programmes.
                </p>
            </li>
            <li className='mt-5'>
                <h6>How much is the rental?</h6>
                <p align='justify'>
                The rental ranges from RM 340 to RM 390 per month. Each of the registered student who lives 
                in the campus residences is required to pay a deposit of RM500 (refundable) together with 
                one-semester rental upon check-in.
                </p>
            </li>
            <li className='mt-5'>
                <h6>What security precautions does the University take on campus?</h6>
                <p align='justify'>
                The hostel is guarded by security guards and is under 24 hour CCTV surveillance every day. 
                We have also installed access controller for main entrances of each hostel block and students 
                need to get through by their Student ID card. Unauthorized guests are barred from entering or 
                staying in the compound of student hostels including rooms and communal areas.
                </p>
            </li>
            <li className='mt-5'>
                <h6>Do students need to observe any curfew regulation?</h6>
                <p align='justify'>
                The curfew set for the residences is 12:00 am. Residents who wish to leave or return to the 
                campus ground after 12:00 am must report at the guardhouse with their student IDs.
                </p>
            </li>
            <li className='mt-5'>
                <h6>Are there any laundry facilities available?</h6>
                <p align='justify'>
                Yes, there is a laundry room on the ground floor of each block, providing high-efficiency 
                and fully automatic washing machines and dryers. The machines are coin-operated (RM 4 per barrel).
                </p>
            </li>
            <li className='mt-5'>
                <h6>Are students allowed to stay in the hostel during semester breaks?</h6>
                <p align='justify'>
                Yes, students can stay on campus during semester breaks.
                </p>
            </li>
            <li className='mt-5'>
                <h6>Do students need to bring their own cleaning supplies to clean their rooms?</h6>
                <p align='justify'>
                Yes, students need to bring cleaning supplies, as they are responsible for the tidiness and cleanliness of their own bedrooms.
                </p>
            </li>
            <li className='mt-5'>
                <h6>Is mattress provided in the room?</h6>
                <p align='justify'>
                Yes, we provide quality mattress. However, students need to bring their own 
                pillows and other necessary bedding items.
                </p>
            </li>
            <li className='mt-5'>
                <h6>Is electric fan allowed to be used in the hostel room?</h6>
                <p align='justify'>
                There is an air-conditioner in each room. If it is necessary, students may bring their own electric fan.
                </p>
            </li>
        </ol>
      </div>
    </div>
  )
}

export default Help
