import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const PostingDetails = (props) => {
    const { posting, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />

    if (posting) {
        return (
            <div className="container section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ posting.title }</span>
                        <p>{ posting.content }</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by { posting.postersFirstName } { posting.postersLastName }</div>
                        <div>November 1st, 2019</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => { 
    const id = ownProps.match.params.id;
    const postings = state.firestore.data.postings;
    const posting = postings ? postings[id] : null
    return {
        posting: posting,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'postings'
    }])
)(PostingDetails)
