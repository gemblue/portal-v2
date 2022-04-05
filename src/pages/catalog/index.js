import React from 'react'
import Hero from '../../components/catalog/hero'
import SectionCatalog from '../../components/catalog/sections/SectionCatalog/SectionCatalog'
import Layout from '../../components/global/Layout'

const Catalog = () => {
    return (
        <Layout>
            <Hero />
            <SectionCatalog />
        </Layout>
    )
}

export default Catalog