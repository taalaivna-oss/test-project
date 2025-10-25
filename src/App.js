import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Импорты страниц из src/pages
import Home from "./pages/Home";
import People from "./pages/People";
import PersonDetail from "./pages/PersonDetail";
import Planets from "./pages/Planets";
import PlanetDetail from "./pages/PlanetDetail";
import Starships from "./pages/Starships";
import StarshipDetail from "./pages/StarshipDetail";

function App() {
  return (
    // basename указывает поддиректорию на GitHub Pages
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:id" element={<PlanetDetail />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/starships/:id" element={<StarshipDetail />} />
      </Routes>
   
  );
}

export default App;
