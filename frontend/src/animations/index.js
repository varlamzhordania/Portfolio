"use client"

import {motion} from "framer-motion";

export const FadeInWhenVisible = ({children, delay, duration, once, style}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once}}
            transition={{duration, delay}}
            variants={{
                visible: {opacity: 1, scale: 1},
                hidden: {opacity: 0, scale: 0}
            }}
            style={style}
        >
            {children}
        </motion.div>
    );
}
export const FadeInWhenVisibleSoft = ({children, delay, duration, once, style}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once}}
            transition={{duration, delay}}
            variants={{
                visible: {opacity: 1},
                hidden: {opacity: 0}
            }}
            style={style}
        >
            {children}
        </motion.div>
    );
}
export const SlideInWhenVisibleSoft = ({children, delay, duration, once, style}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once}}
            transition={{duration, delay}}
            variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: 20}
            }}
            style={style}
        >
            {children}
        </motion.div>
    );
}
export const SlideInOutPage = ({children, delay, duration, once, style}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{once}}
            transition={{duration, delay}}
            variants={{
                visible: {opacity: 1, x: 0},
                hidden: {opacity: 0, x: -1000}
            }}
            style={style}
        >
            {children}
        </motion.div>
    );
}


export const CrashVisible = ({children, delay, duration, once, style}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once}}
            transition={{duration, delay}}
            variants={{
                visible: {opacity: 1, scale: 1},
                hidden: {opacity: 0, scale: 10}
            }}
            style={style}
        >
            {children}
        </motion.div>
    );
}