import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Posting</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating red lighten-1'>BF</NavLink></li>
        </ul>
    )
}

export default SignedInLinks