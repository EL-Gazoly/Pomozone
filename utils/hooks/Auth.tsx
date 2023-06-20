import {AuthService} from '../service/AuthSerivce'
import firebase from 'firebase/compat/app';
import { createContext, useContext, useState } from 'react'

interface AuthContext { 
    user: firebase.User | null | undefined;
    error: string;
    loginWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
}

interface Props { 
    children: React.ReactNode;
}

const authContext = createContext({} as AuthContext);

export default function useAuth() {
    return useContext(authContext);
}

export function AuthProvider ({children, ...props} : Props) {   

    const [user, setUser] = useState <firebase.User | null>()
    const [error, setError] = useState("")

    const loginWithGoogle = async() => {

        const { error , user } = await AuthService.loginWithGoogle()
        //@ts-ignore
        setUser( user ?? null)
        setError( error ?? "")

    };

    const logout = async() => {
        await AuthService.logout();
        setUser(null);
    }

    const value = {user, error, loginWithGoogle, logout}


    return(
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )

}