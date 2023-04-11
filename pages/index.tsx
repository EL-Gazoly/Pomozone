import { Inter } from 'next/font/google'
import CircleProgress from '../components/CircleProgress'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {





  return (
    <>
    <main className={` ${inter.className} flex flex-col`}>
     

      <div className="left flex flex-col items-center w-full mt-14 ">
        <CircleProgress size={240} />

      </div>
    
    </main>

    

    </>
  )
}