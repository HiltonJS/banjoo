
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';


const config={
    apiKey: "AIzaSyDD-2vEkAN-_kR8t4nlVVWY-jctrwmSowA",
    authDomain: "banjo-clothing.firebaseapp.com",
    databaseURL: "https://banjo-clothing.firebaseio.com",
    projectId: "banjo-clothing",
    storageBucket: "banjo-clothing.appspot.com",
    messagingSenderId: "273162104744",
    appId: "1:273162104744:web:3182de98990a4b8391379d",
    measurementId: "G-M7KGCHH6ED"
  }

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore=firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle= ()=> auth.signInWithPopup(provider);
export default firebase;
