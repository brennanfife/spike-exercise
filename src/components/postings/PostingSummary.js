import React from 'react'

const PostingSummary = ({posting}) => {
    return (
        <div className="card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{posting.title}</span>
                <p>Posted by Brennan Fife</p>
                <p className='grey-text'>November 1st, 2019</p>
            </div>
        </div>
    )
}

export default PostingSummary