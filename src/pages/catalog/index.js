import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/catalog/hero'
import SectionCatalog from '../../components/catalog/sections/SectionCatalog/SectionCatalog'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const Catalog = () => {

    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([])
    const [limit, setLimit] = useState(10)
    const [typeBook, setTypeBook] = useState('type_pdf')
    const [typeCatalogue, setTypeCatalogue] = useState('getTextBooks')

    // State for filter level
    const [levelSD, setLevelSD] = useState('')
    const [levelSMP, setLevelSMP] = useState('')
    const [levelSMA, setLevelSMA] = useState('')

    // State for filter lesson
    const [lessonIPA, setLessonIPA] = useState('')
    const [lessonIPS, setLessonIPS] = useState('')
    const [lessonBIndonesia, setLessonBIndonesia] = useState('')
    const [lessonBInggris, setLessonBInggris] = useState('')
    const [lessonMatematika, setLessonMatematika] = useState('')
    const [lessonPKN, setLessonPKN] = useState('')

    // Get query params if exist
    let search = useLocation().search;
    let [type, setType] = useState(new URLSearchParams(search).get('type'))

    useEffect(() => {
        type === 'getTextBooks' && setTypeCatalogue(type)
        type === 'getPenggerakTextBooks' && setTypeCatalogue(type)
        type === 'getNonTextBooks' && setTypeCatalogue(type)

        const getBooks = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${BASE_URL}/api/catalogue/${typeCatalogue}?limit=${limit}&${typeBook}&${levelSD}&${levelSMP}&${levelSMA}&${lessonIPA}&${lessonIPS}&${lessonBIndonesia}&${lessonBInggris}&${lessonMatematika}&${lessonPKN}`)
                setBooks(response.data.results)
                setLoading(false)
            } catch (err) {
                return err.message;
            }
        };
        getBooks()
    }, [typeCatalogue, limit, typeBook, levelSD, levelSMP, levelSMA, lessonIPA, lessonIPS, lessonBIndonesia, lessonBInggris, lessonMatematika, lessonPKN])

    const filterLevel = (SD, SMP, SMA) => {
        levelSD === '' ? setLevelSD(SD) : SD !== '' && setLevelSD('')
        levelSMP === '' ? setLevelSMP(SMP) : SMP !== '' && setLevelSMP('')
        levelSMA === '' ? setLevelSMA(SMA) : SMA !== '' && setLevelSMA('')
    }

    const filterLesson = (IPA, IPS, BIndonesia, BInggris, Matematika, PKN) => {
        lessonIPA === '' ? setLessonIPA(IPA) : IPA !== '' && setLessonIPA('')
        lessonIPS === '' ? setLessonIPS(IPS) : IPS !== '' && setLessonIPS('')
        lessonBIndonesia === '' ? setLessonBIndonesia(BIndonesia) : BIndonesia !== '' && setLessonBIndonesia('')
        lessonBInggris === '' ? setLessonBInggris(BInggris) : BInggris !== '' && setLessonBInggris('')
        lessonMatematika === '' ? setLessonMatematika(Matematika) : Matematika !== '' && setLessonMatematika('')
        lessonPKN === '' ? setLessonPKN(PKN) : PKN !== '' && setLessonPKN('')
    }

    return (
        <Layout>
            <Hero
                typeCatalogue={typeCatalogue}
                setTypeCatalogue={(type) => {
                    setType('');
                    setTypeCatalogue(type)
                }}
            />
            <SectionCatalog
                books={books}
                loading={loading}
                skeletonCount={limit}
                setLimit={() => setLimit(limit + 10)}
                typeBook={typeBook}
                setTypeBook={(type) => setTypeBook(type)}
                setLevelSD={() => filterLevel('level_sd', '', '')}
                setLevelSMP={() => filterLevel('', 'level_smp', '')}
                setLevelSMA={() => filterLevel('', '', 'level_sma')}
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

export default Catalog