import Content from "../Content/Content";
import MyPaper from "../MyPaper/MyPaper";
import NavigateSection from "../NavigateSection/NavigateSection";
import {Data} from "./data"
import {Typography} from "@mui/material";
import ImageList from "../ImageList/ImageList";
import ImageItem from "../ImageList/ImageItem";
import {CrashVisible} from "../../../animations";


const Projects = () => {
    return (
        <MyPaper id={"projects"} max={"xl"} text={"04"}>
            <Content>
                <Typography className={"title"} variant={"h1"}  component={"h2"}>
                    latest projects
                </Typography>
                <ImageList>
                    {Data.map((item,index) =>
                        <CrashVisible delay={index} once={true} duration={1}>
                            <ImageItem data={item} key={item.id}/>
                        </CrashVisible>
                    )}
                </ImageList>
                <NavigateSection to={"#services"} lft={true}/>
                <NavigateSection to={"#skills"} lft={false}/>
            </Content>
        </MyPaper>
    )
}

export default Projects