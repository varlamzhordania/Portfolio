import MyPaper from "../MyPaper/MyPaper";
import {Box, Card, CardContent, Divider, Grid, Stack, Typography} from "@mui/material";
import Content from "../Content/Content";
import NavigateSection from "../NavigateSection/NavigateSection";
import Image from "next/image";
import styles from "./About.module.css"
import SkillProgress from "../SkillProgress/SkillProgress";
import Social from "../Social/Social";
import {FadeInWhenVisible, FadeInWhenVisibleSoft, SlideInWhenVisibleSoft} from "../../../animations";
import PersonalInfo from "./PersonalInfo";


const About = () => {
    return (
        <MyPaper id={"about"} max={"xl"} text={"02"}>
            <Content>
                <Grid container spacing={3} alignItems={"center"}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Card variant={"clear"}>
                            <CardContent sx={{paddingX: 5}}>
                                <Typography className={"title"} variant={"caption"}>
                                    about
                                </Typography>
                                <Typography variant={"h2"} fontWeight={800} color={"primary"}>
                                    Who Am I ?
                                </Typography>
                                <Divider variant={"inset"}
                                         sx={{marginY: 2, backgroundColor: "grey.contrast"}}/>
                                <SlideInWhenVisibleSoft delay={0.5} duration={1} once={true}>
                                    <Typography variant={"body1"} sx={{color: "text.main"}}>
                                        Hello, I'm Varlam Zhordania, a passionate and dedicated Full Stack Web Developer
                                        with 3 years of professional experience. I hold a Bachelor's degree in Software
                                        Engineering, which has equipped me with a solid foundation in building robust
                                        and
                                        scalable web applications.<br/><br/>

                                        Beyond my love for coding, I'm an avid reader with a special interest in fantasy
                                        and
                                        fiction books. Getting lost in magical worlds and captivating stories is one of
                                        my
                                        favorite pastimes.<br/><br/>

                                        When I'm not immersed in the world of web development, you can find me in the
                                        virtual realms of gaming. I thoroughly enjoy playing games like Dota 2, World of
                                        Warcraft, and CS:GO. Exploring virtual landscapes and engaging in thrilling
                                        battles
                                        provide a fantastic way to unwind and fuel my creativity.<br/><br/>

                                        My diverse interests outside of web development fuel my creativity and keep me
                                        balanced, which I believe contributes to my ability to approach projects from
                                        unique
                                        perspectives. Combining my passion for web development with my love for fantasy
                                        worlds and gaming, I strive to create digital experiences that are just as
                                        immersive
                                        and captivating as the stories I enjoy.<br/><br/>

                                        I'm excited about every opportunity to collaborate on exciting projects and
                                        contribute my skills to create exceptional web experiences. Let's connect and
                                        turn
                                        your ideas into reality!
                                    </Typography>
                                </SlideInWhenVisibleSoft>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <PersonalInfo/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <SlideInWhenVisibleSoft delay={1.5} duration={1} once={true}>
                            <Box className={styles.imageBox}>
                                <Image src={"/portrait.jpg"} alt={"varlam zhordania"} fill={true}/>
                                <div className={styles.item}/>
                                <div className={styles.item}/>
                                <div className={styles.item}/>
                                <div className={styles.item}/>
                            </Box>
                        </SlideInWhenVisibleSoft>
                    </Grid>
                </Grid>
                <NavigateSection to={"#skills"} lft={true}/>
                <NavigateSection to={"#hero"} lft={false}/>
            </Content>
        </MyPaper>
    )
}

export default About