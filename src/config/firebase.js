import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBILyQiwYxK69U3nKqSWIxNkjCH52Vf860",
  authDomain: "spacesoftt.firebaseapp.com",
  projectId: "spacesoftt",
  storageBucket: "spacesoftt.appspot.com",
  messagingSenderId: "977153672529",
  appId: "1:977153672529:web:b0db695341fa6edc32ff70",
  measurementId: "G-KLPY7ENK2N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
