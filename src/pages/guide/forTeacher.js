import React from 'react'
import Layout from '../../components/global/Layout'
import Hero from '../../components/guide/Hero/Hero'
import SectionIntro from '../../components/guide/sections/SectionIntro/SectionIntro'
import SectionJelajahi from '../../components/guide/sections/SectionJelajahi/SectionJelajahi'

const forTeacher = () => {
    const content = {
        subtitle: 'BUKU UNTUK GURU',
        title: 'Temukan referensi buku-buku resmi dari kemdikbud',
        image: '/assets/image/guide/guru.png',
        vector: '/assets/image/guide/vectorForTeacher.png',
        description: 'Akses berbagai referensi buku untuk membantu proses belajar mengajar ibu bapak guru di seluruh Indonesia'
    }

    return (
        <Layout>
            <Hero content={content} role="teacher" />
            <SectionIntro />
            <SectionJelajahi />
        </Layout>
    )
}

export default forTeacher