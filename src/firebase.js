import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  
    apiKey: "AIzaSyCQvta81rP1rCr1cHhDuCXT-XLIOXSOvLo",
    authDomain: "clone-fde7c.firebaseapp.com",
    projectId: "clone-fde7c",
    storageBucket: "clone-fde7c.appspot.com",
    messagingSenderId: "699034599723",
    appId: "1:699034599723:web:86cbce1196ff71a1ff056e",
    measurementId: "G-DPX1R20WYZ"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };