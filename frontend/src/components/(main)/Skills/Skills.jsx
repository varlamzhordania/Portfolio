import MyPaper from "../MyPaper/MyPaper";
import Content from "../Content/Content";
import {Stack, Typography} from "@mui/material";
import NavigateSection from "../NavigateSection/NavigateSection";
import SkillProgress from "../SkillProgress/SkillProgress";
import {Data} from "./Data"
import {FadeInWhenVisibleSoft} from "../../../animations";

const Skills = () => {
    return (
        <MyPaper id={"skills"} max={"xl"} text={"03"}>
            <Content sx={{flexDirection: "column", gap: 3}}>
                <Typography className={"title"} variant={"h1"}  component={"h2"}>
                    Skills
                </Typography>
                <Stack direction={"row"} gap={3} justifyContent={"center"} alignItems={"start"} flexWrap={"wrap"}>
                    {Data.map((item, index) =>
                        <FadeInWhenVisibleSoft once={true} duration={1} delay={index} style={{width:"18%"}} >
                            <SkillProgress key={index} value={item.value} title={item.name}/>
                        </FadeInWhenVisibleSoft>
                    )}
                </Stack>
                <NavigateSection to={"#projects"} lft={true}/>
                <NavigateSection to={"#about"} lft={false}/>
            </Content>
        </MyPaper>
    )
}

export default Skills