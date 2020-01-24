
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
  };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{

    if(!userAuth) return;

    const userRef =firestore.doc(`users/${userAuth.uid}`);

    const snapShot= await userRef.get();

    if(!snapShot.exists){

      const{displayName, email}=userAuth;
      const createAt=new Date();
       
      try{

        await userRef.set({
            displayName,
            email,
            createAt,
            ...additionalData

        })

      }catch(error){

        console.log('error creating user', error.message);
      }

    }
    return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{

    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
      
      });

      return await batch.commit();

  };

 export  const convertCollectionsSnapshotToMap=(collections)=>{

      const transformedCollection =collections.docs.map(doc=>{
        
const  {title, items}= doc.data();

        return {

            routeName:encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
          }
      });
    return transformedCollection.reduce( (accumulator, collection) =>{
        accumulator[ collection.title.toLowerCase()]=collection;

        return accumulator;
      } ,{})
  }


  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore=firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle= ()=> auth.signInWithPopup(provider);
export default firebase;
