import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Members from "./Members/Members";
import Typography from '@mui/material/Typography';
import Plans from "./Plans/Plans";

/*
 * My Group view.
 */
function Group() {
        return(
                <Stack direction="row" sx={{
                }}>
                        <Stack sx={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'space-around',
                        }}>
                                <Avatar sx={{
                                        marginTop: '2%',
                                        width: '17vw',
                                        height: '17vw',
                                }}>
                                        Group Avatar
                                </Avatar>

                                <Typography>
                                        Group Name
                                </Typography>

                                <Plans></Plans>


                        </Stack>
                        
``
                        <Stack sx={{
                                flex: 2,
                        }}>
                                <Members></Members>
                        </Stack>
                        
                </Stack>
        );
}

export default Group;
