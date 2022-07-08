import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";
import { LoginContext } from '../../../helper/Context';

function FeedbackGenerateReport() {
    
    const [feedbackList, setFeedbackList] = useState();
    const ref = React.createRef();

    const {loginDetails, setLoginDetails} = useContext(LoginContext);
    let token = JSON.parse(sessionStorage.getItem("token"));
    let tokenType;
    
    if(token != null){
        tokenType = token.slice(0,3);
    }

    if(tokenType != 'adm'){
        setLoginDetails(prevDetails => {
        return {...prevDetails, isAuthorized: false}
        });
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/feedback')
                .then(res => res.json())
                .then(data => {setFeedbackList(data)})
    }, [])
  
    return (
      <>
          <nav className='ms-4'>
              <ol className="breadcrumb font-breadcrumb">
              <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/reporttype">Selecte Report</Link></li>
              <li className="breadcrumb-item active">Feedback Report Generation</li>
              </ol>
          </nav>
          <div className='container ms-3'>
            <h1 className='mb-4'>Report Generation</h1>
            <div className='px-5 py-1' ref={ref}>
                <h2 className='mt-5'>Feedback Record</h2>
                <table className="table table-striped mt-5">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Comment</th>
                    <th scope="col">Remarks</th>
                </tr>
                </thead>
                <tbody>
                {feedbackList && feedbackList.map((item, index) => {

                    return (
                    <tr key={item.feedbackId}>
                    <th scope ='row'>{index +1}</th>
                    <td>{item.subject}</td>
                    <td>{item.comment}</td>
                    {(item.remarks === '') &&
                        <td>na</td>
                    }
                    {(item.remarks != '') &&
                        <td>{item.remarks}</td>
                    }
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

export default FeedbackGenerateReport
