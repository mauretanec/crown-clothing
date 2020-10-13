import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBPi_RTAnc9rn6aHfTrLsshGRS4MobiDeQ",
  authDomain: "crown-db-58718.firebaseapp.com",
  databaseURL: "https://crown-db-58718.firebaseio.com",
  projectId: "crown-db-58718",
  storageBucket: "crown-db-58718.appspot.com",
  messagingSenderId: "242144695073",
  appId: "1:242144695073:web:24e4d6f9752cd2ef562460",
  measurementId: "G-B04TTB01SS"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ propmt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
