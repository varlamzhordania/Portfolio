import styles from "./Content.module.css";
import {Box} from "@mui/material";

const Content = ({children,sx}) => {
    return (
        <Box className={styles.box} sx={sx}>
            {children}
        </Box>
    )
}

export default Content