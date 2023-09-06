import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            name: displayName, email, photoURL, uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async ({ name, password, email }) => {
    try {
        console.log(name, password, email);
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        console.log(resp);
        const { uid, photoURL } = resp.user;
        console.log(name, password, photoURL)
        await updateProfile(FirebaseAuth.currentUser, { name });

        return {
            ok: true,
            uid, photoURL, email, name
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const { user } = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, name } = user;

        console.log(user);
        return {
            ok: true,
            uid, photoURL, displayName: name
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.code
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}