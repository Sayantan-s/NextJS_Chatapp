import React from 'react'
import { motion } from 'framer-motion'
const Button = ({children,classes,...otherProps}) => {
    const animate = {
        Tap : {
            scale : 0.9
        }
    }
    return (
       <motion.button
       className={`bg-secondary p-4 rounded-lg text-gray-100 font-main font-bold shadow-btnItem text-base ${classes}`}
       variants={animate}
       whileTap = "Tap"
       {...otherProps} 
       >
        {children}
       </motion.button>
    )
}

export default Button
