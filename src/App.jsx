import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './layout';
import Technology from './pages/Technology';
import QualityPolicy from './pages/QualityPolicy';
import HowItWorks from './pages/HowItWorks';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      {/* Redirect root to default language */}
      <Route path="/" element={<Navigate to="/en" replace />} />
      
      {/* English routes */}
      <Route path="/en" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="technology" element={<Technology />} />
        <Route path="quality-policy" element={<QualityPolicy />} />
        <Route path="how-it-works" element={<HowItWorks />} />
      </Route>
      
      {/* Arabic routes */}
      <Route path="/ar" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="technology" element={<Technology />} />
        <Route path="quality-policy" element={<QualityPolicy />} />
        <Route path="how-it-works" element={<HowItWorks />} />
      </Route>
      
      {/* Fallback for old routes - redirect to English */}
      <Route path="/technology" element={<Navigate to="/en/technology" replace />} />
      <Route path="/quality-policy" element={<Navigate to="/en/quality-policy" replace />} />
      <Route path="/how-it-works" element={<Navigate to="/en/how-it-works" replace />} />
    </Routes>
  );
};

export default App;
