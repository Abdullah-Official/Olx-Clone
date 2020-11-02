import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbZdFqbRAJKz7bwHEC6lg5tiqeD3sVhJ8",
    authDomain: "olx-clone-fbd19.firebaseapp.com",
    databaseURL: "https://olx-clone-fbd19.firebaseio.com",
    projectId: "olx-clone-fbd19",
    storageBucket: "olx-clone-fbd19.appspot.com",
    messagingSenderId: "805411382095",
    appId: "1:805411382095:web:ec4bbd453430159bd05b3a",
    measurementId: "G-7X8FE47YT5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider, storage,db}
export default firebase