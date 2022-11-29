import { useState } from "react";
import UserBanner from "../../User/User";
import Stack from '@mui/material/Stack';

function Members() {

        return (
                <Stack>
                        <UserBanner name="Name" progress={30}></UserBanner>
                        <UserBanner name="Name" progress={30}></UserBanner>
                        <UserBanner name="Name" progress={30}></UserBanner>
                </Stack>
        );
}

export default Members;
