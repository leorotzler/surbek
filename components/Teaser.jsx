import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import Link from 'next/link'

const Teaser = ({ blok }) => {
	return (
		<Link href={`/${blok.link.story.url}`}>
			<a className="group">
				<div className="aspect-square overflow-hidden">
					<img
						className="w-full object-cover object-center transition-transform group-hover:scale-110"
						src={blok.image.filename}
						alt={blok.image.alt}
					/>
				</div>
				<div className="relative border-2 -mt-4 py-2 mx-8 border-black text-center bg-white z-10">
					<h2 className="font-mono text-xl" {...sbEditable(blok)}>
						{blok.headline}
					</h2>
				</div>
			</a>
		</Link>
	)
}

export default Teaser
