import React from 'react'
import HeroSection from './_components/hero-section'
import Search from './_features/product-search/Search'

function page() {
  return (
    <div className='-mx-8 bg-black p-4'>
        {/* <HeroSection/> */}
        {/* <Search/> */}
        <Search/>
    </div>
  )
}

export default page