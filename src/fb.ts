// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDHBONkl3n1hv3qcjFgK2awRLrxgs2lwtQ',
  authDomain: 'todo-vuetify-7bbbe.firebaseapp.com',
  projectId: 'todo-vuetify-7bbbe',
  storageBucket: 'todo-vuetify-7bbbe.appspot.com',
  messagingSenderId: '994478042079',
  appId: '1:994478042079:web:63e5ccb027eb1ab32df26a',
  measurementId: 'G-2H85CMV7FC'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
