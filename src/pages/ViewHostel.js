import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import topDownMap from '../images/topDownMap.png'
import './css/ViewHostel.css'

function ViewHostel(props) {

  const [selectedBlock, setSelectedBlock] = useState('');

  return (
    <>
        {(props.from != null)
        ?
        <>
            <nav>
                <ol className="breadcrumb font-breadcrumb">
                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/hostelfunction">Hostel Functions</Link></li>
                <li className="breadcrumb-item"><Link to={`/hostelfunction/${props.from}`}>{props.name}</Link></li>
                <li className="breadcrumb-item active">Select Hostel</li>
                </ol>
            </nav>
            <h1 className="change-hover-color" >Hostel Overview</h1>
            <img className="mt-3" src={topDownMap} useMap="#image-map" alt="The hostel topdown overview of XMUM" value={selectedBlock} onClick={e => e.target.title}/>
            <map name="image-map">
                <Link to='/home'>
                    <area alt="D1" title="D1" coords="690,169,693,180,719,174,721,182,731,179,728,169,743,164,739,153,724,158,721,149,708,151,713,162" shape="poly"/>
                </Link>
                <area alt="D2" title="D2" coords="686,127,690,136,711,129,714,140,724,137,721,123,735,120,735,109,718,113,712,106,703,106,705,120" shape="poly"/>
                <area alt="D3" title="D3" coords="639,156,642,166,656,162,659,176,672,173,669,161,691,155,689,146,667,150,664,140,655,143,657,151" shape="poly"/>
                <area alt="D4" title="D4" coords="576,110,574,121,602,124,603,135,615,137,616,124,635,126,636,115,615,114,616,102,603,100,603,112" shape="poly"/>
                <area alt="D5" title="D5" coords="587,59,586,68,602,70,599,85,610,89,614,76,641,80,642,70,618,66,620,55,608,53,607,61" shape="poly"/>
                <area alt="LY1" title="LY1" coords="351,136,359,138,367,133,376,135,382,127,386,120,385,114,380,109,381,101,375,96,369,102,363,104,353,104,347,108,340,112,340,119,347,120,347,127,345,135" shape="poly"/>
                <area alt="LY2" title="LY2" coords="391,98,402,98,411,96,414,102,417,108,416,120,411,127,400,127,393,127,387,127,390,115,390,104" shape="poly"/>
                <area alt="LY4" title="LY4" coords="481,94,491,90,502,90,511,92,515,96,517,104,514,110,511,116,505,121,498,121,491,120,482,113" shape="poly"/>
                <area alt="LY5" title="LY5" coords="521,95,527,105,522,114,531,123,538,119,548,122,559,112,559,105,557,98,553,93,544,91,538,93" shape="poly"/>
                <area alt="LY6" title="LY6" coords="337,75,329,83,337,87,344,90,353,84,359,87,366,79,363,67,360,59,352,58,346,59,339,60,332,61,328,65,330,73" shape="poly"/>
                <area alt="LY7" title="LY7" coords="368,79,376,81,378,87,387,83,396,86,404,79,411,74,410,62,404,58,397,55,389,55,381,55,375,58,368,61,365,66" shape="poly"/>
                <area alt="LY8" title="LY8" coords="481,64,482,78,490,82,496,80,502,77,512,78,515,71,521,65,520,58,516,54,513,47,505,49,499,49,491,51" shape="poly"/>
                <area alt="LY9" title="LY9" coords="534,66,541,56,558,53,564,64,566,75,559,80,552,86,546,83,536,85,530,82,533,73" shape="poly"/>
            </map>
        </>
        :
        <>
            <nav>
                <ol className="breadcrumb font-breadcrumb">
                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                <li className="breadcrumb-item active">Hostel Overview</li>
                </ol>
            </nav>
            <h1>Hostel Overview</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-9 p-0'>
                        <img className="mt-3" src={topDownMap} useMap="#image-map" alt="The hostel topdown overview of XMUM"/>
                        <map name="image-map" value={selectedBlock} onClick={e => setSelectedBlock(e.target.title)}>
                            <Link to='/hosteloverview'>
                                <area alt="D1" title="D1" coords="690,169,693,180,719,174,721,182,731,179,728,169,743,164,739,
                                153,724,158,721,149,708,151,713,162" shape="poly"/>
                            </Link>
                            <area alt="D2" title="D2" coords="686,127,690,136,711,129,714,140,724,137,721,123,735,120,735,109,
                            718,113,712,106,703,106,705,120" shape="poly" value="D2"/>
                            <area alt="D3" title="D3" coords="639,156,642,166,656,162,659,176,672,173,669,161,691,155,689,146,
                            667,150,664,140,655,143,657,151" shape="poly"/>
                            <area alt="D4" title="D4" coords="576,110,574,121,602,124,603,135,615,137,616,124,635,126,636,115,
                            615,114,616,102,603,100,603,112" shape="poly"/>
                            <area alt="D5" title="D5" coords="587,59,586,68,602,70,599,85,610,89,614,76,641,80,642,70,618,66,
                            620,55,608,53,607,61" shape="poly"/>
                            <area alt="LY1" title="LY1" coords="351,136,359,138,367,133,376,135,382,127,386,120,385,114,380,
                            109,381,101,375,96,369,102,363,104,353,104,347,108,340,112,340,119,347,120,347,127,345,135" shape="poly"/>
                            <area alt="LY2" title="LY2" coords="391,98,402,98,411,96,414,102,417,108,416,120,411,127,400,127,
                            393,127,387,127,390,115,390,104" shape="poly"/>
                            <area alt="LY4" title="LY4" coords="481,94,491,90,502,90,511,92,515,96,517,104,514,110,511,116,505,
                            121,498,121,491,120,482,113" shape="poly"/>
                            <area alt="LY5" title="LY5" coords="521,95,527,105,522,114,531,123,538,119,548,122,559,112,559,105,
                            557,98,553,93,544,91,538,93" shape="poly"/>
                            <area alt="LY6" title="LY6" coords="337,75,329,83,337,87,344,90,353,84,359,87,366,79,363,67,360,59,
                            352,58,346,59,339,60,332,61,328,65,330,73" shape="poly"/>
                            <area alt="LY7" title="LY7" coords="368,79,376,81,378,87,387,83,396,86,404,79,411,74,410,62,404,58,
                            397,55,389,55,381,55,375,58,368,61,365,66" shape="poly"/>
                            <area alt="LY8" title="LY8" coords="481,64,482,78,490,82,496,80,502,77,512,78,515,71,521,65,520,58,
                            516,54,513,47,505,49,499,49,491,51" shape="poly"/>
                            <area alt="LY9" title="LY9" coords="534,66,541,56,558,53,564,64,566,75,559,80,552,86,546,83,536,85,
                            530,82,533,73" shape="poly"/>
                        </map>
                    </div>
                    <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                    Position nearer to the D6, which is one of the canteen of XMUM
                            </p>
                            <p>
                                <span className='fw-bold'>Number of floor: </span> 6 <br/>
                                <span className='fw-bold'>Wings: </span> A, B, C, D <br/>
                                <span className='fw-bold'>Nearby parking slot: </span> Yes
                            </p>
                            <p>
                                <span className='fw-bold'>Room Type Available: </span><br/>
                                Twin sharing room (Block D) with en-suite bathroom<br/>
                                <span className='fw-bold'>Price: </span><br/>
                                RM340 per student per month<br/>
                                <span className='fw-bold'>Size of Room (m2): </span><br/>
                                15.9
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        }
        
    </>
  )
}

export default ViewHostel
