import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

// If one is to click on Sign Out, then it dispatches the action creator below
// Inside the action creator (located in authActions), it will sign them out,
// then dispatch SIGNOUT_SUCCESS. Then, if we get SIGNOUT_SUCCESS, it will be handled
// in the authReducer
const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Posting</NavLink></li>
            <li><a onClick={props.signOut}>Sign Out</a></li>
            <li><NavLink to='/' className='btn btn-floating red lighten-1'>BF</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)