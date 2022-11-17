/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyB-TbZ7TtK4lGThPSO_apxhxEOoQxTWrfA",
  authDomain: "friendlychat-0805.firebaseapp.com",
  projectId: "friendlychat-0805",
  storageBucket: "friendlychat-0805.appspot.com",
  messagingSenderId: "556967408468",
  appId: "1:556967408468:web:18d312a3fff1b1c99c8ec1",
  measurementId: "G-S2346QBB78"
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}