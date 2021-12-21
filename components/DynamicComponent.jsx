import Teaser from './Teaser'
import Grid from './Grid'
import Feature from './Feature'
import Page from './Page'
import ArtCategories from './ArtCategories'
import RichText from './RichText'
import Image from './Image'
import TwoColumns from './TwoColumns'
import ImageGallery from './ImageGallery'

// resolve Storyblok components to Next.js components
const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  page: Page,
  art_categories: ArtCategories,
  rich_text: RichText,
  image: Image,
  two_columns: TwoColumns,
  image_gallery: ImageGallery
}

function DynamicComponent ({ blok, subPages }) {
  // check if component is defined above
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]

    return <Component blok={blok} key={blok._uid} />
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  )
}

export default DynamicComponent
