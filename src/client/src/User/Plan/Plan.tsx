import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

function Plan() {
        return (
                <Stack sx={{
                        width: '30vw',
                        bgcolor: 'ivory',
                        margin: '1%',
                        outlineStyle: 'solid',
                }}>
                        <Stack direction='row' sx={{
                                alignItems: 'center',
                                flex: 1,
                        }}>
                                <Checkbox />
                                <Typography>Task</Typography>
                        </Stack>

                        <Button variant='contained' 
                                sx={{
                                width: '25%',
                                left: '60%',
                                marginBottom: '1%',
                        }}>Complete</Button>
                </Stack>
        );
}

export default Plan;
