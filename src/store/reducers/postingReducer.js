const initState = {
    postings: [
        {id: '1', title: 'Posting 1', content: 'blah blah blah'},
        {id: '2', title: 'Posting 2', content: 'blah blah blah'},
        {id: '3', title: 'Posting 3', content: 'blah blah blah'}
    ] 
}

const postingReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_POSTING':
            console.log('created posting', action.posting)
            return state
        case 'CREATE_POSTING_ERROR':
            console.log('create posting error', action.error)
            return state
        default:
            return state 
    }
}

export default postingReducer