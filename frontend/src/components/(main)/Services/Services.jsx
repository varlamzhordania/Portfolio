import NavigateSection from "../NavigateSection/NavigateSection";
import MyPaper from "../MyPaper/MyPaper";
import Content from "../Content/Content";
import {Grid, Typography} from "@mui/material";
import ServiceItem from "./ServiceItem";
import {CodeRounded, HandshakeRounded, LanguageRounded, TravelExploreRounded} from "@mui/icons-material";
import styles from "./Services.module.css"
import {SlideInWhenVisibleSoft} from "../../../animations";


const Services = () => {
    return (
        <MyPaper id={"services"} max={"xl"} text={"05"}>
            <Content sx={{flexDirection: "column", gap: 3}}>
                <Typography className={"title"} variant={"h1"} component={"h2"}>
                    My Services
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <SlideInWhenVisibleSoft duration={1} once={true} delay={0.5}>
                            <ServiceItem
                                icon={<CodeRounded className={styles.icon}/>}
                                title={"Development"}
                                description={"I specialize in creating powerful web applications and dynamic web pages using cutting-edge technologies such as Django, Next.js, and React. Additionally, I have expertise in developing social robots for platforms like Telegram, allowing seamless integration with your website to provide custom functionalities. Let's bring your ideas to life and enhance your online presence with innovative solutions."}/>
                        </SlideInWhenVisibleSoft>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SlideInWhenVisibleSoft duration={1} once={true} delay={1}>
                            <ServiceItem
                                icon={<TravelExploreRounded className={styles.icon}/>}
                                title={"seo"}
                                description={"With my strong background in Search Engine Optimization (SEO), I can assist you in enhancing your website's technical SEO and offer valuable advice to improve your Search Engine Results Page (SERP) score. The ultimate goal is to elevate your online presence and achieve greater visibility in the web world. Let's work together to optimize your website and boost its performance in search engine rankings."}/>
                        </SlideInWhenVisibleSoft>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SlideInWhenVisibleSoft duration={1} once={true} delay={1.5}>
                            <ServiceItem
                                icon={<HandshakeRounded className={styles.icon}/>}
                                title={"a good partner"}
                                description={"I can assist you in deploying your project on various platforms such as AWS, Vercel, Heroku, or even on a virtual private server (VPS) using tools like Nginx, Docker, and Git. Whether you prefer a cloud-based solution or a self-hosted environment, I can guide you through the deployment process and ensure your project is up and running smoothly on the chosen platform. Let's make your project accessible to the world!"}/>
                        </SlideInWhenVisibleSoft>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SlideInWhenVisibleSoft duration={1} once={true} delay={2}>
                            <ServiceItem
                                icon={<LanguageRounded className={styles.icon}/>}
                                title={"hosting"}
                                description={"I can assist you in deploying your project on various platforms such as AWS, Vercel, Heroku, or even on a virtual private server (VPS) using tools like Nginx, Docker, and Git. Whether you prefer a cloud-based solution or a self-hosted environment, I can guide you through the deployment process and ensure your project is up and running smoothly on the chosen platform. Let's make your project accessible to the world!"}/>
                        </SlideInWhenVisibleSoft>
                    </Grid>
                </Grid>
                <NavigateSection to={"#hire"} lft={true}/>
                <NavigateSection to={"#projects"} lft={false}/>
            </Content>
        </MyPaper>
    )
}

export default Services