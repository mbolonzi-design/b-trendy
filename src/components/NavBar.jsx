import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <div>
        <ul>
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/productlist'>Products</NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar