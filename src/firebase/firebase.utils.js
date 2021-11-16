import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyAoIpJODD_sNFWjtRVFL4zf1ujf7NpIxjQ",
    authDomain: "ladda-store.firebaseapp.com",
    projectId: "ladda-store",
    storageBucket: "ladda-store.appspot.com",
    messagingSenderId: "980174304099",
    appId: "1:980174304099:web:bc2fb18d33200c89e69956",
    measurementId: "G-R3WSPNCT67"
};

initializeApp(config);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    login_hint: 'user@example.com',
    prompt: 'select_account'
  });

export const auth = getAuth();
export const signInWithGoogle = () => {signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
