import { easeOut } from "motion"
import { motion } from "motion/react"

const transitions = {duration: .2, ease: easeOut}

const animations = {
  initial: {opacity: 0, transition: transitions},
  animate: {opacity: 1, transition: transitions},
  exit: {opacity: 0, transition: transitions},
}

export default function AnimatedComponent({children})
{
  return(
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit" className="size-full">
      {children}
    </motion.div>
  )
}