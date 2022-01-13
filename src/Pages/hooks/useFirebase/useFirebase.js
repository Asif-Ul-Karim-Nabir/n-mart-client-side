import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseInitialization from '../../Login/Firebase/firebase.initialize';
import { useState } from 'react';

firebaseInitialization()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            setUser(user)
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    
    return {
        user,
        signInUsingGoogle,

    }
};

export default useFirebase;