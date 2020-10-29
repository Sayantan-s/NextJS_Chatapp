import React from 'react'

const Subpanels =({Icon,type})=> {
    return(
       <figure className="flex items-center p-4">
           <span className="mr-5">
               <Icon />
           </span>
           <span className="uppercase text-white self-end">{type}</span>
       </figure>
    )
}

export default Subpanels