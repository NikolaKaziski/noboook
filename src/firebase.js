import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2dBOJf2kXu5UULm0dHwYBt_-IS7bITow",
  authDomain: "facebook-clone-ab8e8.firebaseapp.com",
  databaseURL: "https://facebook-clone-ab8e8-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-ab8e8",
  storageBucket: "facebook-clone-ab8e8.appspot.com",
  messagingSenderId: "964127951654",
  appId: "1:964127951654:web:3e5d23a7f426c718ad4fe7",
  measurementId: "G-S988H5PM3R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;