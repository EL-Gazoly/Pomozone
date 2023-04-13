import { useState, useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Image from 'next/image'
import { FC } from 'react'

interface TimerProps {
  size : number
  
}




const Timer : FC<TimerProps> = () => {

  useEffect(() => {
    const workDuration = localStorage.getItem('workDuration')
    if (workDuration) setWorkDuration(JSON.parse(workDuration))

    const shortBreakDuration = localStorage.getItem('shortBreakDuration')
    if (shortBreakDuration) setShortBreakDuration(JSON.parse(shortBreakDuration))

    const longBreakDuration = localStorage.getItem('longBreakDuration')
    if (longBreakDuration) setLongBreakDuration(JSON.parse(longBreakDuration))

    const isDark = localStorage.getItem("isDark");
    if (isDark) setDarkMode(JSON.parse(isDark));
  }, [])
  
  const [isActive, setIsActive] = useState(false)
  const [isFocus, setIsFocus] = useState(true)
  const [sessionsNumber, setSessionsNumber] = useState(1)
  const [key, setKey] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [size, setSize] = useState<number>(300);
  const [strokeWidth, setStrokeWidth] = useState<number>(10);
  const [workDuration, setWorkDuration] = useState(25)
  const [shortBreakDuration, setShortBreakDuration] = useState(5)
  const [longBreakDuration, setLongBreakDuration] = useState(20)
  const [DarkMode, setDarkMode] = useState(false);

  const handelReset = () => {
    setKey(key + 1)
    setIsActive(false)
  }

  const handelSkip = () => {
    if (isFocus) setSessionsNumber(sessionsNumber + 1)
    if (!isFocus && sessionsNumber % 4 === 0) {
      setSessionsNumber(1)
    }
    setIsActive(false)
    setIsFocus(!isFocus)
    setKey(key + 1)
 
  }



  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const getDuration = () => {
    if (isFocus ) {
      if (workDuration) return workDuration * 60
      return 25 * 60
    }
    if (sessionsNumber % 4 === 0)  {
      if (longBreakDuration) return longBreakDuration * 60
      return 15 * 60
    }
    if (shortBreakDuration) return shortBreakDuration * 60
    return 5 * 60
  }

  const handleDurationEnded = () => {
    if (!isFocus && sessionsNumber % 4 === 0) {
      setSessionsNumber(1)
    }
    else if (isFocus) {
    setSessionsNumber(sessionsNumber + 1)
    }
  
    setIsFocus(!isFocus)
    setIsActive(false)
    setKey(key + 1)
   
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // add event listener to listen for window width changes
    window.addEventListener('resize', handleResize);

    // set initial window width
    setWindowWidth(window.innerWidth);

    // remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setSize(windowWidth < 600 ? 200 : 300); // adjust size based on window width

    if (windowWidth < 768) {
      setSize(240);
      setStrokeWidth(25);
    }

    else if ( windowWidth < 1024 && windowWidth > 768) {
        setSize(300);
        setStrokeWidth(30);
    }

    else if (windowWidth > 1024 && windowWidth < 1440) {
        setSize(340);
        setStrokeWidth(34);
    }
    else if (windowWidth > 1440) {
        setSize(390);
        setStrokeWidth(40);
    }
    setKey((prevKey) => prevKey + 1); // force component re-render by changing key
  }, [windowWidth]);


  return (
    <div className='flex flex-col items-center w-full gap-y-7'>
    { DarkMode ? (
       <CountdownCircleTimer
   
       key={key} // to force the component to re-render when the key changes
       isPlaying={isActive}
       size={size}
       duration={getDuration()}
       strokeWidth={strokeWidth}
       trailColor="#f06292"
       strokeLinecap="butt"
       
       colors={['#7481FF', '#F7B801', '#A30000', '#A30000']}
       colorsTime={[7, 5, 2, 0]}
       onComplete={() => {
         handleDurationEnded()
         
         return {
           shouldRepeat: true,
           delay: 0,
         };
       }}
     >
       {({ remainingTime }) => (
         <div className="text-3xl font-extrabold flex flex-col gap-y-3 lg:text-4xl text-white">
           {formatTime(remainingTime)}
           <span>{isFocus ? 'Focus' : 'Break'}</span>
         </div>
       )}
     </CountdownCircleTimer>


    ) : (
      <CountdownCircleTimer
   
      key={key} // to force the component to re-render when the key changes
      isPlaying={isActive}
      size={size}
      duration={getDuration()}
      strokeWidth={strokeWidth}
      trailColor="#f06292"
      strokeLinecap="butt"
      
      colors={['#03045E', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[7, 5, 2, 0]}
      onComplete={() => {
        handleDurationEnded()
        
        return {
          shouldRepeat: true,
          delay: 0,
        };
      }}
    >
      {({ remainingTime }) => (
        <div className="text-3xl font-extrabold flex flex-col gap-y-3 lg:text-4xl">
          {formatTime(remainingTime)}
          <span>{isFocus ? 'Focus' : 'Break'}</span>
        </div>
      )}
    </CountdownCircleTimer>

    )}
   
  
  <div className="buttons flex flex-row gap-x-8 justify-center items-center">
          <div className={`"resetbutton border border-border rounded-full p-1 hover:bg-gray-100 cursor-pointer "
            ${!isActive ? ' opacity-50' : ''}
          `} 
          onClick={handelReset}
          >
            <Image src="/resetTimerButton.svg" width={24} height={24} alt="reset" quality={100}/>
          </div>
        {!isActive ? (
          <div className="startbutton border border-primary rounded-full p-2 hover:bg-gray-100 cursor-pointer "
          onClick={() => setIsActive(!isActive)}
          >
            <Image src="/startTimerButton.svg" width={24} height={24} alt="" quality={100}/>
          </div>
           ) : (
            <div className="pauseTimerButton border border-primary rounded-full p-2 hover:bg-gray-100 cursor-pointer "
            onClick={() => setIsActive(!isActive)}
            >
              <Image src="/pauseTimerButton.svg" width={24} height={24} alt="" quality={100}/>
            </div>
            ) }
          <div className="skipbutton border  border-border rounded-full p-1 hover:bg-gray-100 cursor-pointer "
          onClick={handelSkip}
          >
            <Image src="/skipTimerButton.svg" width={24} height={24} alt="" quality={100}/>
          </div>

        </div>
        { DarkMode ? (
          <div className={`text-base font-medium number-sessions flex flex-col gap-y-1 text-center mt-24 lg:mt-10 text-white`}>
          <span> {sessionsNumber} of 4</span>   
          <span> sessions</span>       
        </div>

        ) : (
        <div className={`text-base font-medium number-sessions flex flex-col gap-y-1 text-center mt-24 lg:mt-10`}>
          <span> {sessionsNumber} of 4</span>   
          <span> sessions</span>       
        </div>
        )}

  </div>
  )
}

export default Timer
