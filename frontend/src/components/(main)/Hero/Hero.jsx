import {Box, Stack, Typography} from "@mui/material";
import styles from "./Hero.module.css"
import NavigateSection from "../NavigateSection/NavigateSection";
import MyPaper from "../MyPaper/MyPaper";
import Content from "../Content/Content";
import {CrashVisible} from "../../../animations";


const Hero = () => {

    return (
        <MyPaper id={"hero"} max={"xl"} text={"01"}>
            <Content>
                <Stack className={styles.wrapper} direction={"row"}>
                    <Typography className={"title"} variant={"h5"}  component={"h2"}>
                        introduction
                    </Typography>
                    <Box sx={{alignSelf: "center"}}>
                        <Typography variant={"h6"} component={"p"} sx={{color: "text.contrast"}} fontWeight={600}>
                            Hello, I'm
                        </Typography>
                        <CrashVisible delay={0} duration={0.7} once={true}>
                            <Typography variant={"h1"}
                                        sx={{color: "primary.main", textShadow: "0 0 16px var(--primary-main)"}}
                                        fontWeight={800}>
                                Varlam Zhordania
                            </Typography>
                        </CrashVisible>
                        <Typography variant={"h6"} sx={{color: "text.contrast"}}
                                    fontWeight={700} textAlign={"right"} component={"p"}>
                            Full-stack Web Developer
                        </Typography>
                    </Box>
                </Stack>
                <NavigateSection to={"#about"} lft={true}/>
            </Content>
        </MyPaper>
    )
}

export default Hero