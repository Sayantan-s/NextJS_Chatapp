import React from 'react'

export const useResizeHook = () => {
    const [resize,setSize] = React.useState([window.innerWidth,window.innerHeight]);
    const ResizeHandler = _ => {
        setSize([window.innerWidth, window.innerHeight])
    }
    React.useEffect(() => {
        window.addEventListener('resize',ResizeHandler)
        return _ => window.removeEventListener('resize',ResizeHandler)
    },[])
    return resize
}

