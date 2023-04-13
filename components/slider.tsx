import {FC } from 'react'
import { Slider as TimeSlider } from '@mui/material';
import { useTheme } from "next-themes";



interface SliderProps {
    min : number
    max : number
    value : number
    onValueChange : (value : number) => void
    defaultValue : number
    marks : number[]
}

const Slider : FC <SliderProps>  = ( { min , max , value, onValueChange, defaultValue,  marks}) => {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onValueChange(Number(e.target.value));
    };
    return ( 

        < div>
        {currentTheme === 'light' ? (
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
        ) : (
            <TimeSlider
             size="small"
             defaultValue={defaultValue}
             aria-label="Small"
             
             valueLabelDisplay="auto"
             min={min}
             max={max}
             value={value}
             color='secondary'
             //@ts-ignore
             onChange={handleChange}
                marks={marks.map((mark) => ({
                    value: mark,
                    label: mark + ' min',
                }))}
            
                
        />
        )}
            
        
        </div>

      
     );
}
 
export default Slider;
