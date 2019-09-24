import React, { Component } from 'react'
import PostingList from '../postings/PostingList'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <PostingList />
            </div>
        )
    }
}

export default Dashboard