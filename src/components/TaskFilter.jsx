import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TaskFilter({ filter, setFilter }) {
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ width: 1 }}>
                <InputLabel color='secondary'>Seleccione</InputLabel>
                <Select
                    value={filter}
                    onChange={handleFilterChange}
                    label="Seleccione"
                    color='secondary'
                >
                    <MenuItem 
                    value="all" 
                    sx={{ 
                        '&:focus': { bgcolor: '#f5bdffc5' },
                        '&:focus:hover': { bgcolor: '#f0f0f0' } 
                        }}
                    >
                        Todas
                    </MenuItem>
                    <MenuItem 
                    value="completed" 
                    sx={{ 
                        '&:focus': { bgcolor: '#f5bdffc5' },
                        '&:focus:hover': { bgcolor: '#f0f0f0' } 
                        }}
                    >
                        Completas
                    </MenuItem>
                    <MenuItem 
                    value="incomplete" 
                    sx={{ 
                        '&:focus': { bgcolor: '#f5bdffc5' },
                        '&:focus:hover': { bgcolor: '#f0f0f0' } 
                        }}
                    >
                        Incompletas
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}