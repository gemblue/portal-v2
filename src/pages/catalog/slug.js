import React from 'react'
import HeroDetail from '../../components/catalog/hero/HeroDetail/HeroDetail'
import SectionBreadcumb from '../../components/catalog/sections/SectionBreadcumb/SectionBreadcumb'
import Layout from '../../components/global/Layout'

const CatalogDetail = () => {
    return (
        <Layout>
            <SectionBreadcumb />
            <HeroDetail />
        </Layout >
    )
}

export default CatalogDetail