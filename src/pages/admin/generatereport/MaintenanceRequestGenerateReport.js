import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";

function MaintenanceRequestGenerateReport() {
    
    const [maintenanceRequestList, setMaintenanceRequestList] = useState();
    const ref = React.createRef();

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/maintenancerequest')
                .then(res => res.json())
                .then(data => {setMaintenanceRequestList(data)})
    }, [])
  
    return (
      <>
          <nav className='ms-4'>
              <ol className="breadcrumb font-breadcrumb">
              <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/reporttype">Selecte Report</Link></li>
              <li className="breadcrumb-item active">Maintenance Request Report Generation</li>
              </ol>
          </nav>
          <div className='container ms-3'>
            <h1 className='mb-4'>Report Generation</h1>
            <div className='px-5 py-1' ref={ref}>
                <h2 className='mt-5'>Maintenance Record</h2>
                <table className="table table-striped mt-5">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Student id</th>
                    <th scope="col">Description</th>
                    <th scope="col">Service Type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Technician Comments</th>
                </tr>
                </thead>
                <tbody>
                {maintenanceRequestList && maintenanceRequestList.map((item, index) => {

                    return (
                    <tr key={item.mrId}>
                    <th scope ='row'>{index +1}</th>
                    <td>{item.date}</td>
                    <td>{item.campusId}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.status}</td>
                    <td>{item.technicianComments}</td>
                    </tr>
                    )
                })}
                </tbody>
                </table>
            </div>
            <ReactToPdf targetRef={ref} filename="download.pdf" scale={0.67}>
                {({ toPdf }) => <button type="button" className="btn btn-danger mt-4 float-end" data-bs-dismiss="modal" 
                onClick={toPdf}>Generate Physical Copy<i class="bi bi-filetype-pdf ms-2" style={{fontSize: "20px"}}></i></button>}
            </ReactToPdf>
          </div>
      </>
    )
}

export default MaintenanceRequestGenerateReport
