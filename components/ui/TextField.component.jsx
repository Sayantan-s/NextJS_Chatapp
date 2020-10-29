import React from 'react'

const TextField = ({children,inpHandler,IconBr,IconFr,frClass,...otherProps}) => {
    return (
        <div className="flex flex-col gap-2 shadow-chatItem rounded-3x">
           <div className="rounded-2x-l flex items-center">
           {IconFr &&  <div className={frClass}>{iconFr}</div>}
                <input
                    {...otherProps} 
                    required
                    onChange={inpHandler}
                    className="h-12 px-4 font-main w-full rounded-2x-l outline-none"
                />
            {IconBr &&  <div className=" text-gray-500 h-12 px-4 fill-current bg-white flex items-center"><IconBr /></div>}
           </div>
          {children &&  <div>{children}</div>}
        </div>
    )
}

export default TextField
   