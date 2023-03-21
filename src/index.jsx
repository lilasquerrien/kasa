import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Error from "./pages/Error";
import RentalsListing from './datas/RentalsListing.json';
import './sass/main.scss';

<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>;

// Si l'id n'existe pas alors on renvoie vers la page erreur sinon on renvoie vers la page rental

function RentalsPage() {
  const { id } = useParams();
  let page = RentalsListing.find(i => i.id === id)

  if (!page) {
    return <Error />;
  }
  return <Rentals element={<Rentals/>} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rentals/:id" element={<RentalsPage/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);