import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About"
import Home from "./components/Home"
import Pricing from "./components/Pricing"
import NavBar from "./components/NavBar";
import Detail from "./components/Detail";
import ErrorPage from "./components/ErrorPage";
import Choice from "./components/Choice";

const App = ()=> {

  let initialPricing = [
    { level: "Hobby", cost: 0 },
    { level: "Startup", cost: 10 },
    { level: "Enterprise", cost: 100 }
  ];
  
  const [prices, setPricing] = useState(initialPricing);
  
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/pricing" element={<Pricing prices={prices}/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/choices/:choice" element={<Choice/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )

}

export default App;
