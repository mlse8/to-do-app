import Typography from '@mui/material/Typography';

export default function Footer(){
    return <div style={{
                backgroundColor: '#f5bdffc5', 
                padding: '1rem 0',
                marginTop: '7rem'
            }}>
            <Typography 
            align={'center'}
            variant='body1' 
            sx={{ color: '#333' }}
            >
                &copy; 2024 - Laura Escalante
            </Typography>
        </div>
}