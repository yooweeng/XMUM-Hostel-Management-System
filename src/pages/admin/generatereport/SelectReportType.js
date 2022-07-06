import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/SelectReportType.css'

function SelectReportType() {
  return (
    <>
        <nav className='ms-4'>
            <ol className="breadcrumb font-breadcrumb">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
            <li className="breadcrumb-item active">Select Report</li>
            </ol>
        </nav>
        <h1 className='ms-4'>Select Report</h1>
        <div className='container ms-4'>
            <Link to='/reporttype/applicationrequestreport'>
                <div className="row row-cols-2 g-4 mt-2">
                    <div className="card shadow text-dark bg-primary me-2">
                        <div className="card-body">
                            <div className='row'>
                                <i className="col-2 bi bi-house-door-fill size-icon-select-report"></i>
                                <div className='col-6 offset-3'>
                                    <h5 className="card-title">Application Request Record</h5>
                                    <p className="card-text">Function to view application request record</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/reporttype/maintenancereport'>
                <div className="row row-cols-2 g-4 mt-2">
                    <div className="card shadow text-dark bg-primary me-2">
                        <div className="card-body">
                            <div className='row'>
                                <i className="col-2 bi bi-droplet-fill size-icon-select-report"></i>
                                <div className='col-6 offset-3'>
                                    <h5 className="card-title">Maintenance Record</h5>
                                    <p className="card-text">Function to view maintenance records</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/reporttype/feedbackreport'>
                <div className="row row-cols-2 g-4 mt-2">
                    <div className="card shadow text-dark bg-primary me-2">
                        <div className="card-body">
                            <div className='row'>
                            <i className="col-2 bi bi-send-fill size-icon-select-report"></i>
                                <div className='col-6 offset-3'>
                                    <h5 className="card-title">Feedback Record</h5>
                                    <p className="card-text">Function to view feedback records</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}

export default SelectReportType
