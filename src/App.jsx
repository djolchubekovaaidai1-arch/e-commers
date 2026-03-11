import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProductList from './components/ProductList/ProductList'
import CategoryList from './components/CategoryList/CategoryList'
import Features from './components/Features/Features'
import PromoBanner from './components/PromoBanner/PromoBanner'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ProductList/>
      <Features/>
      <CategoryList/>
      <PromoBanner/>
      <FeaturedProducts/>
    </div>
  )
}

export default App