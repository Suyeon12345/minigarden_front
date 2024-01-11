import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/"className="navbar-brand">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/"className="navbar-brand">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/garden"className="navbar-brand">Garden</Link>
        </li>
        <li className="nav-item">
           <Link to="/angel"className="navbar-brand">Angel</Link>
        </li>
        <li className="nav-item">
          <Link to="/lsg"className="navbar-brand">LSG</Link>
        </li>
        <li className="nav-item">
          <Link to="/card"className="navbar-brand">Card</Link>
        </li>
        <li className="nav-item">
          <Link to="/flower"className="navbar-brand">Flower</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar