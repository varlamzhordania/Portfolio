"use client"

import {motion, useDragControls} from "framer-motion"
import styles from "./Hero.module.css";

const Item = () => {

    const controls = useDragControls()

    const variants = {
        visible: {opacity: 1},
        hidden: {opacity: 0},
    }

    return (
        <motion.div className={styles.item} drag={true} dragControls={controls}/>
    )
}

export default Item