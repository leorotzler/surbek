import React from 'react'
import DynamicComponent from './DynamicComponent'

export default function TwoColumns({ blok }) {
	return (
		<div>
			<div className="max-w-4xl mx-auto flex gap-4 flex-col mb-12 md:flex-row mb-12">
				<div className="basis-full md:basis-6/12">
					{blok.left &&
						blok.left.map((item) => {
							return (
								<DynamicComponent key={item._uid} blok={item} />
							)
						})}
				</div>
				<div className="basis-full md:basis-6/12">
                {blok.right &&
						blok.right.map((item) => {
							return (
								<DynamicComponent key={item._uid} blok={item} />
							)
						})}
                </div>
			</div>
		</div>
	)
}
