import {Box} from "@mui/material";
import styles from "./ImageList.module.css"


const ImageList = ({children}) => {
    return (
        <Box className={styles.wrapper} id={"imageList-wrapper"}>
            {children}
        </Box>
    )
}


export default ImageList