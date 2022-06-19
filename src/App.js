import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginContext } from "./helper/Context";
import { useEffect, useState } from "react";
import Mainpage from "./pages/Mainpage";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const[loginDetails,setLoginDetails] = useState({isAtLogin:true, token:null});

  return (
    <div className="App">
      <LoginContext.Provider value={{loginDetails,setLoginDetails}}>
        {//no token and not at login page, then show error page
          (!loginDetails.token && (loginDetails.isAtLogin === false)) 
          ?
          <ErrorPage/>
          :
          <>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/:item" element={<Mainpage/>}/>
              <Route path="/:item/:subitem" element={<Mainpage/>}/>
              <Route path="/:item/:subitem/:subitem2" element={<Mainpage/>}/>
            </Routes>
            <Footer/>
          </>
        }
      </LoginContext.Provider>
    </div>
  );
}

export default App;
