import React from 'react'
import Link from 'next/link'

export default function ArtCategories({ blok }) {
	return (
		<div className="max-w-3xl mb-12 mx-auto px-4">
			{blok.categories &&
				blok.categories.map((category, index) => {
					return (
						<span key={category._uid} className="mr-3 inline-block mb-2">
							<Link href={`/${category.url.story.url}`}>
								<a className="text-2xl p-1 font-mono underline underline-offset-4 hover:text-white hover:bg-black hover:no-underline">
									{category.name}
								</a>
							</Link>
							{index < blok.categories.length - 1 ? ',' : ''}
						</span>
					)
				})}
		</div>
	)
}
