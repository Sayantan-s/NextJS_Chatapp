import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/firestore'
const Config = {
    apiKey: "AIzaSyDtWMlNHWufXi2weR1hYQTN9UjDqBOcV_4",
    authDomain: "chat-app-6a541.firebaseapp.com",
    databaseURL: "https://chat-app-6a541.firebaseio.com",
    projectId: "chat-app-6a541",
    storageBucket: "chat-app-6a541.appspot.com",
    messagingSenderId: "856152974268",
    appId: "1:856152974268:web:1f6e58076f79fc0a3f41b9",
    measurementId: "G-V7CZLQ2CRK"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(Config)
  }
  export const fireAuth = firebase.auth();
  export const fireDB =  firebase.firestore();
  
  const FBprovider = new firebase.auth.FacebookAuthProvider();
  FBprovider.setCustomParameters({
    'display' : 'popup'
  })
  export const signInWithFB = () => auth.signInWithPopup(FBprovider);

export default firebase