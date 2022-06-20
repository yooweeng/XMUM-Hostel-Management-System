import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import topDownMap from '../../images/topDownMap.png'
import D1 from '../../images/D1.jpeg'
import D2 from '../../images/D2.jpeg'
import D3 from '../../images/D3.jpeg'
import D4 from '../../images/D4.jpeg'
import D5 from '../../images/D5.jpeg'
import LY2 from '../../images/LY2.jpeg'
import LY4 from '../../images/LY4.jpeg'
import LY5 from '../../images/LY5.jpeg'
import LY7 from '../../images/LY7.jpeg'
import LY8 from '../../images/LY8.jpeg'
import LY9 from '../../images/LY9.jpeg'
import underConstruction from '../../images/underConstruction.JPG'
import '../css/ViewHostel.css'

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
            <h1 className="change-hover-color" >Hostel Overview (Interactive Map)</h1>
            <p>Click on the image map to select the hostel</p>
            <img src={topDownMap} useMap="#image-map" alt="The hostel topdown overview of XMUM" value={selectedBlock} onClick={e => e.target.title}/>
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
            <h1>Hostel Overview (Interactive Map)</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-9 p-0'>
                        <p>Click on the image map to view the hostel</p>
                        <img src={topDownMap} useMap="#image-map" alt="The hostel topdown overview of XMUM"/>
                        <map name="image-map" value={selectedBlock} 
                            onClick={e => {
                                if(selectedBlock === e.target.title){
                                    setSelectedBlock('')
                                }
                                else{
                                    setSelectedBlock(e.target.title)
                                }
                            }}>
                            <Link to='/hosteloverview'>
                                <area alt="D1" title="D1" coords="690,169,693,180,719,174,721,182,731,179,728,169,743,164,739,
                                153,724,158,721,149,708,151,713,162" shape="poly"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="D2" title="D2" coords="686,127,690,136,711,129,714,140,724,137,721,123,735,120,735,109,
                                718,113,712,106,703,106,705,120" shape="poly" value="D2"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="D3" title="D3" coords="639,156,642,166,656,162,659,176,672,173,669,161,691,155,689,146,
                                667,150,664,140,655,143,657,151" shape="poly"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="D4" title="D4" coords="576,110,574,121,602,124,603,135,615,137,616,124,635,126,636,115,
                                615,114,616,102,603,100,603,112" shape="poly"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="D5" title="D5" coords="587,59,586,68,602,70,599,85,610,89,614,76,641,80,642,70,618,66,
                                620,55,608,53,607,61" shape="poly"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="LY1" title="LY1" coords="351,136,359,138,367,133,376,135,382,127,386,120,385,114,380,
                                109,381,101,375,96,369,102,363,104,353,104,347,108,340,112,340,119,347,120,347,127,345,135" shape="poly"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="LY2" title="LY2" coords="391,98,402,98,411,96,414,102,417,108,416,120,411,127,400,127,
                                393,127,387,127,390,115,390,104" shape="poly"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="LY4" title="LY4" coords="481,94,491,90,502,90,511,92,515,96,517,104,514,110,511,116,505,
                                121,498,121,491,120,482,113" shape="poly"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="LY5" title="LY5" coords="521,95,527,105,522,114,531,123,538,119,548,122,559,112,559,105,
                                557,98,553,93,544,91,538,93" shape="poly"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="LY6" title="LY6" coords="337,75,329,83,337,87,344,90,353,84,359,87,366,79,363,67,360,59,
                                352,58,346,59,339,60,332,61,328,65,330,73" shape="poly"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="LY7" title="LY7" coords="368,79,376,81,378,87,387,83,396,86,404,79,411,74,410,62,404,58,
                                397,55,389,55,381,55,375,58,368,61,365,66" shape="poly"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="LY8" title="LY8" coords="481,64,482,78,490,82,496,80,502,77,512,78,515,71,521,65,520,58,
                                516,54,513,47,505,49,499,49,491,51" shape="poly"/>
                            </Link>
                            <Link to='/hosteloverview'>
                                <area alt="LY9" title="LY9" coords="534,66,541,56,558,53,564,64,566,75,559,80,552,86,546,83,536,85,
                                530,82,533,73" shape="poly"/>
                            </Link>
                        </map>
                    </div>
                    {(selectedBlock === 'D1') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img src={D1} alt='Hostel block D1'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                    Position nearer to the B1, which is one of the main buildings <br/>
                                <span className='fw-bold'>Easy access to: </span><br/>    
                                <ul>
                                    <li>classroom</li>
                                    <li>lecture hall</li>
                                    <li>auditorium</li>
                                    <li>library</li>
                                    <li>gym</li>
                                    <li>yoga room</li>
                                    <li>xmum clinic</li>
                                    <li>swimming pool</li>
                                    <li>bakery</li>
                                    <li>mart</li>
                                    <li>large parking area</li>
                                </ul>
                            </p>
                            <p>
                                <span className='fw-bold'>Number of floor: </span> 6 <br/>
                                <span className='fw-bold'>Wings: </span> A, B, C, D <br/>
                                <span className='fw-bold'>Nearby parking slot: </span> Yes
                            </p>
                            <p className='mb-1'>
                                <span className='fw-bold'>Room Type Available: </span><br/>
                                Twin sharing room (Block D) with en-suite bathroom<br/>
                                <span className='fw-bold'>Price: </span><br/>
                                RM340 per student per month<br/>
                                <span className='fw-bold'>Size of Room (m2): </span><br/>
                                15.9
                            </p>
                            <div className="row">
                                <div className="col-12">
                                    <Link to='/hosteloverview/lobby/blockd1'>
                                        <button type="submit" className="btn btn-primary float-end">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'D2') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img src={D2} alt='Hostel block D2'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                    Position nearer to the D6, which is one of the canteen of XMUM <br/>
                                <span className='fw-bold'>Easy access to: </span><br/>
                                <ul>
                                    <li>D6 canteen</li>
                                    <li>large parking area</li>
                                </ul>
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
                            <div className="row">
                                <div className="col-12">
                                    <Link to='/hosteloverview/lobby/blockd2'>
                                        <button type="submit" className="btn btn-primary float-end">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'D3') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img src={D3} alt='Hostel block D3'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                    Position in between B1 and D6, which is the canteen and the main buildings of XMUM <br/>
                                <span className='fw-bold'>Easy access to: </span><br/>
                                <ul>
                                    <li>D6 canteen</li>
                                    <li>classroom</li>
                                    <li>lecture hall</li>
                                    <li>auditorium</li>
                                    <li>library</li>
                                    <li>gym</li>
                                    <li>yoga room</li>
                                    <li>xmum clinic</li>
                                    <li>swimming pool</li>
                                    <li>bakery</li>
                                    <li>mart</li>
                                    <li>large parking area</li>
                                </ul>
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
                            <div className="row">
                                <div className="col-12">
                                    <Link to='/hosteloverview/lobby/blockd3'>
                                        <button type="submit" className="btn btn-primary float-end">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'D4') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img src={D4} alt='Hostel block D4'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                    Position nearer to the D6, which is one of the canteen of XMUM <br/>
                                <span className='fw-bold'>Easy access to: </span><br/>
                                <ul>
                                    <li>D6 canteen</li>
                                    <li>parking area</li>
                                </ul>
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
                            <div className="row">
                                <div className="col-12">
                                    <Link to='/hosteloverview/lobby/blockd4'>
                                        <button type="submit" className="btn btn-primary float-end">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'D5') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img src={D5} alt='Hostel block D5'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                    Position nearer to the D6, which is one of the canteen of XMUM <br/>
                                <span className='fw-bold'>Easy access to: </span><br/>
                                <ul>
                                    <li>D6 canteen</li>
                                    <li>large parking area</li>
                                </ul>
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
                            <div className="row">
                                <div className="col-12">
                                    <Link to='/hosteloverview/lobby/blockd5'>
                                        <button type="submit" className="btn btn-primary float-end">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'LY1') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img className='underconstruction-img-size' src={underConstruction} alt='Hostel block LY1 under construction'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                Under construction (not yet available for application)
                            </p>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'LY2') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img src={LY2} alt='Hostel block LY2'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                    Position nearer to the LY3 which is one of the cateen of XMUM<br/>
                                <span className='fw-bold'>Easy access to: </span><br/>
                                <ul>
                                    <li>LY3 canteen</li>
                                    <li>basketball court</li>
                                    <li>large parking area</li>
                                </ul>
                            </p>
                            <p>
                                <span className='fw-bold'>Number of floor: </span> 16 <br/>
                                <span className='fw-bold'>Wings: </span> A, B, C, D <br/>
                                <span className='fw-bold'>Nearby parking slot: </span> Yes
                            </p>
                            <p>
                                <span className='fw-bold'>Room Type Available: </span><br/>
                                Twin sharing room (Block LY) with en-suite bathroom<br/>
                                <span className='fw-bold'>Price: </span><br/>
                                RM390 per student per month<br/>
                                <span className='fw-bold'>Size of Room (m2): </span><br/>
                                17.6
                            </p>
                            <div className="row">
                                <div className="col-12">
                                    <Link to='/hosteloverview/lobby/blockly2'>
                                        <button type="submit" className="btn btn-primary float-end">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'LY4') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img src={LY4} alt='Hostel block LY4'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                    Position nearer to basketball court and the LY3 which is one of the cateen of XMUM<br/>
                                <span className='fw-bold'>Easy access to: </span><br/>
                                <ul>
                                    <li>LY3 canteen</li>
                                    <li>basketball court</li>
                                    <li>large parking area</li>
                                </ul>
                            </p>
                            <p>
                                <span className='fw-bold'>Number of floor: </span> 16 <br/>
                                <span className='fw-bold'>Wings: </span> A, B, C, D <br/>
                                <span className='fw-bold'>Nearby parking slot: </span> Yes
                            </p>
                            <p>
                                <span className='fw-bold'>Room Type Available: </span><br/>
                                Twin sharing room (Block LY) with en-suite bathroom<br/>
                                <span className='fw-bold'>Price: </span><br/>
                                RM390 per student per month<br/>
                                <span className='fw-bold'>Size of Room (m2): </span><br/>
                                17.6
                            </p>
                            <div className="row">
                                <div className="col-12">
                                    <Link to='/hosteloverview/lobby/blockly4'>
                                        <button type="submit" className="btn btn-primary float-end">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'LY5') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img src={LY5} alt='Hostel block LY5'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                    Position nearer to basketball court and in between D6 and LY3 which is both of the cateens of XMUM<br/>
                                <span className='fw-bold'>Easy access to: </span><br/>
                                <ul>
                                    <li>D6 and LY3 canteen</li>
                                    <li>basketball court</li>
                                    <li>large parking area</li>
                                </ul>
                            </p>
                            <p>
                                <span className='fw-bold'>Number of floor: </span> 16 <br/>
                                <span className='fw-bold'>Wings: </span> A, B, C, D <br/>
                                <span className='fw-bold'>Nearby parking slot: </span> Yes
                            </p>
                            <p>
                                <span className='fw-bold'>Room Type Available: </span><br/>
                                Twin sharing room (Block LY) with en-suite bathroom<br/>
                                <span className='fw-bold'>Price: </span><br/>
                                RM390 per student per month<br/>
                                <span className='fw-bold'>Size of Room (m2): </span><br/>
                                17.6
                            </p>
                            <div className="row">
                                <div className="col-12">
                                    <Link to='/hosteloverview/lobby/blockly5'>
                                        <button type="submit" className="btn btn-primary float-end">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'LY6') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img className='underconstruction-img-size' src={underConstruction} alt='Hostel block LY6 under construction'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                Under construction (not yet available for application)
                            </p>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'LY7') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img src={LY7} alt='Hostel block LY7 under construction'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                Under construction (not yet available for application)
                            </p>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'LY8') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img src={LY8} alt='Hostel block LY8 under construction'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                Under construction (not yet available for application)
                            </p>
                        </div>
                     </div>
                    }
                    {(selectedBlock === 'LY9') &&
                     <div className='col-3'>
                        <div className='card shadow p-4'>
                            <h4>Location: Block {selectedBlock}</h4>
                            <img src={LY9} alt='Hostel block LY9'/>
                            <p className='mt-3'>
                                <span className='fw-bold'>Description: </span><br/>
                                    Position nearer to basketball court and in between D6 and LY3 which is both of the cateens of XMUM<br/>
                                <span className='fw-bold'>Easy access to: </span><br/>
                                <ul>
                                    <li>D6 and LY3 canteen</li>
                                    <li>basketball court</li>
                                    <li>large parking area</li>
                                </ul>
                            </p>
                            <p>
                                <span className='fw-bold'>Number of floor: </span> 16 <br/>
                                <span className='fw-bold'>Wings: </span> A, B, C, D <br/>
                                <span className='fw-bold'>Nearby parking slot: </span> Yes
                            </p>
                            <p>
                                <span className='fw-bold'>Room Type Available: </span><br/>
                                Twin sharing room (Block LY) with en-suite bathroom<br/>
                                <span className='fw-bold'>Price: </span><br/>
                                RM390 per student per month<br/>
                                <span className='fw-bold'>Size of Room (m2): </span><br/>
                                17.6
                            </p>
                            <div className="row">
                                <div className="col-12">
                                    <Link to='/hosteloverview/lobby/blockly9'>
                                        <button type="submit" className="btn btn-primary float-end">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                     </div>
                    }
                </div>
            </div>
        </>
        }
        
    </>
  )
}

export default ViewHostel
