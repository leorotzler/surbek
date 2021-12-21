import React, { useState } from 'react'
import Link from 'next/link'

export default function MainNav({ items, currentSlug }) {
	const [isOpen, setIsOpen] = useState(false)

	const NavLink = ({ url, name, onClick }) => {
		return (
			<Link href={`${url === '/' ? url : `/${url}`}`}>
				<a
					className={`mx-6 mb-5 text-xl font-mono lg:text-base lg:mb-0 ${
						currentSlug ===
						`${url === '/' ? url : url.replace('/', '')}`
							? 'underline'
							: ''
					} hover:underline underline-offset-2`}
                    onClick={onClick}
				>
					{name}
				</a>
			</Link>
		)
	}

	return (
		<div>
			<div className="lg:hidden flex justify-end">
                
				<button
					onClick={() => setIsOpen(!isOpen)}
					className={`z-50 relative hamburger hamburger--collapse ${
						isOpen ? 'is-active' : ''
					} `}
					type="button"
				>
                    <div className="font-mono pb-4 uppercase">Menu</div>
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
                
			</div>
			<div
				className={`fixed pt-14 h-screen w-screen bg-white z-40 left-0 top-0 ${
					isOpen ? 'block' : 'hidden'
				} lg:h-auto lg:w-full lg:block lg:z-auto lg:bg-transparent lg:relative lg:pt-0`}
			>
				<nav className="flex flex-col text-center lg:flex-row lg:text-left justify-center mt-4 mb-8">
					<NavLink name="Home" url="/" />
					{items &&
						items.map((item) => {
							return (
								<React.Fragment key={item._uid}>
									<NavLink
                                        onClick={() => setIsOpen(false)}
										name={item.display_name}
										url={item.link.story.url}
									/>
								</React.Fragment>
							)
						})}
				</nav>
			</div>
		</div>
	)
}
