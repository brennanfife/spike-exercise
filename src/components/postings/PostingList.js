// posting-list and posting-list are custom css

import React from 'react'
import PostingSummary from './PostingSummary'

const PostingList = () => {
    return (
        <div className="section posting-list">
            <PostingSummary />
            <PostingSummary />
            <PostingSummary />
            <PostingSummary />
        </div>
    )
}

export default PostingList