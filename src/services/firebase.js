import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
  apiKey: "AIzaSyBQWYU_WJWun-1PKOA-KiZXmFwRQgdtHTo",
  authDomain: "chatty-3dd36.firebaseapp.com",
  projectId: "chatty-3dd36",
  storageBucket: "chatty-3dd36.appspot.com",
  messagingSenderId: "636791954787",
  appId: "1:636791954787:web:e2b6a78aa2c8ecad5c0756"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
