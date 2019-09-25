import authReducer from './authReducer'
import postingReducer from './postingReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

// firestoreReducer is responsible for syncing our data
const rootReducer = combineReducers({
    auth: authReducer,
    posting: postingReducer,
    firestore: firestoreReducer
})

export default rootReducer