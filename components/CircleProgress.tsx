import { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { FC } from 'react'

interface TimerProps {
  size : number
  isActive : boolean
  key : number
}




const Timer : FC<TimerProps> = ({ size, isActive, key }) => {
  

  const [isFocus, setIsFocus] = useState(true)


  const time = isFocus ? 25 * 60 : 5 * 60


  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }



  return (
    <CountdownCircleTimer
   
    key={key} // to force the component to re-render when the key changes
    isPlaying={isActive}
    size={size}
    duration={time}
    strokeWidth={25}
    trailColor="#f06292"
    strokeLinecap="butt"
    colors={['#03045E', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
    onComplete={() => {
      setIsFocus(!isFocus);
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

  
  )
}

export default Timer
