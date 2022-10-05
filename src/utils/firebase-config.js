import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyA8wwdopLBN8ca-Rl3jjsxUTlh4uTBqL0g',
    authDomain: 'react-netflix-clone-76a58.firebaseapp.com',
    projectId: 'react-netflix-clone-76a58',
    storageBucket: 'react-netflix-clone-76a58.appspot.com',
    messagingSenderId: '673038995336',
    appId: '1:673038995336:web:165c88a3b633d92366b43d',
    measurementId: 'G-FHEWWSJR27',
}

const app = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(app)