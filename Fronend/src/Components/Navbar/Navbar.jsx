import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
     <div>
  <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
    <div className="container">
      <a style={{fontSize:"30px"}} className="navbar-brand fw-bold" to="#">Clinic</a>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/home"> <i className="fa fa-home fa-2x"></i> <span className="visually-hidden">(current)</span></NavLink>
          </li>
        
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/dispensaries"><i class="fas fa-calendar-check  fa-2x"> </i></NavLink>
          </li>
        
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/dates"> <i class="fas fa-clock fa-2x"></i></NavLink>
          </li>
          
        </ul>
        <form className="d-flex my-2 my-lg-0">
        <input className="form-control me-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
            
            <NavLink className="nav-link text-light fs-5 fw-bold  ms-4" to="/login"> Log in <i class="fas fa-user-check text-light"></i> </NavLink>
        
    </div>
    </div>
</nav>
</div>

    )
}
