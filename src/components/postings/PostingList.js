import React from 'react'
import PostingSummary from './PostingSummary'
import { Link } from 'react-router-dom'

const PostingList = ({postings}) => {
    return (
        <div className="section">
            { postings && postings.map(posting => {
                return (
                    <Link to={'/posting/' + posting.id} key={posting.id}>
                        <PostingSummary posting={posting} />
                    </Link>
                )
            })}
        </div>
    )
}

export default PostingList