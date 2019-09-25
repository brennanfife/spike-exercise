import React from 'react'
import moment from 'moment'

const PostingSummary = ({posting}) => {
    return (
        <div className="card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{posting.title}</span>
                <p>Posted by {posting.postersFirstName} {posting.posterLastName}</p>
                <p className='grey-text'>{moment(posting.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default PostingSummary