import {Stack, Typography} from "@mui/material";
import {SlideInWhenVisibleSoft} from "../../../animations";

const PersonalInfo = () => {
    return (
        <SlideInWhenVisibleSoft delay={1} duration={1} once={true}>
            <Stack direction={"row"} gap={3} flexWrap={"wrap"} my={4}>
                <Stack direction={"row"} gap={1} alignItems={"center"} width={"auto"}
                       justifyContent={"flex-start"}>
                    <Typography>First Name :</Typography>
                    <Typography sx={{color: "text.contrast"}} fontWeight={700}>Varlam</Typography>
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={"center"} width={"auto"}
                       justifyContent={"flex-start"}>
                    <Typography>Last Name :</Typography>
                    <Typography sx={{color: "text.contrast"}}
                                fontWeight={700}>Zhordania</Typography>
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={"center"} width={"auto"}
                       justifyContent={"flex-start"}>
                    <Typography>Age :</Typography>
                    <Typography sx={{color: "text.contrast"}}
                                fontWeight={700}>{(1999 - new Date().getFullYear()) * -1}</Typography>
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={"center"} width={"auto"}
                       justifyContent={"flex-start"}>
                    <Typography>Nationality :</Typography>
                    <Typography sx={{color: "text.contrast"}} fontWeight={700}>Georgia</Typography>
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={"center"} width={"auto"}
                       justifyContent={"flex-start"}>
                    <Typography>Freelance :</Typography>
                    <Typography sx={{color: "text.contrast"}}
                                fontWeight={700}>Available</Typography>
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={"center"} width={"auto"}
                       justifyContent={"flex-start"}>
                    <Typography>Address :</Typography>
                    <Typography sx={{color: "text.contrast"}} fontWeight={700}>Tbilisi</Typography>
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={"center"} width={"auto"}
                       justifyContent={"flex-start"}>
                    <Typography>Phone :</Typography>
                    <Typography sx={{color: "text.contrast"}} fontWeight={700}>995 558 009
                        332</Typography>
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={"center"} width={"auto"}
                       justifyContent={"flex-start"}>
                    <Typography>Email :</Typography>
                    <Typography sx={{color: "text.contrast"}}
                                fontWeight={700}>zhordaniavarlam@gmail.com</Typography>
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={"center"} width={"auto"}
                       justifyContent={"flex-start"}>
                    <Typography>Language :</Typography>
                    <Typography sx={{color: "text.contrast"}} fontWeight={700}>English, Georgian,
                        Persian</Typography>
                </Stack>
            </Stack>
        </SlideInWhenVisibleSoft>
    )
}

export default PersonalInfo