import Footer from "./Footer";
import RightNav from "./rightnav";
import Image from "next/image";
import { Inter } from 'next/font/google'
import { useState, useEffect } from "react";


const inter = Inter({ subsets: ['latin'] })
//@ts-ignore
const Layout = ({ children }) => {
  useEffect(() => {
    const isDark = localStorage.getItem("isDark");
    if (isDark) setDarkMode(JSON.parse(isDark));
}, []);

  const [DarkMode, setDarkMode] = useState(false);
  const [show, setShow] = useState(false)

    return (
        <div className={` 
        ${DarkMode ? 'bg-black' : ''}
        `}>
          <div className="top md:hidden flex flex-row mt-7 mx-3 justify-between">

          <div className="sing-button border border-border flex flex-row cursor-pointer p-2 gap-x-2 hover:bg-gray-300 transition-all duration-500 items-center justify-center">
            <Image src="/signIcon.svg" alt="sign in"  width={24}  height={24}   quality={100}/>
            <span className=' uppercase text-sm '> sign in</span>
            
          </div>

          <div className="logo flex flex-row items-center justify-center mr-6">
            <Image src="/logo.svg" alt="logo"  width={40}  height={33}   quality={100}/>
            <span className={` font-extrabold text-base text-primary` }> Pomozone</span>
          </div>

          <div className="menu flex flex-row"
          onClick={() => setShow(true)}
          >
            <Image src="/menu.svg" width={24} height={16} alt="menu" quality={100}/>

          </div>

          </div>
          <div className={` ${inter.className} flex flex-col md:flex-row`}>
        
          <div className="signin-button hidden md:flex absolute top-14 md:right-4 xl:right-5 2xl:right-16">
            { DarkMode ? (
          <div className="sing-button border border-border flex flex-row cursor-pointer p-2 gap-x-2 hover:bg-gray-300 transition-all duration-500 items-center justify-center">
              <Image src="/dark-singIcon.svg" alt="sign in"  width={24}  height={24}   quality={100}/>
            <span className=' uppercase text-sm  text-white'> sign in</span>
            </div>
            ) : (
          <div className="sing-button border border-border flex flex-row cursor-pointer p-2 gap-x-2 hover:bg-gray-300 transition-all duration-500 items-center justify-center">
            
            <Image src="/signIcon.svg" alt="sign in"  width={24}  height={24}   quality={100}/>
            <span className=' uppercase text-sm '> sign in</span>
            
          </div>
          )}
          </div>
          
          <RightNav/>
        
          <div className=" flex-1">
              {children}
              </div>
          </div>
          <div className="footer flex flex-col items-center">
        <Footer/>
          </div>


          <div className={` nav w-64 h-full absolute right-1 top-0 bg-white md:hidden
          ${show ? '' : 'hidden'}
          `}>
            <div className=' grid grid-col w-full mt-10  '>
              <div className="close justify-self-end mr-5"
              onClick={() => setShow(false)}
              >
                <Image src="/exitIcon.svg" width={24} height={24} alt="close" quality={100}/>
              </div>

              <div className="menu-item flex self-center flex-col justify-center items-center gap-y-12 mt-72 text-start
                font-normal text-base
              ">
                <div className="time flex flex-row items-center  gap-x-2">
                  <Image src="/timeIcon.svg" width={37} height={27} alt="time" quality={100}/>
                  <span>Timer</span>
                </div>

                <div className="settings flex flex-row gap-x-2 items-center ml-5 opacity-70 hover:opacity-100">
                  <Image src="/Settings.svg" width={35} height={30} alt="settings" quality={100}/>
                  <span>Settings</span>
                </div>

                <div className="lightMode flex flex-row items-center ml-10 gap-x-2 opacity-70 hover:opacity-100">
                  <Image src="/light.svg" width={40} height={38} alt="light" quality={100}/>
                  <span>Light Mode</span>
                
                </div>



              </div>


              
            </div>
          </div>
        </div>
      );
}
 
export default Layout;