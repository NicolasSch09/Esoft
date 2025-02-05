import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#ccc' }}>
      {/* Title or Logo */}
      <Link to="/" style={{ marginRight: '20px' }}>
        <strong>My Edu App</strong>
      </Link>

      {/* Nav Links */}
      <Link to="/" style={{ marginRight: '10px' }}>
        Home
      </Link>
      <Link to="/students" style={{ marginRight: '10px' }}>
        Student Manager
      </Link>
    </nav>
  );
}

export default Navbar;