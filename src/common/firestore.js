import Firebase from 'firebase'
require('firebase/firestore')

let firestoreApp = Firebase.initializeApp({
  apiKey: "AIzaSyBU0WB8jf5RoRCC66Hp67Ld4kW6qABtHgs",
  authDomain: "testfirestore-4c695.firebaseapp.com",
  databaseURL: "https://testfirestore-4c695.firebaseio.com",
  projectId: "testfirestore-4c695",
  storageBucket: "testfirestore-4c695.appspot.com",
  messagingSenderId: "913547994367"
})

export const FIRESTORE = firestoreApp.firestore()
