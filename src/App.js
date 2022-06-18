import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom"
import { LoginContext } from "./helper/Context";
import { useState } from "react";
import Mainpage from "./pages/Mainpage";
import Footer from "./components/Footer";

function App() {
  const[loginDetails,setLoginDetails] = useState({isLoggedIn:false, userCategory: ''})

  return (
    <div className="App">
      <LoginContext.Provider value={{loginDetails,setLoginDetails}}>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/:item" element={<Mainpage/>}/>
          <Route path="/:item/:subitem" element={<Mainpage/>}/>
          <Route path="/:item/:subitem/:subitem2" element={<Mainpage/>}/>
        </Routes>
      </LoginContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
