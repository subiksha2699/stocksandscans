
import { ProgressBar } from 'react-loader-spinner'
import Box from '@mui/material/Box';

export default function FileLoader(){
    return (
        <Box className="containerPaper">
            <ProgressBar
                height="80"
                width="100"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#F4442E'
                barColor='#51E5FF'
            />
        </Box>
    )
}