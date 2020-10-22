import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
const Media = ({link,media}) => {
    const ico_Ani = {
        from : {
            y : 20
        },
        to : {
            y : 0,
            transition : {
                duration : 0.6
            }
        }
    }
    return (
        <Link
        href={link}>
            <motion.div
            initial = "from"
            animate = "to" 
            variants={ico_Ani}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" className="text-gray-100 fill-current cursor-pointer">
                    {media}
                </svg>
            </motion.div>
        </Link>
    )
}

export default Media
