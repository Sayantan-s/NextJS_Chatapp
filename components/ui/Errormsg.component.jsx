import React from 'react'

const Errormsg = ({title}) => {
    return (
        <div className="flex gap-1 items-center">
            <div className="w-3 h-3">
                <Error />
            </div>
            <p className="text-red-400 text-sm">{title}</p>
        </div>
    )
}

export default Errormsg

const Error = _ => <svg className=" text-red-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 0L0 23h24L12 0zm0 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v6c0 1.1-.9 2-2 2z"></path></g></svg>
