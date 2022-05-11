import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className="navigation_bar">
      <Link to="/" className='no_special_decoration'>
        <h3 className='display_inline'>SMS</h3>
      </Link>
      <Link to="/admission" className='float_right'>Admission Form</Link>
    </div>
  )
}

export default NavigationBar