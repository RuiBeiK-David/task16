import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './layout/Nav';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import Request from './pages/Request';
import Calculation from './pages/Calculation';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/request" element={<Request />} />
          <Route path="/calculation" element={<Calculation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
