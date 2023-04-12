import Head from 'next/head';
import { Inter } from 'next/font/google'
import Slider from '../components/slider'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const inter = Inter({ subsets: ['latin'] })

const Settings = () => {
    const workMarks = [5 , 25 ,60]
    const breakMarks = [1 , 5 ,30]
    const longBreakMarks = [1 , 20 ,45]
    return ( 

        <>
        <Head>
            <title>Pomozone | Settings</title>
        </Head>
        <main className={` ${inter.className} flex flex-col md:flex-row`}>
                <div className="left flex flex-col items-center w-full mt-36 md:justify-center gap-y-5">

                    
                    <div className="work-duration w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/4 flex flex-col gap-y-1">
                    <h1 className=" ">Work Duration</h1>
                    <Slider min={5} max={60} defaultValue={25} marks={workMarks}/>
                    </div>

                    <div className="work-duration w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/4 flex flex-col gap-y-1">
                    <h1 className=" ">Short break Duration</h1>
                    <Slider min={1} max={30} defaultValue={5} marks={breakMarks}/>
                    </div>

                    <div className="work-duration w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/4 flex flex-col gap-y-1">
                    <h1 className=" ">Long break Duration</h1>
                    <Slider min={1} max={45} defaultValue={20} marks={longBreakMarks}/>
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