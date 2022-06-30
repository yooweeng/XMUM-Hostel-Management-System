import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";

function GenerateReport() {
    
    const [applicationRequestList, setApplicationRequestList] = useState();
    const [isSelectFilter, setIsSelectFilter] = useState('All');
    const ref = React.createRef();

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/applicationrequest')
                .then(res => res.json())
                .then(data => {setApplicationRequestList(data)})
    }, [])
  
    return (
      <>
          <nav className='ms-4'>
              <ol className="breadcrumb font-breadcrumb">
              <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
              <li className="breadcrumb-item active">Report Generation</li>
              </ol>
          </nav>
          <div className='container ms-3'>
            <h1 className='mb-4'>Report Generation</h1>
            <div className='row'>
                <div className='float-end' style={{fontSize: "1.1rem"}}>Filter: </div>
            </div>
            <div className='row mt-1'>
                <div className='col-6'>
                    {(isSelectFilter === 'All')
                    ?
                    <button className='btn btn-secondary col-1' onClick={() => {setIsSelectFilter('All')}}>All</button>
                    :
                    <button className='btn btn-primary col-1' onClick={() => {setIsSelectFilter('All')}}>All</button>
                    }
                    {(isSelectFilter === 'Approved')
                    ?
                    <button className='btn btn-secondary col-2 ms-3' onClick={() => {setIsSelectFilter('Approved')}}>Approved</button>
                    :
                    <button className='btn btn-primary col-2 ms-3' onClick={() => {setIsSelectFilter('Approved')}}>Approved</button>
                    }
                    {(isSelectFilter === 'Rejected')
                    ?
                    <button className='btn btn-secondary col-2 ms-3' onClick={() => {setIsSelectFilter('Rejected')}}>Rejected</button>
                    :
                    <button className='btn btn-primary col-2 ms-3' onClick={() => {setIsSelectFilter('Rejected')}}>Rejected</button>
                    }
                    {(isSelectFilter === 'Pending')
                    ?
                    <button className='btn btn-secondary col-2 ms-3' onClick={() => {setIsSelectFilter('Pending')}}>Pending</button>
                    :
                    <button className='btn btn-primary col-2 ms-3' onClick={() => {setIsSelectFilter('Pending')}}>Pending</button>
                    }
                </div>
            </div>
            <div className='px-5 py-1' ref={ref}>
                <h2 className='mt-5'>Record</h2>
                <span className='mt-0 float-end'>Filter applied: {isSelectFilter}</span>
                <table className="table table-striped mt-5">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Request type</th>
                    <th scope="col">Block</th>
                    <th scope="col">Student id</th>
                    <th scope="col">Remarks</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {applicationRequestList && applicationRequestList.map((item, index) => {
                    let block;
                    if(item.selectedBlockD){
                    block = 'Block D';
                    }
                    else{
                    block = 'Block LY';
                    }

                    if(((isSelectFilter === item.status) || (isSelectFilter === 'All'))){
                        return(
                        <tr key={item.applicationId}>
                        <th scope ='row'>{index +1}</th>
                        <td>{item.category}</td>
                        <td>{block}</td>
                        <td>{item.studentId}</td>
                        <td>{item.remarks}</td>
                        <td>{item.status}</td>
                        </tr>
                        )
                    }
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

export default GenerateReport
