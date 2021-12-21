import React, { useEffect, useState } from 'react'

export default function ImageGallery({ blok }) {
	const [activeImage, setActiveImage] = useState(blok.images[0])

	return (
		<div className="max-w-4xl mx-auto">
			<div className="mx-auto mb-4 flex" style={{maxHeight: '60vh'}}>
				<img
					className="w-full object-contain object-center"
					src={activeImage.image.filename}
					alt={activeImage.image.alt}
				/>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
				{blok.images &&
					blok.images.map((image, index) => {
						return (
							<div
								key={image._uid}
								className="overflow-hidden h-24 border-4 cursor-pointer"
                                onClick={() => setActiveImage(image)}
							>
								<img
									className="w-full object-cover object-center"
									src={image.image.filename}
									alt={image.image.alt}
								/>
							</div>
						)
					})}
			</div>
		</div>
	)
}
