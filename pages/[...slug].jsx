import React from 'react'
import DynamicComponent from '../components/DynamicComponent'
import Head from 'next/head'
import Layout from '../components/Layout'

import Storyblok, { useStoryblok } from '../lib/storyblok'
import Hero from '../components/Hero'

export default function Page({
	story,
	preview,
	global,
	slug,
}) {
	const enableBridge = true // load the storyblok bridge everywhere
	// const enableBridge = preview; // enable bridge only in prevew mode
	story = useStoryblok(story, enableBridge)

	return (
		<div>
			<Head>
				<title>{story ? story.name : 'Surbek'}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout
				currentSlug={slug}
				mainNavItems={global.story.content.header_links}
				footerNavItems={global.story.content.footer_links}
			>
        <Hero title={story.name} />
				<DynamicComponent blok={story.content} />
			</Layout>
		</div>
	)
}

export async function getStaticProps({ params, preview = false }) {
	// join the slug array used in Next.js catch-all routes
	let slug = params.slug ? params.slug.join('/') : 'home'

	let sbParams = {
		// change to `published` to load the published version
		version: 'draft', // or published
		resolve_links: 'url',
	}

	if (preview) {
		// set the version to draft in the preview mode
		sbParams.version = 'draft'
		sbParams.cv = Date.now()
	}

	let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams)

  let globalParams = {
    version: 'draft',
    resolve_links: 'url',
  }


	let { data: global } = await Storyblok.get(
		`cdn/stories/global-settings`,
		globalParams
	)

	return {
		props: {
			global,
			slug,
			story: data ? data.story : null,
			preview,
		},
		revalidate: 3600, // revalidate every hour
	}
}

export async function getStaticPaths() {
	// get all links from Storyblok
	let { data } = await Storyblok.get('cdn/links/')

	let paths = []
	// create a routes for every link
	Object.keys(data.links).forEach((linkKey) => {
		// do not create a route for folders or the home (index) page
		if (
			data.links[linkKey].is_folder ||
			data.links[linkKey].slug === 'home'
		) {
			return
		}

		// get array for slug because of catch all
		const slug = data.links[linkKey].slug
		let splittedSlug = slug.split('/')

		// cretes all the routes
		paths.push({ params: { slug: splittedSlug } })
	})

	return {
		paths: paths,
		fallback: false,
	}
}
