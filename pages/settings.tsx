import Head from 'next/head';
import { useState } from 'react'
import { Inter } from 'next/font/google'
import Slider from '../components/slider'
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const inter = Inter({ subsets: ['latin'] })

const Settings = () => {

    const workMarks = [5 , 25 ,60]
    const breakMarks = [1 , 5 ,30]
    const longBreakMarks = [1 , 20 ,45]

    const [workDuration, setWorkDuration] = useState(25)
    const [shortBreakDuration, setShortBreakDuration] = useState(5)
    const [longBreakDuration, setLongBreakDuration] = useState(20)

    const handleWorkDurationChange = (value : number) => {
        setWorkDuration(value)
    }
    const handleShortBreakDurationChange = (value : number) => {
        setShortBreakDuration(value)
        
    }
    const handleLongBreakDurationChange = (value : number) => {
        setLongBreakDuration(value)
        
    }

    return ( 

        <>
        <Head>
            <title>Pomozone | Settings</title>
        </Head>
        <main className={` ${inter.className} flex flex-col md:flex-row`}>
                <div className="left flex flex-col items-center w-full mt-36 md:justify-center gap-y-5">

                    
                    <div className="work-duration w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/4 flex flex-col gap-y-1">
                    <h1 className=" ">Work Duration</h1>
                    <Slider min={5} max={60} defaultValue={25} marks={workMarks} value={workDuration} onValueChange={handleWorkDurationChange} />
                    </div>

                    <div className="work-duration w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/4 flex flex-col gap-y-1">
                    <h1 className=" ">Short break Duration</h1>
                    <Slider min={1} max={30} defaultValue={5} marks={breakMarks} value={shortBreakDuration} onValueChange={handleShortBreakDurationChange}/>
                    </div>

                    <div className="work-duration w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/4 flex flex-col gap-y-1">
                    <h1 className=" ">Long break Duration</h1>
                    <Slider min={1} max={45} defaultValue={20} marks={longBreakMarks} value={longBreakDuration} onValueChange={handleLongBreakDurationChange}/>
                    </div>
                    <div className="toggles grid grid-cols-1 w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/4 ">
                    <FormGroup >
                        <FormControlLabel control={<Switch  />} label="Dark mode" color='primary' />
                    </FormGroup>
                    </div>
                   
                      

                </div>
        </main>

        </>
     );
}
 
export default Settings;