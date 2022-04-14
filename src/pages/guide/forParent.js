import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/global/Layout'
import Hero from '../../components/guide/Hero/Hero'
import SectionIntroParent from '../../components/guide/sections/SectionIntro/SectionIntroParent'
import SectionJelajahi from '../../components/guide/sections/SectionJelajahi/SectionJelajahi'
import SectionStats from '../../components/home/sections/SectionStats/SectionStats'
import { BASE_URL } from '../../utils/config'

const ForParent = () => {
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
        subtitle: 'BUKU UNTUK ORANG TUA',
        title: 'Bantu tingkatkan proses belajar anak',
        image: '/assets/image/guide/forParent.png',
        vector: '/assets/image/guide/vectorForParent.png',
        description: 'Dengan akses gratis ke semua buku pelajaran resmi kemendikbud dari jenjang pendidikan PAUD sampai SMA'
    }

    return (
        <Layout>
            <Hero content={content} role="parent" />
            <SectionIntroParent />
            <SectionJelajahi />
            <SectionStats data={statisticBook} />
        </Layout>
    )
}

export default ForParent