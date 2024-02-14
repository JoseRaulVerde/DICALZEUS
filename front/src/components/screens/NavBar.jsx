import React from "react"
import './NavBar.css'
import Login from './Acounts/Login/Login.jsx'

function NavBar (){
return (
<nav className="navbar">
          <div className="navbar-logo">
            <a href="/">Pet Sitters</a>
          </div>
          <ul className="navbar-links">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
            <a href="/searchCrarer">Buscar cuidador</a>
            </li>
            <li>
              <a href="/createAcount">Crear Cuenta</a>
            </li>
            <li>
                <a href="/login" onClick={Login}>Login</a>
            </li>
          </ul>
        </nav>
)
}
export default NavBar