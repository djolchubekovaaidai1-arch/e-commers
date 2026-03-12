import React from 'react'
import Hero from '../components/Hero/Hero'
import ProductList from '../components/ProductList/ProductList'

import CategoryList from '../components/CategoryList/CategoryList'
import PromoBanner from '../components/PromoBanner/PromoBanner'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import FeaturesSection from '../components/Features/Features'

const Home = () => {
    return (
        <div>
            <Hero />
            <ProductList />
            <FeaturesSection />
            <CategoryList />
            <PromoBanner />
            <FeaturedProducts />
        </div>
    )
}

export default Home