import React from 'react'
import ChatHeads from '../../ChatHeads.component'

const Chatconsole = ({className}) => {
    return (
        <div className={`${className}`}>
           <div className="mt-10">
            <ChatHeads 
            Name="John Smith" 
            from="Kolkata"
            />
           </div>
        </div>
    )
}

export default Chatconsole
