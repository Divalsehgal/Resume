import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdmnBIlQ1rR4RyjXzfVUAHvr3UFf-1nrQ",
  authDomain: "resume-50c34.firebaseapp.com",
  databaseURL: "https://resume-50c34.firebaseio.com",
  projectId: "resume-50c34",
  storageBucket: "resume-50c34.appspot.com",
  messagingSenderId: "393498350320",
  appId: "1:393498350320:web:51391c2592d04f03e2a835",
  measurementId: "G-NWQ17WJTLF",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
