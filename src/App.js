import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom"
import { LoginContext } from "./helper/Context";
import { useState } from "react";
import StudentHomepage from "./pages/Student/StudentHomepage";
import StaffHomepage from "./pages/Staff/StaffHomepage";

function App() {
  const[loginDetails,setLoginDetails] = useState({isLoggedIn:false, userCategory: ''})

  return (
    <div className="App">
      <LoginContext.Provider value={{loginDetails,setLoginDetails}}>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/StudentHomepage" element={<StudentHomepage/>}/>
          <Route path="/StaffHomepage" element={<StaffHomepage/>}/>
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
