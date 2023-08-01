import {Box, CircularProgress, Typography} from "@mui/material";

const SkillProgress = (props) => {
    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            width: "100%"
        }}>
            <CircularProgress
                variant="determinate"
                color={"primary"}
                {...props}
                sx={{
                    width: "80px !important",
                    height: "80px !important"
                }}/>
            <Typography sx={{
                position: "absolute",
                top: 26,
                bottom: 0,
                margin: "auto",
            }}
                        variant={"subtitle1"}
                        fontWeight={700}
                        component={"span"}
            >
                {props.value}%
            </Typography>
            <Typography variant={"subtitle1"}
                        textTransform={"uppercase"}
                        fontWeight={700}
                        sx={{color: "text.contrast"}}
                        component={"h3"}
            >
                {props.title}
            </Typography>
        </Box>
    );
}

export default SkillProgress