// posting-details is custom css

import React from 'react'

const PostingDetails = (props) => {
    const id = props.match.params.id; //console.log(props) to see the value react-router supplies this component
    return (
        <div className="container section posting-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Posting Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, numquam quae ex dolores tempore totam pariatur sed, dignissimos consectetur laboriosam a veniam neque officia atque nihil quaerat corporis cumque iusto!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Brennan Fife</div>
                    <div>November 1st, 2019</div>
                </div>
            </div>
        </div>
    )
}

export default PostingDetails
