import React, { Component } from 'react'
import PostingList from '../postings/PostingList'
import { connect } from 'react-redux' //connects dashboard with redux store
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { postings } = this.props;
        return (
            <div className="dashboard container">
                <PostingList postings={postings} />
            </div>
        )
    }
}


//posting from rootReducer and postings from initState.
//Allows us to connect to store
const mapStateToProps = (state) => {
    console.log(state)
    return {
        postings: state.firestore.ordered.postings
    }
}

// firestoreConnect will connect us to our database
export default compose(
   connect(mapStateToProps),
   firestoreConnect([
       { collection: 'postings' }
   ]) 
)(Dashboard)