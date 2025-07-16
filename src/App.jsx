import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './layout';
import Technology from './pages/Technology';
import QualityPolicy from './pages/QualityPolicy';
import HowItWorks from './pages/HowItWorks';
import HomeT from './pages/HomeT';

const App = () => {
  return (
    <Routes>
    <Route element={<Layout />}>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<HomeT />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/quality-policy" element={<QualityPolicy />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
    </Route>
  </Routes>
  );
};

export default App;
