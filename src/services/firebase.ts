import firebase from 'firebase/compat/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,

    authDomain: process.env.REACT_APP_AUTH_DOMAIN,

    projectId: process.env.REACT_APP_PROJECT_ID,

    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,

    appId: process.env.REACT_APP_APP_ID,

    measurementId: process.env.MEASUREMENT_ID

};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();