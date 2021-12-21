import React from 'react'

export default function Image({ blok }) {
	return (
		<div className="mb-12">
			{blok.title && (
				<h3 className="text-center text-md mb-4">{blok.title}</h3>
			)}
			<div
				className="flex justify-center mb-2"
				style={{ width: '100%', position: 'relative' }}
			>
				<img src={blok.image.filename} alt={blok.image.alt} />
			</div>
			<div className="text-center text-sm">{blok.image.title}</div>
		</div>
	)
}
