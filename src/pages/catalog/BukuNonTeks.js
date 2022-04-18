import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Hero from '../../components/catalog/hero'
import SectionCatalog from '../../components/catalog/sections/SectionCatalog/SectionCatalog'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const BukuNonTeks = () => {

    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([])
    const [limit, setLimit] = useState(12)
    const [typeBook, setTypeBook] = useState('type_pdf')
    const [typeCatalogue, setTypeCatalogue] = useState('getNonTextBooks')

    // State for filter level
    const [level, setLevel] = useState('')
    const [checkActive, setCheckActive] = useState('')

    // State for filter lesson
    const [lessonIPA, setLessonIPA] = useState('')
    const [lessonIPS, setLessonIPS] = useState('')
    const [lessonBIndonesia, setLessonBIndonesia] = useState('')
    const [lessonBInggris, setLessonBInggris] = useState('')
    const [lessonMatematika, setLessonMatematika] = useState('')
    const [lessonPKN, setLessonPKN] = useState('')

    useEffect(() => {

        const getBooks = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${BASE_URL}/api/catalogue/${typeCatalogue}?limit=2000&${typeBook}&${level}&${lessonIPA}&${lessonIPS}&${lessonBIndonesia}&${lessonBInggris}&${lessonMatematika}&${lessonPKN}`)
                setBooks(response.data.results)
                setLoading(false)
            } catch (err) {
                return err.message;
            }
        };
        getBooks()
    }, [typeCatalogue, typeBook, level, lessonIPA, lessonIPS, lessonBIndonesia, lessonBInggris, lessonMatematika, lessonPKN])

    // const filterLevel = (PAUD, SD, SMP, SMA) => {
    //     levelPAUD === '' ? setLevelPAUD(PAUD) : PAUD !== '' && setLevelPAUD('')
    //     levelSD === '' ? setLevelSD(SD) : SD !== '' && setLevelSD('')
    //     levelSMP === '' ? setLevelSMP(SMP) : SMP !== '' && setLevelSMP('')
    //     levelSMA === '' ? setLevelSMA(SMA) : SMA !== '' && setLevelSMA('')
    // }

    const filterLesson = (IPA, IPS, BIndonesia, BInggris, Matematika, PKN) => {
        lessonIPA === '' ? setLessonIPA(IPA) : IPA !== '' && setLessonIPA('')
        lessonIPS === '' ? setLessonIPS(IPS) : IPS !== '' && setLessonIPS('')
        lessonBIndonesia === '' ? setLessonBIndonesia(BIndonesia) : BIndonesia !== '' && setLessonBIndonesia('')
        lessonBInggris === '' ? setLessonBInggris(BInggris) : BInggris !== '' && setLessonBInggris('')
        lessonMatematika === '' ? setLessonMatematika(Matematika) : Matematika !== '' && setLessonMatematika('')
        lessonPKN === '' ? setLessonPKN(PKN) : PKN !== '' && setLessonPKN('')
    }

    const handleSetLevel = (type) => {
        if (type == 'level_paud') {
            if (checkActive == type) {
                setCheckActive('')
                setLevel('')
            } else {
                setCheckActive(type)
                setLevel(type)
            }
        }
        if (type == 'level_sd') {
            if (checkActive == type) {
                setCheckActive('')
                setLevel('')
            } else {
                setCheckActive(type)
                setLevel(type)
            }
        }
        if (type == 'level_smp') {
            if (checkActive == type) {
                setCheckActive('')
                setLevel('')
            } else {
                setCheckActive(type)
                setLevel(type)
            }
        }
        if (type == 'level_sma') {
            if (checkActive == type) {
                setCheckActive('')
                setLevel('')
            } else {
                setCheckActive(type)
                setLevel(type)
            }
        }
    }

    return (
        <Layout>
            <Hero
                typeCatalogue={typeCatalogue}
                setTypeCatalogue={(type) => {
                    setTypeCatalogue(type)
                }}
            />
            <SectionCatalog
                books={books}
                loading={loading}
                skeletonCount={limit}
                typeBook={typeBook}
                typeCatalogue={typeCatalogue}
                checkActive={checkActive}
                setTypeCatalogue={(type) => setTypeCatalogue(type)}
                setTypeBook={(type) => setTypeBook(type)}
                setLevel={(level) => handleSetLevel(level)}
                setLessonIPA={() => filterLesson('subject_ipa', '', '', '', '', '')}
                setLessonIPS={() => filterLesson('', 'subject_ips', '', '', '', '')}
                setLessonBIndonesia={() => filterLesson('', '', 'subject_indonesia', '', '', '')}
                setLessonBInggris={() => filterLesson('', '', '', 'subject_inggris', '', '')}
                setLessonMatematika={() => filterLesson('', '', '', '', 'subject_matematika', '')}
                setLessonPkn={() => filterLesson('', '', '', '', '', 'subject_ppkn')}
            />
        </Layout>
    )
}

export default BukuNonTeks