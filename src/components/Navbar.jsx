import React from 'react'
import Pokemon from './Pokemon.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <ul className='navbar'>
            <li><Link to='/'>Pokemon</Link></li>
            <li><Link to='/'><img src={Pokemon} width='40px' alt='pokemon logo'/></Link></li>
        </ul>
    </div>
  )
}

export default Navbar
