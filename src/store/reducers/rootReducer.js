import authReducer from './authReducer'
import postingReducer from './postingReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

// firestoreReducer is responsible for syncing our data
// firebaseReducer will sync our auth status on firebase with our app 
// in the state and put it on firebase
const rootReducer = combineReducers({
    auth: authReducer,
    posting: postingReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer