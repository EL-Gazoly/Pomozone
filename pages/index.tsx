
import { Inter } from 'next/font/google'
import Head from 'next/head'
import CircleProgress from '../components/CircleProgress'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  



  return (
    <>
    <Head>
      <title>Pomozone | Home</title>
    </Head>
    <main className={` ${inter.className} flex flex-col md:flex-row`}>
     
    
      <div className="left flex flex-col items-center w-full mt-24 md:justify-center">
        <CircleProgress size={290} />

      </div>
     
    </main>


    </>
  )
}