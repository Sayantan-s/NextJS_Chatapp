import React from 'react'
import { useSelector } from 'react-redux'
import Userpanel from '../components/ui/Dashboard/User Panel/Userpanel.component'
import Chatconsole from '../components/ui/Dashboard/Console Chat/Chatconsole.component'
import Chatlist from '../components/ui/Dashboard/ChatList/Chatlist.component'
const dashboard = () => {
    const members = useSelector(state => state.test)
    console.log(members)
    return (
        <div className="flex h-screen">
            <Userpanel className="flex-1 bg-gradient-to-br from-primary1 to-primary2"/>
            <Chatlist className="flex-2"/>
            <Chatconsole className="flex-3"/>
        </div>
    )
}

export default dashboard
