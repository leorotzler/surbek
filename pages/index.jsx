import Head from 'next/head'
import DynamicComponent from '../components/DynamicComponent'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

// The Storyblok Client
import Storyblok from '../lib/storyblok'

export default function Home(props) {
	const story = props.story

	return (
		<div>
			<Head>
				<title>Surbek</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout
				currentSlug="/"
				mainNavItems={props.global.story.content.header_links}
				footerNavItems={props.global.story.content.footer_links}
			>
        <Hero title="Surbek" />
				<DynamicComponent blok={story.content} />
			</Layout>
		</div>
	)
}

export async function getStaticProps({ preview = false }) {
	// home is the default slug for the homepage in Storyblok
	let slug = 'home'
	// load the published content outside of the preview mode
	let sbParams = {
		version: 'draft', // or 'published'
		resolve_links: 'url',
	}

	if (preview) {
		// load the draft version inside of the preview mode
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
			story: data ? data.story : null,
			preview,
		},
		revalidate: 3600, // revalidate every hour
	}
}
