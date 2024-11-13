import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myhome from "../Pages/Myhome";
import Newabout from "../Pages/Newabout";
import Newprojects from "../Pages/Newprojects";
import Neweducation from "../Pages/Neweducation";
import Newcontact from "../Pages/Newcontact";
import Newskills  from "../Pages/Newskills"


function Routing() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Myhome/>}/>
        <Route path="/About" element={<Newabout/>}/>
        <Route path="/Project" element={<Newprojects/>}/>
        <Route path="/Education" element={<Neweducation/>}/>
        <Route path="/Contact" element={<Newcontact/>}/>
        <Route path="/Skills" element={<Newskills/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing

