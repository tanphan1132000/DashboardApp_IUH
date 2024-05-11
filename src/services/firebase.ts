// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBQJrPzNGOnn5sbrBMH_bI_2gDUHD6K0S4',
  authDomain: 'dashboard-iuh.firebaseapp.com',
  projectId: 'dashboard-iuh',
  storageBucket: 'dashboard-iuh.appspot.com',
  messagingSenderId: '575946683016',
  appId: '1:575946683016:web:8d80c5475f6264fc5ba53d',
  measurementId: 'G-E3KG4LVGTK',
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
