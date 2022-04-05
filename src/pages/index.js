import React from 'react'
import Layout from '../components/global/Layout'
import Hero from '../components/home/hero'
import SectionAccessBook from '../components/home/sections/SectionAccessBook/SectionAccessBook'
import SectionAudioBook from '../components/home/sections/SectionAudioBook/SectionAudioBook'
import SectionBookForAll from '../components/home/sections/SectionBookForAll/SectionBookForAll'
import SectionFAQ from '../components/home/sections/SectionFAQ/SectionFAQ'
import SectionPopularBook from '../components/home/sections/SectionPopularBook/SectionPopularBook'
import SectionStats from '../components/home/sections/SectionStats/SectionStats'
import SectionTestimony from '../components/home/sections/SectionTestimony/SectionTestimony'

const Home = () => {
    return (
        <Layout>
            <Hero />
            <SectionStats />
            <SectionPopularBook />
            <SectionAccessBook />
            <SectionAudioBook />
            <SectionTestimony />
            <SectionBookForAll />
            <SectionFAQ />
        </Layout>
    )
}

export default Home