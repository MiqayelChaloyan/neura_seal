import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout';
// import Technology from './pages/Technology';
import QualityPolicy from './pages/QualityPolicy';
import HowItWorks from './pages/HowItWorks';
import Home from './pages/Home';
import PhantomSig from './pages/PhantomSig';
import NeuraTrace from './pages/NeuraTrace';
import NeuraSeal from './pages/NeuraSeal';


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/technology" element={<Technology />} /> */}
        <Route path="/phantom-sig" element={<PhantomSig />} />
        <Route path="/neura-trace" element={<NeuraTrace />} />
        <Route path="/neura-seal" element={<NeuraSeal />} />
        <Route path="/quality-policy" element={<QualityPolicy />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Route>
    </Routes>
  );
};

export default App;
