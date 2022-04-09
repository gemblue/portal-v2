import React from 'react'
import Layout from '../../components/global/Layout'
import Hero from '../../components/guide/Hero/Hero'
import SectionIntro from '../../components/guide/sections/SectionIntro/SectionIntro'
import SectionJelajahi from '../../components/guide/sections/SectionJelajahi/SectionJelajahi'

const GuideDetail = () => {
    return (
        <Layout>
            <Hero />
            <SectionIntro />
            <SectionJelajahi />
        </Layout>
    )
}

export default GuideDetail