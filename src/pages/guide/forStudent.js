import React from 'react'
import Layout from '../../components/global/Layout'
import Hero from '../../components/guide/Hero/Hero'
import SectionIntro from '../../components/guide/sections/SectionIntro/SectionIntro'
import SectionJelajahi from '../../components/guide/sections/SectionJelajahi/SectionJelajahi'

const forParent = () => {
    const content = {
        subtitle: 'BUKU UNTUK SISWA',
        title: 'Belajar jadi lebih mudah',
        image: '/assets/image/guide/forStudent.png',
        vector: '/assets/image/guide/vectorForStudent.png',
        description: 'Temukan buku pelajaran resmi kemendikbud disini'
    }

    return (
        <Layout>
            <Hero content={content} />
            <SectionIntro />
            <SectionJelajahi />
        </Layout>
    )
}

export default forParent