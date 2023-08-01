import {Typography} from "@mui/material";
import MyPaper from "../MyPaper/MyPaper";
import Content from "../Content/Content";
import NavigateSection from "../NavigateSection/NavigateSection";
import Social from "../Social/Social";
import {CrashVisible, FadeInWhenVisibleSoft, SlideInWhenVisibleSoft} from "../../../animations";

const Hire = () => {
    return (
        <MyPaper id={"hire"} max={"xl"} text={"06"}>
            <Content sx={{flexDirection: "column", gap: 3}}>
                <CrashVisible once={true} duration={1} delay={0}>
                    <Typography className={"title"} variant={"h1"} component={"h2"}>
                        Hire Now
                    </Typography>
                </CrashVisible>
                <SlideInWhenVisibleSoft once={true} duration={1} delay={1}>
                    <Typography variant={"h4"} fontWeight={800} color={"primary"} component={"p"}>
                        click and order a package or offer a order
                    </Typography>
                </SlideInWhenVisibleSoft>
                <FadeInWhenVisibleSoft once={true} duration={1} delay={2}>
                    <Social/>
                </FadeInWhenVisibleSoft>
                <NavigateSection to={"#hero"} lft={true}/>
                <NavigateSection to={"#services"} lft={false}/>
            </Content>
        </MyPaper>
    )
}

export default Hire