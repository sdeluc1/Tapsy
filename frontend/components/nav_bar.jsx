import React from 'react';

const NavBar = () => (
  <header className="nav-bar-main">
    <nav className="group nav-bar">
      <a href="#">
        <div className="nav-logo">
          <strong className="nav-logo-main">TAPSY</strong>
          <strong className="nav-logo-sub">GET DRAFTED</strong>
        </div>
      </a>
      <ul>
        <a href="#"><li>The Brews</li></a>
        <a href="#"><li>Add Beer</li></a>
        <a href="#"><li>Add Brewery</li></a>
      </ul>

      <form>
        <input className="nav-search" type="text" placeholder="Find a beer or brewery..." />
      </form>
    </nav>
  </header>
);

export default NavBar;
