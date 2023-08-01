"use client"
import {Box, Container, Paper, Typography} from "@mui/material";
import styles from "./MyPaper.module.css";
import Image from "next/image";
import logo from "./../../../../public/logo-no-background-white.svg"


const MyPaper = ({children, id, max, text}) => {
    return (
        <Box component={Paper}
             sx={{
                 position: "relative",
                 minWidth: "100vw",
                 backgroundColor: "background.light",
                 overflowY: "hidden",
             }}
             id={id}>
            <Typography className={styles.text} sx={{
                color: "info.main",
                textShadow: (theme) => `0 0 8px ${theme.palette.info.main}`
            }}
                        variant={"h3"} component={"span"}>
                {text}
            </Typography>
            <Image src={logo} alt={"logo"} className={styles.logo} width={64} height={64}/>
            <Container maxWidth={max ? max : "lg"} className={styles.container}>
                {children}
            </Container>
        </Box>
    )
}

export default MyPaper