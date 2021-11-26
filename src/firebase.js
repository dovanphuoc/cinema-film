import firebase from '@firebase/app'
import '@firebase/firestore'
import 'firebase/analytics'
import '@firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAEUz1xVinJg-U5vFM2n5i2aujXmPc3rG4',
  authDomain: 'cinema-f64ac.firebaseapp.com',
  projectId: 'cinema-f64ac',
  storageBucket: 'cinema-f64ac.appspot.com',
  messagingSenderId: '842927329954',
  appId: '1:842927329954:web:26ffe137a4ffa9a221bdfb',
  measurementId: 'G-BRRSLJH6QC',
}
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
firebase.analytics()
const auth = firebase.auth()
const db = firebase.firestore()
// const googleProvider = new firebase.auth.GoogleAuthProvider()
// const facebookProvider = new firebase.auth.FacebookAuthProvider()
// auth.setPersistence('local')
export default firebase
export { db, auth }
