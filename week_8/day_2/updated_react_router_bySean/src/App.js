import React, {useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About"
import Home from "./components/Home"
import Pricing from "./components/Pricing"
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import Choice from "./components/Choice";
import CoursesContainer from "./containers/CoursesContainer";

const App = () => {

  let initialPricing = [
    { level: "Hobby", cost: 0 },
    { level: "Startup", cost: 10 },
    { level: "Enterprise", cost: 100 }
  ];
  
  const [pricing, setPricing] = useState(initialPricing);

  // The /courses/* is required if you are extending the router by adding more routes
  // otherwise only the /courses/ home route will work.

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing prices={pricing} />} />
        <Route path="/courses/*" element={ <CoursesContainer />} />
        <Route path="/choices/:choice" element={ <Choice />} />
        <Route path="*" element={< ErrorPage />} />
      </Routes>
    </Router>
  )

}

export default App;
