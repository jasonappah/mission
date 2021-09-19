import firebase from 'firebase/app';
import 'firebase/auth';

const FirebaseSettings = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseSettings)
}

export default firebase;
