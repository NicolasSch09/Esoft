import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import StudentManager from './pages/StudentManager';


function App() {
  return (
    <Router>
<Navbar />

<Routes>
  {/* Home route */}
  <Route path="/" element={<Home />} />

  {/* Student Manager route */}
  <Route path="/students" element={<StudentManager />} />
</Routes>
    </Router>
  );
}

export default App;