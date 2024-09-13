// import * as firebase from "firebase/app";
// import "firebase/analytics";

import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDjKryDEl36wmn2g-rfTa2tPCJrTva8jJI",
    authDomain: "pilot-ext2.firebaseapp.com",
    databaseURL: "https://pilot-ext2.firebaseio.com",
    projectId: "pilot-ext2",
    storageBucket: "pilot-ext2.appspot.com",
    messagingSenderId: "500411284177",
    appId: "1:500411284177:web:921b1f730503bb1335e3f0",
    measurementId: "G-NDS1JBM52K"
};
firebase.initializeApp(config);

export default firebase;