import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Form({ addTask }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            addTask({ text: inputValue, completed: false });
            setInputValue('');
        }
    };
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <FormControl component="form" onSubmit={handleSubmit} fullWidth>
            <FormLabel sx={{mb:2}}>
                <TextField 
                    fullWidth
                    id="outlined-basic" 
                    label="Ingrese la tarea" 
                    variant="outlined" 
                    color='secondary'
                    value={inputValue} 
                    onChange={handleInputChange}
                />
            </FormLabel>
            <Button type="submit" variant="contained" sx={{mb:2}} color='secondary'>AGREGAR</Button>
        </FormControl>
    );
}