import React from 'react';

const NavBar = () => (
  <header className="nav-bar-main">
    <nav className="group nav-bar">
      <a href="/#/home">
        <div className="nav-logo">
          <strong className="nav-logo-main">TAPSY</strong>
          <strong className="nav-logo-sub">GET DRAFTED</strong>
        </div>
      </a>
      <ul>
        <a href="#"><li>The Brews</li></a>
        <a href="#/add-beer"><li>Add Beer</li></a>
        <a href="#/add-brewery"><li>Add Brewery</li></a>
      </ul>
      <div className="nav-right">
        <div className="nav-user-pic"></div>
        <form className="search">
          <input className="nav-search" type="text" placeholder="Find a beer or brewery..." />
        </form>
      </div>
    </nav>
  </header>
);

export default NavBar;
