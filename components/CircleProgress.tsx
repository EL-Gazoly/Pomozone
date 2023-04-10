import { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Image from 'next/image'
import { FC } from 'react'

interface TimerProps {
  size : number
  
}




const Timer : FC<TimerProps> = ({ size}) => {
  
  const [isActive, setIsActive] = useState(false)
  const [isFocus, setIsFocus] = useState(true)
  const [sessionsNumber, setSessionsNumber] = useState(1)
  const [key, setKey] = useState(0);

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
      return 25 * 60
    }
    if (sessionsNumber % 4 === 0)  return 15 * 60
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

  return (
    <div className='flex flex-col items-center w-full gap-y-7'>
    <CountdownCircleTimer
   
    key={key} // to force the component to re-render when the key changes
    isPlaying={isActive}
    size={size}
    duration={getDuration()}
    strokeWidth={25}
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
      <div className="text-3xl font-extrabold flex flex-col gap-y-3">
        {formatTime(remainingTime)}
        <span>{isFocus ? 'Focus' : 'Break'}</span>
      </div>
    )}
  </CountdownCircleTimer>
  
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

        <div className={`text-base font-medium number-sessions flex flex-col gap-y-1 text-center mt-24`}>
          <span> {sessionsNumber} of 4</span>   
          <span> sessions</span>       
        </div>
  </div>
  )
}

export default Timer
