import React from 'react'
import Image from 'next/image'

const Avatar = ({size}) => {
    return (
        <div className={`w-${size} h-${size} overflow-hidden rounded-full border-gray-100 border-4 cursor-pointer shadow-xl`}>
            <Image
            width="640"
            height="640" 
            src={'/images/samplePic.webp'} 
            alt="displayPic" />
        </div>
    )
}

export default Avatar