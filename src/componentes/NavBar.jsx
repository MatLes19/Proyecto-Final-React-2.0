import React from 'react'
import "./NavBar.css"
import CarWidget from './CarWidget'

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className='brand'>
            <img width={100} src="https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.63/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg" alt="" />
        </div>
        <ul>
            <li>Home</li>
            <li>Vestimentas</li>
            <li>Quienes soy??</li>
            <li>Carrito</li>
        </ul>
        <CarWidget/>
    </nav>
  )
}
   export default NavBar