import React from 'react'
import Showcase from '../components/Showcase'
import Categories from '../components/Categories'
import Featured from '../components/Featured'
import NewProducts from '../components/NewProducts'
import ProductPromo from '../components/ProductPromo'
import BestSellers from '../components/BestSellers'
import TopBrands from '../components/TopBrands'
import SmartWatch from '../components/SmartWatch'
import OurBlogs from '../components/OurBlogs'
import Features from '../components/Features'

const HomePage = () => {
  return (
    <>
    <Showcase/>
    <Categories/>
    <Featured/>
    <NewProducts/>
    <ProductPromo/>
    <BestSellers/>
    <TopBrands/>
    <SmartWatch/>
    <OurBlogs/>
    <Features/>
    </>
  )
}

export default HomePage