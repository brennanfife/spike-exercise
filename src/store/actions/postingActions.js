export const createPosting = (posting) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore(); // creates a reference to our firestore database
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid

        // add this to the 'postings' collection. '...posting' spreads the posting.title and posting.content
        firestore.collection('postings').add({
            ...posting,
            postersFirstName: profile.firstName,
            postersLastName: profile.lastName,
            posterId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POSTING', posting })
        }).catch((error) => {
            dispatch({ type: 'CREATE_POSTING_ERROR', error })
        })
    }
}