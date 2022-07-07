import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Help() {

  const[faqs, setFaqs] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/faq')
            .then(res => res.json())
            .then(data => {setFaqs(data)});
  }, [])

  console.log(faqs)

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
        {faqs && faqs.map((item, index) => {

          return(
            <li key={item.seq_id} className='mt-5'>
                <h6>{item.question}</h6>
                <p align='justify'>
                    {item.answer}
                </p>
            </li>
          )
        })
        }
        </ol>
      </div>
    </div>
  )
}

export default Help
