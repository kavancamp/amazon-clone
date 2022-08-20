import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCMVpKWujYGfk3LSzHbiskgppi9LvkPyhc",
  authDomain: "clone-946c0.firebaseapp.com",
  projectId: "clone-946c0",
  storageBucket: "clone-946c0.appspot.com",
  messagingSenderId: "516515981621",
  appId: "1:516515981621:web:3e925191106ac3921c047c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };