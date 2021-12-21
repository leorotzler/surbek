import React from 'react'

export default function LinkList({blok}) {
    return (
        <div className="max-w-4xl mx-auto">
            {blok.links && blok.links.map(item => {
                return (
                    <div className="mb-8" key={item._uid}>
                        <div className="mb-2">
                            <a className="text-xl underline underline-offset-4 hover:bg-black hover:text-white" target="_blank" rel="noreferrer" href={item.link.url}>{item.link_title}</a>
                        </div>
                        <div>{item.author}</div>
                        <div>{item.origin}</div>
                    </div>
                )
            })}
        </div>
    )
}
