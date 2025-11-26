import React from 'react'
import Showcase from '../components/Showcase'
import Categories from '../components/Categories'
import Featured from '../components/Featured'
import NewProducts from '../components/NewProducts'
import ProductPromo from '../components/ProductPromo'

const HomePage = () => {
  return (
    <>
    <Showcase/>
    <Categories/>
    <Featured/>
    <NewProducts/>
    <ProductPromo/>
    </>
  )
}

export default HomePage