import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { useState } from 'react'
import CircleProgress from '../components/CircleProgress'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [show, setShow] = useState(false)



  return (
    <>
    <main className={` ${inter.className} flex flex-col md:flex-row`}>
      <div className="right hidden md:grid grid-cols-1 w-64 h-screen border bg-white border-border items-center justify-center   ">
      <div className="logo flex flex-row items-center justify-center mr-6 mt-16 self-start">
            <Image src="/logo.svg" alt="logo"  width={58}  height={46}   quality={100}/>
            <span className={` font-extrabold text-xl text-primary` }> Pomozone</span>
          </div>

      
    <div className="div grid grid-cols-1  flex-1 items-center justify-center gap-y-24 ml-5 ">
      
      <div className="time flex flex-row items-center  gap-x-2 cursor-pointer ml-4">
                  <Image src="/timeIcon.svg" width={37} height={27} alt="time" quality={100}/>
                  <span>Timer</span>
                </div>

                <div className="settings flex flex-row gap-x-2 items-center ml-5 opacity-70 hover:opacity-100 cursor-pointer">
                  <Image src="/Settings.svg" width={35} height={30} alt="settings" quality={100}/>
                  <span>Settings</span>
                </div>

              
        

      </div>
      <div className="lightMode flex flex-row items-center ml-10 gap-x-2 opacity-70 hover:opacity-100 self-end mb-14 cursor-pointer">
                  <Image src="/light.svg" width={40} height={38} alt="light" quality={100}/>
                  <span>Light Mode</span>
                
                </div>
      </div>

      <div className="left flex flex-col items-center w-full mt-14 md:justify-center md:mb-80">
        <CircleProgress size={240} />

      </div>
     
    </main>


    </>
  )
}