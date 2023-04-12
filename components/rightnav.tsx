import Image from "next/image";
import Link from "next/link";
const RightNav = () => {
    return (  

        <>
         <div className="right hidden md:grid grid-cols-1 w-64 h-screen border bg-white border-border items-center justify-center   ">
      <div className="logo flex flex-row items-center justify-center mr-6 mt-16 self-start">
            <Image src="/logo.svg" alt="logo"  width={58}  height={46}   quality={100}/>
            <span className={` font-extrabold text-xl text-primary` }> Pomozone</span>
          </div>

      
    <div className="div grid grid-cols-1  flex-1 items-center justify-center gap-y-20 ml-5 ">
      
      <Link href="/" className="time flex flex-row items-center  gap-x-2 cursor-pointer ml-4">
                  <Image src="/timeIcon.svg" width={37} height={27} alt="time" quality={100}/>
                  <span>Timer</span>
                </Link>

                <Link href={"/settings"} className="settings flex flex-row gap-x-2 items-center ml-5 opacity-70 hover:opacity-100 cursor-pointer">
                  <Image src="/Settings.svg" width={35} height={30} alt="settings" quality={100}/>
                  <span>Settings</span>
                </Link>

              
        

      </div>
      <div className="lightMode flex flex-row items-center ml-10 gap-x-2 opacity-70 hover:opacity-100 self-end mb-14 cursor-pointer">
                  <Image src="/light.svg" width={40} height={38} alt="light" quality={100}/>
                  <span>Light Mode</span>
                
                </div>
      </div>
        </> 
    );
}
 
export default RightNav;