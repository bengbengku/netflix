import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBmbzYXQQoWkvwWJAmUp6IROkDH84krgg4",
    authDomain: "netflix-3e59b.firebaseapp.com",
    databaseURL: "https://netflix-3e59b.firebaseio.com",
    projectId: "netflix-3e59b",
    storageBucket: "netflix-3e59b.appspot.com",
    messagingSenderId: "1091496652483",
    appId: "1:1091496652483:web:8fb68e0ff1696eb7847c76"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
