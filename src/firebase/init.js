import firebase from 'firebase'
import firestore from 'firebase/firestore'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBnw6fcVcOPnVU3KQO9UOfvlwgGNwY8WOw",
    authDomain: "vue-project-mychat.firebaseapp.com",
    databaseURL: "https://vue-project-mychat.firebaseio.com",
    projectId: "vue-project-mychat",
    storageBucket: "vue-project-mychat.appspot.com",
    messagingSenderId: "536813465286",
    appId: "1:536813465286:web:e71c631a202d48b81b31c7"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
