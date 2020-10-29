import React from 'react'
import { Search } from '../../../commons/Icons'
import ChatHeads from '../../ChatHeads.component'
import TextField from '../../TextField.component'

const Chatlist = ({className}) => {
    const [search,setSearch] = React.useState("")
    const searchHandler = e => {
        const { value } = e.target
        setSearch(value)
    }
    return (
        <div className={`${className} rounded-3x`}>
           <div className="mt-10 mx-16 mb-4 flex flex-col gap-4">
                <h1 className="text-4xl font-medium mb-4 text-gray-700">Chat</h1>
                <TextField
                type='search'
                value={search} 
                inpHandler={searchHandler}
                placeholder="Search"
                IconBr={Search}
                />
                <div>
                    <ChatHeads
                    ch
                    noti="15"
                    Name="John Smith"
                    timeStamp="03 Mar"
                    message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
                    />
                </div>
           </div>
        </div>
    )
}

export default Chatlist
