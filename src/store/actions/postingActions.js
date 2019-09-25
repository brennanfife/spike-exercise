export const createPosting = (posting) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore(); // creates a reference to our firestore database
        
        // add this to the 'postings' collection. '...posting' spreads the posting.title and posting.content
        firestore.collection('postings').add({
            ...posting,
            posterFirstName: 'Brennan',
            postersLastName: 'Fife',
            posterId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POSTING', posting })
        }).catch((error) => {
            dispatch({ type: 'CREATE_POSTING_ERROR', error })
        })
    }
}