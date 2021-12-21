import React from 'react'

export default function Hero({title}) {
    return (
        <div className="text-center mb-14 lg:my-14 max-w-4xl mx-auto border-b-4 border-black">
            <h1 className="text-6xl font-mono mb-4">{title}</h1>
        </div>
    )
}
