import {FC , useState} from 'react'
import { Slider as TimeSlider } from '@mui/material';



interface SliderProps {
    min : number
    max : number
    value : number
    onValueChange : (value : number) => void
    defaultValue : number
    marks : number[]
}

const Slider : FC <SliderProps>  = ( { min , max , value, onValueChange, defaultValue,  marks}) => {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onValueChange(Number(e.target.value));
    };
    return ( 

        < div>
        <TimeSlider
             size="small"
             defaultValue={defaultValue}
             aria-label="Small"
             
             valueLabelDisplay="auto"
             min={min}
             max={max}
             value={value}
             color='primary'
             //@ts-ignore
             onChange={handleChange}
                marks={marks.map((mark) => ({
                    value: mark,
                    label: mark + ' min',
                }))}
            
                
        />
        
        </div>

      
     );
}
 
export default Slider;
