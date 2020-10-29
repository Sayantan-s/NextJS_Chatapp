import React from 'react'
import Avatar from './Avatar.component'
import { motion } from 'framer-motion'
 
const ChatHeads = ({Name,ch,message,from,noti,timeStamp}) => {
    const messageHandler = msg => {
        if(msg.length > 47) return `${msg.slice(0,47)}...`
        else return msg
    }
    const AnimationVariants = {
        hover : {
            scale : 1.03,
        }
    }
    return (
        <motion.div 
        variants={AnimationVariants}
        whileHover={ch && "hover"}
        className="w-full p-3 bg-white rounded-3x shadow-chatItem grid grid-cols-chatHead gap-2 items-center position: relative cursor-pointer">
            <Avatar size="16" />
            <div>
                <h1 className="text-gray-700 font-semibold">
                    {Name}
                </h1>
                {ch ? <p className="text-gray-500 text-sm">{messageHandler(message)}</p> : <h2 className="text-gray-500 text-sm">from : {from ? from : "Anonymous"}</h2>}
            </div>
            {
                ch &&   <div className="col-start-3 col-end-4 justify-self-end">
                           <span className="text-gray-400 font-medium">{timeStamp}</span>
                           { noti && <Noti>{noti}</Noti> }
                        </div>
            }
        </motion.div>
    )
}

export default ChatHeads

const Noti =({children})=> {
    return (
        <div className="w-5 h-5 bg-gradient-to-r p-2 from-noti1 to-noti2 self-start text-xs flex items-center justify-center text-white font-semibold rounded-full shadow">
            {children}
        </div>
    )
}
