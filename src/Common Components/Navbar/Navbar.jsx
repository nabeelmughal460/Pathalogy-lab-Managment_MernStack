import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={logo} alt="logo"  className='Img-logo'/>
        </div>
        <div className='rightside'>
            <div className="Links-rightside">Create New</div>
            <div className="Links-rightside">Report</div>
            <div className="Links-rightside">AddTest</div>

        </div>
        
    </div>
  )
}

export default Navbar
