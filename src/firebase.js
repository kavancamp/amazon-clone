import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const { initializeApp } = require("firebase/app");
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");

const app = initializeApp({
  // Your firebase configuration object\  
  apiKey: "AIzaSyCMVpKWujYGfk3LSzHbiskgppi9LvkPyhc",
  authDomain: "clone-946c0.firebaseapp.com",
  projectId: "clone-946c0",
  storageBucket: "clone-946c0.appspot.com",
  messagingSenderId: "516515981621",
  appId: "1:516515981621:web:3e925191106ac3921c047c"
});

const firebaseConfig = {
  apiKey: "AIzaSyCMVpKWujYGfk3LSzHbiskgppi9LvkPyhc",
  authDomain: "clone-946c0.firebaseapp.com",
  projectId: "clone-946c0",
  storageBucket: "clone-946c0.appspot.com",
  messagingSenderId: "516515981621",
  appId: "1:516515981621:web:3e925191106ac3921c047c"
};
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LcAIushAAAAAJiHOgrufhUeF-UBYdVoEsPyu_us'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };