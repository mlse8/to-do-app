import Typography from '@mui/material/Typography';

export default function Header(){
    return <div>
            <Typography 
            align={'center'} 
            variant='h1' 
            sx={{py:2, fontWeight: 'bold', fontSize: '3rem', color: '#333'}}
            >
                To Do App
            </Typography>
        </div>
}
