import { motion } from "motion/react"
import PropTypes from "prop-types"


const animations = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: "0%", opacity: 1, transition: { duration: 0.25, ease: "easeOut" } }, 
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.25, ease: "easeIn" } }, 
};


export default function AnimatedNav({children})
{
    return(
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
    )
}

AnimatedNav.propTypes = {
    children: PropTypes.object.isRequired,
}