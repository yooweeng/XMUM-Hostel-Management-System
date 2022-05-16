import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom"
import { LoginContext } from "./helper/Context";
import { useState } from "react";
import Home from "./pages/Home";
import HostelFunctions from "./pages/hostelfunctions/HostelFunctions";
import Dashboard from "./pages/Dashboard";
import RequestMaintainence from "./pages/RequestMaintainence";
import ViewReport from "./pages/ViewReport";
import ProvideFeedback from "./pages/ProvideFeedback";
import Settings from "./pages/Settings";
import ChangeHostelPeriod from "./pages/hostelfunctions/ChangeHostelPeriod";
import HostelApplication from "./pages/hostelfunctions/HostelApplication";
import RequestChangeRoom from "./pages/hostelfunctions/RequestChangeRoom";
import RequestRoomCheckout from "./pages/hostelfunctions/RequestRoomCheckout";
import Footer from "./components/Footer";

function App() {
  const[loginDetails,setLoginDetails] = useState({isLoggedIn:false, userCategory: ''})

  return (
    <div className="App">
      <LoginContext.Provider value={{loginDetails,setLoginDetails}}>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/hostelfunction" element={<HostelFunctions/>}/>
          <Route path="/hostelfunction/changehostelperiod" element={<ChangeHostelPeriod/>}/>
          <Route path="/hostelfunction/hostelapplication" element={<HostelApplication/>}/>
          <Route path="/hostelfunction/requestchangeroom" element={<RequestChangeRoom/>}/>
          <Route path="/hostelfunction/requestroomcheckout" element={<RequestRoomCheckout/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/maintainence" element={<RequestMaintainence/>}/>
          <Route path="/report" element={<ViewReport/>}/>
          <Route path="/feedback" element={<ProvideFeedback/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </LoginContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
