import React from 'react'
import './css/Footer.css'

function Footer() {
  return (
    <>
        <footer>
            <div className='container-fluid footer pt-5 pb-4'>
                <div className='row'>
                    <div className='col-4 offset-1'>
                        <p>Contact us:
                            <br/>
                            <br/>Xiamen University Malaysia
                            <br/>Email: enquiry@xmu.edu.my
                            <br/>Contact: +60123456789
                        </p>
                    </div>
                    <div className='col-4 offset-2'>
                        <p>Our location:
                            <br/>
                            <br/>Jalan Sunsuria, Bandar Sunsuria, 43900 Sepang, Selangor
                            <br/>Xiamen University Malaysia
                        </p>
                    </div>
                </div>
                <div className='row text-center'>
                    <p>&#169; XMUMHMS, swe1904867</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
