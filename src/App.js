
import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Wellcome from "./pages/welcome";
import Login from "./pages/login";


function App(){
  return (
    <Router>
      <Routes>
        <Route path="/back" element={<Wellcome/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
      </Routes>
    </Router>
  )
}
export default App
