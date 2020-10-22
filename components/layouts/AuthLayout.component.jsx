import React from 'react'
import { motion } from 'framer-motion';
const AuthLayout = ({children,formHandler,headers,captions}) => {
    const placeItems = 'h-full flex-col flex flex-1 justify-center'
    const Ani_img = {
      from : {
        scale : 0
      },
      to : {
        scale : [1,0.8,1.1,1],
        transition : {
          duration : 0.6,
          type : 'spring',
          stiffness : 150
        }
      },
      hover : {
        scale : 1.1,
        cursor : 'pointer',
      }
    }
    const capt_motion = {
      from : {
        scale : 1
      },
      to : {
        scale : 1,
        transition: {
          staggerChildren : 0.2,
          delayChildren : 0.3
        }
      }
    }
    return (
    <section className="w-screen h-screen flex">
        <div className={`${placeItems} bg-purple-400 items-center `}>
          <motion.div
          variants ={Ani_img}
          initial = "from"
          animate = "to" 
          whileHover="hover"
          >
              <img src={'/images/Chat.png'} alt="chat" className="w-96 h-96"/>
          </motion.div>
          <motion.div 
          variants={capt_motion}
          initial="from"
          animate="to"
          className="flex flex-col items-center">
                {captions}
          </motion.div>
        </div>
        <div className={`${placeItems} w-full h-full gap-8`}>
          <div className="flex flex-col mx-40">
              {headers}
          </div>
          <div className="flex justify-items-center">
              <form
              className="flex flex-col gap-4 w-full h-full mx-40" 
              onSubmit={formHandler}>
                {children}
              </form>
          </div>
        </div>
    </section>
    )
}

export default AuthLayout
