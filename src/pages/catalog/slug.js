import React from 'react'
import HeroDetail from '../../components/catalog/hero/HeroDetail/HeroDetail'
import SectionAudioPlayer from '../../components/catalog/sections/SectionAudioPlayer/SectionAudioPlayer'
import SectionBreadcumb from '../../components/catalog/sections/SectionBreadcumb/SectionBreadcumb'
import SectionRecommended from '../../components/catalog/sections/SectionRecommended/SectionRecommended'
import SectionReview from '../../components/catalog/sections/SectionReview/SectionReview'
import Layout from '../../components/global/Layout'

const CatalogDetail = () => {
    return (
        <Layout>
            <SectionBreadcumb />
            <HeroDetail />
            {/* <SectionAudioPlayer /> */}
            <SectionReview />
            <SectionRecommended />
        </Layout >
    )
}

export default CatalogDetail