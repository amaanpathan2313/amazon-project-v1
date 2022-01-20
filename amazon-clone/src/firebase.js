import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBpEfSgSR1Fs2ff5YTNZlKGLxdsUjLNgAc",
    authDomain: "clone-5544d.firebaseapp.com",
    projectId: "clone-5544d",
    storageBucket: "clone-5544d.appspot.com",
    messagingSenderId: "527811190828",
    appId: "1:527811190828:web:e45b4471867f7a8165f189"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export {db , auth};