import React from "react";
import Navbar from "./components/Navbar";
import About from "./page/About";
import Work from "./page/Work";
import Service from "./page/Service";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
    <Navbar>
      <Link to ="/About" element={<About />}/>
      <Link to ="/Work" element={<Work />}/>
      <Link to ="/Service" element={<Service />}/>
    </Navbar>
   <Routes >
      <Route path="/" element={<About />}></Route>
      <Route path="/Work" element={<Work />}></Route>
      <Route path="/Service" element={<Service />}></Route>
   </Routes>
   </>
  );
}

export default App;
