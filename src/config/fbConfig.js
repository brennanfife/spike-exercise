import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDc0sprMjQIN29eogHStOOKNQvWQpQaJJ0",
    authDomain: "spike-2b14d.firebaseapp.com",
    databaseURL: "https://spike-2b14d.firebaseio.com",
    projectId: "spike-2b14d",
    storageBucket: "",
    messagingSenderId: "1017619517585",
    appId: "1:1017619517585:web:b7e0b69dea52a684802f30",
    measurementId: "G-L9LJLTEFEG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase