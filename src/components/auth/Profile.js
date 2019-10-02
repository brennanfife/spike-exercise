import React, { Component } from 'react'
import UpdateProfile from './UpdateProfile'

class Profile extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        authError: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <UpdateProfile />
            </div>
        )
    }
}

export default Profile
