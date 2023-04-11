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
    
    
      <div className="left flex flex-col items-center w-full mt-14 ">
        <CircleProgress size={240} />

      </div>
     
    </main>


    </>
  )
}