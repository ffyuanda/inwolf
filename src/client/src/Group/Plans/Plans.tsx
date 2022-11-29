import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Plan from '../../User/Plan/Plan';

function Plans () {
        return (
                <Stack sx={{
                        alignItems: 'center',
                        backgroundColor: 'grey',
                        marginTop: '5%',
                }}>
                        <Typography>My Plans</Typography>
                        <Plan></Plan>
                        <Plan></Plan>
                        <Plan></Plan>
                </Stack>
        );
}

export default Plans;
