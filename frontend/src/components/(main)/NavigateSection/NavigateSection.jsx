import {Typography} from "@mui/material";
import Link from "next/link";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import styles from "./NavigateSection.module.css"
import {FadeInWhenVisibleSoft} from "../../../animations";

const NavigateSection = ({to, lft}) => {
    return (
        <FadeInWhenVisibleSoft once={false} duration={0.5} delay={1}>
            <Typography component={Link} href={to} className={lft ? styles.next : styles.prev} variant={"h5"}
                        sx={{color: "secondary.main"}}>
                {
                    lft ?
                        <>
                            NEXT
                            <KeyboardArrowRight fontSize={"large"}/>
                        </>
                        :
                        <>
                            <KeyboardArrowLeft fontSize={"large"}/>
                            PREV
                        </>
                }
            </Typography>
        </FadeInWhenVisibleSoft>
    )
}

export default NavigateSection