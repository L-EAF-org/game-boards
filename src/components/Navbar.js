import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/one">One</Link>
      <Link to="/two">Two</Link>
    </div>
  )
}

export default Navbar
