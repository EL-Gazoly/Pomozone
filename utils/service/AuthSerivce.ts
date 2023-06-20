import * as firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth"

const auth = getAuth()
export const AuthService = {
    loginWithGoogle: async () => {
        const provider = new GoogleAuthProvider()

        try {
            const userCred = await signInWithPopup(auth, provider);

            return {
                user : userCred.user
            }
        }
        catch(e : any){
            return {
                error : e.message
            }
        }
    },

    logout : async() => {
        await signOut(auth)
    }
};