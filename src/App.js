
import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Wellcome from "./pages/welcome";
import Login from "./pages/login";
import Contact from "./pages/contact-us";
import Signip from "./pages/signup";


function App(){
  return (
    <Router>
      <Routes>
        <Route path="/back" element={<Wellcome/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/signup" element={<Signip/>}></Route>
        
      </Routes>
    </Router>
  )
}
export default App
