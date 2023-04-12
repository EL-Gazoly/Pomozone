import {FC , useState} from 'react'
import { Slider as TimeSlider } from '@mui/material';



interface SliderProps {
    min : number
    max : number
    defaultValue : number
    marks : number[]
}

const Slider : FC <SliderProps>  = ( { min , max , defaultValue,  marks}) => {

    const [value, setValue] = useState(25);    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value));
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
