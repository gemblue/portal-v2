import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/global/Layout'
import Hero from '../../components/guide/Hero/Hero'
import SectionIntroStudent from '../../components/guide/sections/SectionIntro/SectionIntroStudent'
import SectionJelajahi from '../../components/guide/sections/SectionJelajahi/SectionJelajahi'
import SectionStats from '../../components/home/sections/SectionStats/SectionStats'
import { BASE_URL } from '../../utils/config'

const ForStudent = () => {
    const [statisticBook, setStatisticBook] = useState([])

    useEffect(() => {
        const getStatisticBook = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/statistic/getSummary`);
                setStatisticBook(response.data)
            } catch (error) {
                return error.message
            }
        }
        getStatisticBook();
    }, [])

    const content = {
        subtitle: 'BUKU UNTUK SISWA',
        title: 'Belajar jadi lebih mudah',
        image: '/assets/image/guide/untuk siswa.png',
        vector: '/assets/image/guide/vectorForStudent.png',
        description: 'Temukan buku pelajaran resmi kemendikbud di sini'
    }

    return (
        <Layout guide>
            <Hero content={content} role="student" />
            <SectionIntroStudent />
            <SectionJelajahi />
            <SectionStats data={statisticBook} guide />
        </Layout>
    )
}

export default ForStudent