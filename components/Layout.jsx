import React from 'react'
import MainNav from './MainNav'
import Footer from './Footer'

export default function Layout({ mainNavItems, footerNavItems, children, currentSlug }) {
  return (
    <div className="container mx-auto">
      <MainNav currentSlug={currentSlug} items={mainNavItems} />
      <main className="font-mono">{children}</main>
      <Footer items={footerNavItems} />
    </div>
  )
}
