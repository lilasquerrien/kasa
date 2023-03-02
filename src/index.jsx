import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Error from "./pages/Error";
import './sass/main.scss';

<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rentals/:id" element={<Rentals/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);