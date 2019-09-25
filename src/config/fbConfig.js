import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDg9kdwaUVYGipB1InqensQVY_IuytStdQ",
    authDomain: "spike-exercise-a74ff.firebaseapp.com",
    databaseURL: "https://spike-exercise-a74ff.firebaseio.com",
    projectId: "spike-exercise-a74ff",
    storageBucket: "",
    messagingSenderId: "663666060239",
    appId: "1:663666060239:web:5fa1d9438bd662af82c0ba",
    measurementId: "G-54EJ7PXDKF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;