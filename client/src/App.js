import React from 'react';
/*import { useEffect } from 'react';*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Landing from './pages/Landing'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
