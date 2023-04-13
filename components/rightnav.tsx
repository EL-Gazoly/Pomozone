import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";

const RightNav = () => {

  const { systemTheme, theme, setTheme } = useTheme();

    const [lastSelected, setLastSelected] = useState("timer");

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

    return (  

        <>
         <div className="right hidden md:grid grid-cols-1 w-64 h-screen border-r  border-border items-center justify-center dark:bg-darkbg">
          <div className="self-start grid grid-cols-1 gap-y-16">
      <div className="logo flex flex-row items-center justify-center mr-6 mt-16 ">
            <Image src="/logo.svg" alt="logo"  width={58}  height={46}   quality={100}/>
            <span className={` font-extrabold text-xl text-primary` }> Pomozone</span>
          </div>

      
    <div className="div grid grid-cols-1  flex-1 items-center justify-center  gap-y-11 ">
                <div  className=" w-full hover:bg-gray-100 py-3 pl-5" >
                  <Link href="/" className={`time flex flex-row items-center  gap-x-2 cursor-pointer ml-4
                  ${lastSelected === "timer" ? "opacity-100" : "opacity-60 hover:opacity-100  "}}  `
                }
                  onClick={() => setLastSelected("timer")}
                  >
                    {currentTheme === "light" ? (
                    <Image src="/timeIcon.svg" width={37} height={27} alt="time" quality={100}/>
                    ) : (
                    <Image src="/dark-timeIcon.svg" width={37} height={27} alt="time" quality={100}/>
                    )}
                    <span  >Timer</span>
                  </Link>
                  </div>

                  <div  className=" w-full hover:bg-gray-100 py-3 pl-5" >
                  <Link href={"/settings"} className={`settings flex flex-row gap-x-2 items-center ml-5 cursor-pointer
                  ${lastSelected === "settings" ? "opacity-100" : "opacity-60 hover:opacity-100"}}  
                  `}
                  onClick={() => setLastSelected("settings")}
                  >
                    {currentTheme === "light" ? (
                      <Image src="/Settings.svg" width={35} height={30} alt="settings" quality={100}/>
                    ) : (
                      <Image src="/dark-settings.svg" width={35} height={30} alt="settings" quality={100}/>
                    )}
                      <span>Settings</span>
                  </Link>
                  </div>

              
        

      </div>

      </div>
      {currentTheme === "light" ? (
      <div className="lightMode flex flex-row items-center ml-10 gap-x-2 opacity-70 hover:opacity-100 self-end mb-14 cursor-pointer"
      onClick={toggleTheme}
      > 
                 
                  <Image src="/light.svg" width={40} height={38} alt="light" quality={100}/>
                  <span>Light Mode</span>
                
               

                
                </div>
        ) : (
          <div className="darkMode flex flex-row items-center ml-10 gap-x-2 opacity-70 hover:opacity-100 self-end mb-14 cursor-pointer"
          onClick={toggleTheme}
          >
                  <Image src="/DarkIcon.svg" width={40} height={38} alt="dark" quality={100}/>
                  <span>Dark Mode</span>
          </div>
        )}
      </div>
        </> 
    );
}
 
export default RightNav;