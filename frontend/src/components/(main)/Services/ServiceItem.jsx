import {Card, CardContent, Typography} from "@mui/material";
import styles from "./Services.module.css"


const ServiceItem = (props) => {
    return (
        <Card variant={"outlined"} className={styles.card}>
            {props?.icon}
            <CardContent>
                <Typography variant={"h4"} sx={{color:"text.light"}} fontWeight={"800"} textTransform={"uppercase"}  component={"h3"}>
                    {props.title}
                </Typography>
                <Typography variant={"body1"}>
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ServiceItem