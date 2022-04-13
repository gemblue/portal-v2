import React from 'react'
import Layout from '../../components/global/Layout'
import Hero from '../../components/guide/Hero/Hero'
import SectionIntro from '../../components/guide/sections/SectionIntro/SectionIntro'
import SectionJelajahi from '../../components/guide/sections/SectionJelajahi/SectionJelajahi'

const forParent = () => {
    const content = {
        subtitle: 'BUKU UNTUK ORANG TUA',
        title: 'Bantu tingkatkan proses belajar anak',
        image: '/assets/image/guide/forParent.png',
        vector: '/assets/image/guide/vectorForParent.png',
        description: 'Dengan akses gratis ke semua buku pelajaran resmi kemendikbud dari jenjang pendidikan PAUD sampai SMA'
    }

    return (
        <Layout>
            <Hero content={content} role="parent" />
            <SectionIntro />
            <SectionJelajahi />
        </Layout>
    )
}

export default forParent