import React from 'react';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Home Page</h1>
      <p>
        This is the landing screen. Use the navigation above to explore the app.
      </p>
      <li><a href="#">Home</a></li>
      <nav class="navbar">
        <a href="#" class="logo">esoft</a>
        <span class="menu-toggle"><i class="fas fa-bars"></i></span>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Language</a></li>
            <li><a href="#">Math</a></li>
            <li><a href="#">Science</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#" class="cta-button">Sign In</a></li>
        </ul>
    </nav>

    </div>
  );
}

export default Home;