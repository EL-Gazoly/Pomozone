import { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { FC } from 'react'

interface TimerProps {
  size : number
}




const Timer : FC<TimerProps> = ({ size }) => {
  const [time, setTime] = useState(180) // 3 minutes in seconds
  const [isActive, setIsActive] = useState(false)

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTime(180)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const circleProps = {
    strokeDasharray: '565.48',
    strokeDashoffset: ((565.48 * (180 - time)) / 180).toString(),
    strokeWidth: '6',
    stroke: isActive ? 'var(--timer-red)' : 'var(--timer-gray)',
  }

  return (
    <CountdownCircleTimer
    isPlaying = {isActive}
    trailColor={'#f06292'}
    size={size}
    duration={25*60}
    strokeWidth={25}
    colors={['#03045E', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => 
    <div className=' text-3xl font-extrabold flex flex-col gap-y-3'>
    {formatTime(remainingTime)}
    <span>Focus</span>
    </div>
    }
  </CountdownCircleTimer>
  )
}

export default Timer
