import React from 'react'

const TextField = ({children,inpHandler,...otherProps}) => {
    return (
        <div className="flex flex-col gap-2">
           <div className="shadow-authItem rounded-lg">
                <input
                    {...otherProps} 
                    required
                    onChange={inpHandler}
                    className="p-4  rounded-lg font-main text-purple-400 outline-none focus:bg-purple-100 w-full"
                />
           </div>
           <div>
               {children}
           </div>
        </div>
    )
}

export default TextField
