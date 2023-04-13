import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const RightNav = () => {
    useEffect(() => {
        const isDark = localStorage.getItem("isDark");
        if (isDark) setDarkMode(JSON.parse(isDark));
    }, []);

    const [lastSelected, setLastSelected] = useState("timer");
    const [DarkMode, setDarkMode] = useState(false);
    

    const handleIsDark = () => {
        if (!DarkMode) { 
            localStorage.setItem("isDark", JSON.stringify(true));
            setDarkMode(true);
        }

        else {
            localStorage.setItem("isDark", JSON.stringify(false));
            setDarkMode(false);
        }


    }

    return (  

        <>
         <div className={`"right hidden md:grid grid-cols-1 w-64 h-screen border-r  border-border items-center justify-center   "
          ${DarkMode ? "bg-black " : "bg-white "}
         `}>
          <div className="self-start grid grid-cols-1 gap-y-16">
      <div className="logo flex flex-row items-center justify-center mr-6 mt-16 gap-x-2 ">
          { DarkMode ? (
            <Image src="/dark-logo.svg" alt="logo"  width={58}  height={46}   quality={100}/>

           ) : ( 
            <Image src="/logo.svg" alt="logo"  width={58}  height={46}   quality={100}/>
            ) }
            <span className={` font-extrabold text-xl 2xl:text-2xl 
            ${DarkMode ? " text-indigo-400 " : " text-primary "}
            ` }> Pomozone</span>
          </div>

      
    <div className="div grid grid-cols-1  flex-1 items-center justify-center  gap-y-11 ">
                <div  className={` w-full py-3 pl-5
                  ${DarkMode ? " hover:bg-neutral-800 " : " hover:bg-gray-100 "}
                `} >
                  <Link href="/" className={`time flex flex-row items-center  gap-x-2 cursor-pointer ml-4
                  ${lastSelected === "timer" ? "opacity-100" : "opacity-60 hover:opacity-100  "}}  `
                }
                  onClick={() => setLastSelected("timer")}
                  >
                    { DarkMode ?
                    (
                     <Image src="/dark-timeIcon.svg" width={37} height={27} alt="time" quality={100}/> 
                    )
                     :
                      (
                     <Image src="/timeIcon.svg" width={37} height={27} alt="time" quality={100}/>
                      )
                    }
                    <span className={` ${DarkMode ? " text-white " : ""}`}>Timer</span>
                  </Link>
                  </div>

                  <div  className= {` w-full  py-3 pl-5
                    ${DarkMode ? " hover:bg-neutral-800 " : " hover:bg-gray-100 "}
                  `} >
                  <Link href={"/settings"} className={`settings flex flex-row gap-x-2 items-center ml-5 cursor-pointer
                  ${lastSelected === "settings" ? "opacity-100" : "opacity-60 hover:opacity-100"}}  
                  `}
                  onClick={() => setLastSelected("settings")}
                  >
                    { DarkMode ? (
                       <Image src="/dark-settings.svg" width={35} height={30} alt="settings" quality={100}/>
                    ) : (
                        <Image src="/Settings.svg" width={35} height={30} alt="settings" quality={100}/>  
                    )}
                      
                      <span className={` ${DarkMode ? " text-white " : ""}`}>Settings</span>
                  </Link>
                  </div>

              
        

      </div>

      </div>
      <div className="lightMode flex flex-row items-center ml-10 gap-x-2 opacity-70 hover:opacity-100 self-end mb-14 cursor-pointer"
      
      onClick={handleIsDark}
      >   
                {!DarkMode ? (
                  <div className="flex flex-row items-center gap-x-2">
                    <Image src="/light.svg" width={40} height={38} alt="light" quality={100}/>
                    <span>Light Mode</span>
                  </div>

                ) : (
                  <div className="flex flex-row items-center gap-x-2">
                    <Image src="/DarkIcon.svg" width={40} height={38} alt="dark" quality={100}/>
                    <span className=" text-white">Dark Mode</span>
                  </div>
                )}
                
                </div>
      </div>
        </> 
    );
}
 
export default RightNav;