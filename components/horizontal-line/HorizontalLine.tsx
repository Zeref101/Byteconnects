import React from 'react'

const HorizontalLine = () => {
    return (
        <div className="flex w-full items-center">
            <div className="h-0.5 w-full bg-black" />
            <div className="h-5 w-20 bg-white" />
            <div className="h-0.5 w-full bg-white" />
        </div>
    )
}

export default HorizontalLine
