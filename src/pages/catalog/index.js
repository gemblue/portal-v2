import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import Hero from '../../components/catalog/hero'
import SectionCatalog from '../../components/catalog/sections/SectionCatalog/SectionCatalog'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const Catalog = () => {
    // State handle query params from homepage
    const location = useLocation()
    const [title, setTitle] = useState(location.state !== null ? location.state.title : null)
    const [typeSearchBook, setTypeSearchBook] = useState(location.state !== null ? location.state.typeBook : null)

    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([])
    const [limit, setLimit] = useState(12)
    const [typeBook, setTypeBook] = useState('type_pdf')
    const [typeCatalogue, setTypeCatalogue] = useState('getPenggerakTextBooks')

    // Handle filter audio book from homepage link
    // const [typeAudio] = useState(location.state !== null ? location.state.type : null)

    // State for filter endpoints
    const [popularBook, setPopularBook] = useState('')

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
        // Default routing endpoints
        let ENDPOINTS_URL = `${BASE_URL}/api/catalogue/${typeCatalogue}?limit=2000&${typeBook}&${level}&${lessonIPA}&${lessonIPS}&${lessonBIndonesia}&${lessonBInggris}&${lessonMatematika}&${lessonPKN}`;

        // Filter route endpoints
        popularBook && (ENDPOINTS_URL = `${BASE_URL}/api/statistic/${popularBook}?qty=20`)

        console.log(title);
        // Filter search from homepage
        if (title !== null && !popularBook) {
            setTypeBook('')
            if (typeSearchBook === 'Kurikulum Merdeka') {
                ENDPOINTS_URL = `${BASE_URL}/api/catalogue/getPenggerakTextBooks?title=${title}&limit=20&offset=0`;
                setTypeCatalogue('getPenggerakTextBooks');
            }
            if (typeSearchBook === 'Teks K13') {
                ENDPOINTS_URL = `${BASE_URL}/api/catalogue/getTextBooks?title=${title}&limit=20&offset=0`;
                setTypeCatalogue('getTextBooks');
            }
            if (typeSearchBook === 'Nonteks') {
                ENDPOINTS_URL = `${BASE_URL}/api/catalogue/getNonTextBooks?title=${title}&limit=20&offset=0`;
                setTypeCatalogue('getNonTextBooks');
            }
        }

        // Handle redirect from homepage only buku audio


        const getBooks = async () => {
            setLoading(true)
            try {
                const response = await axios.get(ENDPOINTS_URL)
                setBooks(response.data.results)
                setLoading(false)
            } catch (err) {
                return err.message;
            }
        };
        getBooks()
    }, [title, typeSearchBook, popularBook, typeCatalogue, typeBook, level, lessonIPA, lessonIPS, lessonBIndonesia, lessonBInggris, lessonMatematika, lessonPKN])

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

    const filterSearchCatalogue = (data) => {
        setTitle(data.title)
        setTypeCatalogue(data.typeCatalogue)

        data.typeCatalogue === 'getPenggerakTextBooks' && setTypeSearchBook('Kurikulum Merdeka')
        data.typeCatalogue === 'getTextBooks' && setTypeSearchBook('Teks K13')
        data.typeCatalogue === 'getNonTextBooks' && setTypeSearchBook('Nonteks')
    }

    return (
        <Layout>
            <Hero
                typeCatalogue={typeCatalogue}
                setTypeCatalogue={(type) => {
                    setTitle(null)
                    setTypeCatalogue(type)
                }}
            />
            <SectionCatalog
                searchTitle={title}
                books={books}
                loading={loading}
                skeletonCount={limit}
                typeBook={typeBook}
                typeCatalogue={typeCatalogue}
                checkActive={checkActive}
                setTypeCatalogue={(type) => setTypeCatalogue(type)}
                setSearchTypeCatalogue={(data) => filterSearchCatalogue(data)}
                setTypeBook={(type) => setTypeBook(type)}
                setLevel={(level) => handleSetLevel(level)}
                setLessonIPA={() => filterLesson('subject_ipa', '', '', '', '', '')}
                setLessonIPS={() => filterLesson('', 'subject_ips', '', '', '', '')}
                setLessonBIndonesia={() => filterLesson('', '', 'subject_indonesia', '', '', '')}
                setLessonBInggris={() => filterLesson('', '', '', 'subject_inggris', '', '')}
                setLessonMatematika={() => filterLesson('', '', '', '', 'subject_matematika', '')}
                setLessonPkn={() => filterLesson('', '', '', '', '', 'subject_ppkn')}
                setPopularBook={(popular) => setPopularBook(popular)}
            />
        </Layout>
    )
}

export default Catalog