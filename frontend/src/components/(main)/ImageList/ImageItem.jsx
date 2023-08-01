import Image from "next/image";
import {Box, Card,} from "@mui/material";
import styles from "./ImageList.module.css"


const ImageItem = ({data,}) => {

    const itemStyle = {
        top: data?.top + 'px',
        left: data?.left + 'px',
    };
    return (
        <Box className={styles.item}
             style={itemStyle}>
            <Card variant={"outlined"}>
                <Box className={styles.imageBox}>
                    <Image src={data?.image} alt={data?.title} fill={true} placeholder={"blur"}/>
                </Box>
            </Card>
        </Box>
    )
}

export default ImageItem