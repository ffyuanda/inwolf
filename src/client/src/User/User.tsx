import "./User.css"
import LinearWithValueLabel from "../Common/LinearProgressWithLabel";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type UserBannerProps = {
        name: string,
        progress: number,
};

function UserBanner(props: UserBannerProps) {

        return(
                <Stack className="userbanner" direction="row" sx={{
                        margin: '1%',
                        alignItems: 'center',
                        // width: '100%',
                }}>
                        <Avatar sx={{
                                marginLeft: '3%',
                        }}>
                                SY
                        </Avatar>

                        <Box sx={{
                                margin: '1%',
                                padding: '2%',
                                flex: 1,
                        }}>
                                <Typography>{props.name}</Typography>
                                <LinearWithValueLabel value={props.progress}/>
                        </Box>

                        <Button variant='contained'
                                size='small'
                                sx={{
                                        marginRight: '3%',
                        }}>
                                Verify
                        </Button>
                </Stack>
        );
}

export default UserBanner;
