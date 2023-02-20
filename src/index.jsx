import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Error from "./pages/Error";
// import RentalsList from "./datas/RentalsList.json";

<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/locations/:id" element={<Rentals/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);