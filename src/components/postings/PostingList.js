import React from 'react'
import PostingSummary from './PostingSummary'

const PostingList = ({postings}) => {
    return (
        <div className="section">
            { postings && postings.map(posting => {
                return (
                    <PostingSummary posting={posting} key={posting.id} />
                )
            })}
        </div>
    )
}

export default PostingList