import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getFirestore } from 'redux-firestore'
import { firestoreConnect } from 'react-redux-firebase'
import CommentForm from './CommentForm' 

class PostComments extends Component {
    submitComment = (comment) => {
        const firestore = getFirestore()
        firestore.collection('comments').add({
            content: comment
        })
    }

    render() {
        const { comments, auth } = this.props
        return (
            <div className="container">
                <h5>Post Comments</h5>
                { comments && comments.map(comment => {
                    return <p key={comment.id}>{comment.content}</p>
                })}
                { auth.uid ? (
                    <CommentForm submitComment={this.submitComment} />
                ) : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.firestore.ordered.comments,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'comments' }])
)(PostComments)
