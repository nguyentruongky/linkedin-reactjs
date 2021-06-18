import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDn5rVxXa9DQGZz7h6tnO2MjM2GCO5mQig',
    authDomain: 'linkedin-clone-8cee7.firebaseapp.com',
    projectId: 'linkedin-clone-8cee7',
    storageBucket: 'linkedin-clone-8cee7.appspot.com',
    messagingSenderId: '81699124445',
    appId: '1:81699124445:web:8a20ff37237fa121059734',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
