import Image from 'next/image'
import { Inter } from 'next/font/google'
import CircleProgress from '../components/CircleProgress'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={` ${inter.className} flex flex-col`}>
      <div className="top md:hidden flex flex-row mt-7 mx-3 justify-between">

        <div className="sing-button border border-border flex flex-row cursor-pointer p-2 gap-x-2 hover:bg-gray-300 transition-all duration-500 items-center justify-center">
          <Image src="/signIcon.svg" alt="sign in"  width={24}  height={24}   quality={100}/>
          <span className=' uppercase text-sm '> sing in</span>
          
        </div>

        <div className="logo flex flex-row items-center justify-center mr-6">
          <Image src="/logo.svg" alt="logo"  width={40}  height={33}   quality={100}/>
          <span className={` font-extrabold text-base text-primary` }> Pomozone</span>
        </div>

        <div className="menu flex flex-row">
          <Image src="/menu.svg" width={24} height={16} alt="menu" quality={100}/>

        </div>

      </div>

      <div className="left flex flex-col items-center w-full mt-14 gap-y-7">
        <CircleProgress size={240}/>

        <div className="buttons flex flex-row gap-x-8 justify-center items-center">
          <div className="resetbutton border border-border rounded-full p-1 hover:bg-gray-100 cursor-pointer " >
            <Image src="/resetTimerButton.svg" width={24} height={24} alt="reset" quality={100}/>
          </div>

          <div className="startbutton border border-primary rounded-full p-2 hover:bg-gray-100 cursor-pointer " >
            <Image src="/startTimerButton.svg" width={24} height={24} alt="" quality={100}/>
          </div>

          <div className="skipbutton border  border-border rounded-full p-1 hover:bg-gray-100 cursor-pointer " >
            <Image src="/skipTimerButton.svg" width={24} height={24} alt="" quality={100}/>
          </div>

        </div>

        <div className={`text-base font-medium number-sessions flex flex-col gap-y-1 text-center mt-24`}>
          <span> 1 of 4</span>   
          <span> sessions</span>       
        </div>

        <Footer/>

        


      </div>
    </main>
  )
}