import React from 'react'
import {
	render,
	NODE_PARAGRAPH,
	NODE_IMAGE,
} from 'storyblok-rich-text-react-renderer'
import Image from 'next/image'

export default function RichText({ blok }) {
	return (
		<div className="mb-12 max-w-3xl mx-auto px-4">
			{render(blok.content, {
				nodeResolvers: {
					[NODE_PARAGRAPH]: (children) => (
						<p className="mb-4">{children}</p>
					),
				},
			})}
		</div>
	)
}
