import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvnDvqA47CR2GPCt88SZG9P7FZQtDc_aI",
  authDomain: "clone2-cbfc0.firebaseapp.com",
  databaseURL: "https://clone2-cbfc0.firebaseio.com",
  projectId: "clone2-cbfc0",
  storageBucket: "clone2-cbfc0.appspot.com",
  messagingSenderId: "105299424986",
  appId: "1:105299424986:web:f4ffc5091ffded464dd7e3",
  measurementId: "G-NEJG0KXVNE",
});

const auth = firebase.auth();

export { auth };
