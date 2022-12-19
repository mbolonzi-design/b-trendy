import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {
  return (
    <nav>
      <Link to='/' className='link'>Home</Link>
      <Link to='/ProductList' className='link'>Shop</Link>
      <Link to='/Login' className='link'>Login</Link>
      {/* <Link to='/Register' className='link'>Register</Link> */}
    </nav>
  )
}

export default NavBar