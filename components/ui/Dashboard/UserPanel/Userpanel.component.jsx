import React from 'react'
import { Calender, Chat, Documents, Properties, Settings,ChevronD } from '../../../commons/Icons'
import Avatar from '../../Avatar.component'
import Subpanel from './Subpanels.components'
const Userpanel = ({className}) => {
    const SubPanelList = [
        {
            type : "properties",
            Icon : Properties
        },
        {
            type : "chat",
            Icon : Chat
        },
        {
            type : "calender",
            Icon : Calender
        },
        {
            type : "documents",
            Icon : Documents
        },
        {
            type : "settings",
            Icon : Settings
        }
    ]
    return (
        <div className={className}>
            <div>
               <Avatar size="20" />
                <div className="flex">
                    <span className="font-medium text-white">
                        Jake Dormy
                    </span>
                    <span className="h-6 w-6 ml-1">
                        <ChevronD />
                    </span>
                </div>
            </div>
            <div>
               {
                   SubPanelList.map(item => {
                       return <Subpanel
                       key={item.type}
                       {...item}
                       />
                   })
               }
            </div>
        </div>
    )
} 

export default Userpanel

