import Image from "next/image";
import "utils/config/firebase";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import useAuth from "../utils/hooks/Auth"

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const SignIn = () => {

    const [DarkMode, setDarkMode] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const [show, setShow] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem("isDark");
        if (isDark) setDarkMode(JSON.parse(isDark));
    }, []);
    
      
    
      const currentTheme = theme === "system" ? systemTheme : theme;

    const provider = new GoogleAuthProvider()

    const login = async () => {
        signInWithPopup
    }
    

    return (
        <div >
             <div className="signin-button hidden md:flex absolute top-14 md:right-4 xl:right-5 2xl:right-16">
            { currentTheme === "dark" ? (
          <div onClick={login} className="sing-button border border-border flex flex-row cursor-pointer p-2 gap-x-2 hover:bg-gray-300 transition-all duration-500 items-center justify-center">
              <Image src="/dark-singIcon.svg" alt="sign in"  width={24}  height={24}   quality={100}/>
            <span className=' uppercase text-sm  text-white'> sign in</span>
            </div>
            ) : (
          <div onClick={login} className="sing-button border border-border flex flex-row cursor-pointer p-2 gap-x-2 hover:bg-gray-300 transition-all duration-500 items-center justify-center">
            
            <Image src="/signIcon.svg" alt="sign in"  width={24}  height={24}   quality={100}/>
            <span className=' uppercase text-sm '> sign in</span>
            
          </div>
          )}
          </div>
        </div>
    )
}

export default SignIn