import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/catalog/hero'
import SectionCatalog from '../../components/catalog/sections/SectionCatalog/SectionCatalog'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const BukuTeksK13 = () => {

    // State handle query params from homepage
    const location = useLocation()
    const [title, setTitle] = useState(location.state !== null ? location.state.title : null)
    const [typeSearchBook, setTypeSearchBook] = useState(location.state !== null ? location.state.typeBook : null)

    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([])
    const [limit, setLimit] = useState(12)
    const [typeBook, setTypeBook] = useState('type_pdf')
    const [typeCatalogue, setTypeCatalogue] = useState('getTextBooks')

    // Filter jenjang kelas
    const [class1, setClass1] = useState("");
    const [class2, setClass2] = useState("");
    const [class3, setClass3] = useState("");
    const [class4, setClass4] = useState("");
    const [class5, setClass5] = useState("");
    const [class6, setClass6] = useState("");
    const [class7, setClass7] = useState("");
    const [class8, setClass8] = useState("");
    const [class9, setClass9] = useState("");
    const [class10, setClass10] = useState("");
    const [class11, setClass11] = useState("");
    const [class12, setClass12] = useState("");

    // State for filter endpoints
    const [popularBook, setPopularBook] = useState('')
    const [latestBook, setLatestBook] = useState('')

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
    const [lessonInformatika, setLessonInformatika] = useState('')
    const [lessonPJOK, setLessonPJOK] = useState('')
    const [lessonIslam, setLessonIslam] = useState('')
    const [lessonKristen, setLessonKristen] = useState('')
    const [lessonKatolik, setLessonKatolik] = useState('')
    const [lessonHindu, setLessonHindu] = useState('')
    const [lessonBuddha, setLessonBuddha] = useState('')
    const [lessonKhonghucu, setLessonKhonghucu] = useState('')
    const [lessonKepercayaan, setLessonKepercayaan] = useState('')
    const [lessonSeniTari, setLessonSeniTari] = useState('')
    const [lessonSeniMusik, setLessonSeniMusik] = useState('')
    const [lessonSeniRupa, setLessonSeniRupa] = useState('')
    const [lessonSeniTeater, setLessonSeniTeater] = useState('')
    const [lessonSosiologi, setLessonSosiologi] = useState('')
    const [lessonAntropologi, setLessonAntropologi] = useState('')
    const [lessonEkonomi, setLessonEkonomi] = useState('')
    const [lessonGeografi, setLessonGeografi] = useState('')
    const [lessonSejarah, setLessonSejarah] = useState('')
    const [lessonPrakarya, setLessonPrakarya] = useState('')

    useEffect(() => {
        let ENDPOINTS_URL = `${BASE_URL}/api/catalogue/${typeCatalogue}?limit=2000&${typeBook}&${level}&${lessonIPA}&${lessonIPS}&${lessonBIndonesia}&${lessonBInggris}&${lessonMatematika}&${lessonPKN}&${lessonInformatika}&${lessonPJOK}&${lessonIslam}&${lessonKristen}&${lessonKatolik}&${lessonHindu}&${lessonBuddha}&${lessonKhonghucu}&${lessonKepercayaan}&${lessonSeniTari}&${lessonSeniMusik}&${lessonSeniRupa}&${lessonSeniTeater}&${lessonSosiologi}&${lessonAntropologi}&${lessonEkonomi}&${lessonGeografi}&${lessonSejarah}&${lessonPrakarya}&${class1}&${class2}&${class3}&${class4}&${class5}&${class6}&${class7}&${class8}&${class9}&${class10}&${class11}&${class12}&${latestBook}`;

        // Filter route endpoints for popular book
        popularBook && (ENDPOINTS_URL = `${BASE_URL}/api/statistic/${popularBook}?qty=20`)

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
    }, [title, typeSearchBook, popularBook, typeCatalogue, typeBook, level, lessonIPA, lessonIPS, lessonBIndonesia, lessonBInggris, lessonMatematika, lessonPKN, lessonInformatika, lessonPJOK, lessonIslam, lessonKristen, lessonKatolik, lessonHindu, lessonBuddha, lessonKhonghucu, lessonKepercayaan, lessonSeniTari, lessonSeniMusik, lessonSeniRupa, lessonSeniTeater, lessonSosiologi, lessonAntropologi, lessonEkonomi, lessonGeografi, lessonSejarah, lessonPrakarya, class1, class2, class3, class4, class5, class6, class7, class8, class9, class10, class11, class12, latestBook])

    // const filterLevel = (PAUD, SD, SMP, SMA) => {
    //     levelPAUD === '' ? setLevelPAUD(PAUD) : PAUD !== '' && setLevelPAUD('')
    //     levelSD === '' ? setLevelSD(SD) : SD !== '' && setLevelSD('')
    //     levelSMP === '' ? setLevelSMP(SMP) : SMP !== '' && setLevelSMP('')
    //     levelSMA === '' ? setLevelSMA(SMA) : SMA !== '' && setLevelSMA('')
    // }

    const filterLesson = (IPA, IPS, BIndonesia, BInggris, Matematika, PKN, Informatika, PJOK, Islam, Kristen, Katolik, Hindu, Buddha, Khonghucu, Kepercayaan, SeniTari, SeniMusik, SeniRupa, SeniTeater, Sosiologi, Antropologi, Ekonomi, Geografi, Sejarah, Prakarya) => {
        lessonIPA === '' ? setLessonIPA(IPA) : IPA !== '' && setLessonIPA('')
        lessonIPS === '' ? setLessonIPS(IPS) : IPS !== '' && setLessonIPS('')
        lessonBIndonesia === '' ? setLessonBIndonesia(BIndonesia) : BIndonesia !== '' && setLessonBIndonesia('')
        lessonBInggris === '' ? setLessonBInggris(BInggris) : BInggris !== '' && setLessonBInggris('')
        lessonMatematika === '' ? setLessonMatematika(Matematika) : Matematika !== '' && setLessonMatematika('')
        lessonPKN === '' ? setLessonPKN(PKN) : PKN !== '' && setLessonPKN('')
        lessonInformatika === '' ? setLessonInformatika(Informatika) : Informatika !== '' && setLessonInformatika('')
        lessonPJOK === '' ? setLessonPJOK(PJOK) : PJOK !== '' && setLessonPJOK('')
        lessonIslam === '' ? setLessonIslam(Islam) : Islam !== '' && setLessonIslam('')
        lessonKristen === '' ? setLessonKristen(Kristen) : Kristen !== '' && setLessonKristen('')
        lessonKatolik === '' ? setLessonKatolik(Katolik) : Katolik !== '' && setLessonKatolik('')
        lessonHindu === '' ? setLessonHindu(Hindu) : Hindu !== '' && setLessonHindu('')
        lessonBuddha === '' ? setLessonBuddha(Buddha) : Buddha !== '' && setLessonBuddha('')
        lessonKhonghucu === '' ? setLessonKhonghucu(Khonghucu) : Khonghucu !== '' && setLessonKhonghucu('')
        lessonKepercayaan === '' ? setLessonKepercayaan(Kepercayaan) : Kepercayaan !== '' && setLessonKepercayaan('')
        lessonSeniTari === '' ? setLessonSeniTari(SeniTari) : SeniTari !== '' && setLessonSeniTari('')
        lessonSeniMusik === '' ? setLessonSeniMusik(SeniMusik) : SeniMusik !== '' && setLessonSeniMusik('')
        lessonSeniRupa === '' ? setLessonSeniRupa(SeniRupa) : SeniRupa !== '' && setLessonSeniRupa('')
        lessonSeniTeater === '' ? setLessonSeniTeater(SeniTeater) : SeniTeater !== '' && setLessonSeniTeater('')
        lessonSosiologi === '' ? setLessonSosiologi(Sosiologi) : Sosiologi !== '' && setLessonSosiologi('')
        lessonAntropologi === '' ? setLessonAntropologi(Antropologi) : Antropologi !== '' && setLessonAntropologi('')
        lessonEkonomi === '' ? setLessonEkonomi(Ekonomi) : Ekonomi !== '' && setLessonEkonomi('')
        lessonGeografi === '' ? setLessonGeografi(Geografi) : Geografi !== '' && setLessonGeografi('')
        lessonSejarah === '' ? setLessonSejarah(Sejarah) : Sejarah !== '' && setLessonSejarah('')
        lessonPrakarya === '' ? setLessonPrakarya(Prakarya) : Prakarya !== '' && setLessonPrakarya('')
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
                    setTypeCatalogue(type)
                }}
            />
            <SectionCatalog
                setPopularBook={(popular) => setPopularBook(popular)}
                setLatestBook={(latest) => setLatestBook(latest)}
                searchTitle={title}
                books={books}
                loading={loading}
                skeletonCount={limit}
                typeBook={typeBook}
                typeCatalogue={typeCatalogue}
                checkActive={checkActive}
                setSearchTypeCatalogue={(data) => filterSearchCatalogue(data)}
                setTypeCatalogue={(type) => setTypeCatalogue(type)}
                setTypeBook={(type) => setTypeBook(type)}
                setLevel={(level) => handleSetLevel(level)}
                setLessonIPA={() => filterLesson('subject_ipa', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonIPS={() => filterLesson('', 'subject_ips', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonBIndonesia={() => filterLesson('', '', 'subject_indonesia', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonBInggris={() => filterLesson('', '', '', 'subject_inggris', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonMatematika={() => filterLesson('', '', '', '', 'subject_matematika', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonPkn={() => filterLesson('', '', '', '', '', 'subject_ppkn', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonInformatika={() => filterLesson('', '', '', '', '', '', 'subject_informatika', '', '', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonPJOK={() => filterLesson('', '', '', '', '', '', '', 'subject_pjok', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonIslam={() => filterLesson('', '', '', '', '', '', '', '', 'subject_agama_islam', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonKristen={() => filterLesson('', '', '', '', '', '', '', '', '', 'subject_agama_kristen', '', '', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonKatolik={() => filterLesson('', '', '', '', '', '', '', '', '', '', 'subject_agama_katolik', '', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonHindu={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', 'subject_agama_hindu', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonBuddha={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', 'subject_agama_budha', '', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonKhonghucu={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_agama_khonghucu', '', '', '', '', '', '', '', '', '', '', '')}
                setLessonKepercayaan={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_kepercayaan', '', '', '', '', '', '', '', '', '', '')}
                setLessonSeniTari={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_seni_tari', '', '', '', '', '', '', '', '', '')}
                setLessonSeniMusik={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_seni_musik', '', '', '', '', '', '', '', '')}
                setLessonSeniRupa={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_seni_rupa', '', '', '', '', '', '', '')}
                setLessonSeniTeater={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_seni_teater', '', '', '', '', '', '')}
                setLessonSosiologi={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_sosiologi', '', '', '', '', '')}
                setLessonAntropologi={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_antropologi', '', '', '', '')}
                setLessonEkonomi={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_ekonomi', '', '', '')}
                setLessonGeografi={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_geografi', '', '')}
                setLessonSejarah={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_sejarah', '')}
                setLessonPrakarya={() => filterLesson('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'subject_prakarya')}
                setClass1={() => class1 === '' ? setClass1('class_1') : setClass1('')}
                setClass2={() => class2 === '' ? setClass2('class_2') : setClass2('')}
                setClass3={() => class3 === '' ? setClass3('class_3') : setClass3('')}
                setClass4={() => class4 === '' ? setClass4('class_4') : setClass4('')}
                setClass5={() => class5 === '' ? setClass5('class_5') : setClass5('')}
                setClass6={() => class6 === '' ? setClass6('class_6') : setClass6('')}
                setClass7={() => class7 === '' ? setClass7('class_7') : setClass7('')}
                setClass8={() => class8 === '' ? setClass8('class_8') : setClass8('')}
                setClass9={() => class9 === '' ? setClass9('class_9') : setClass9('')}
                setClass10={() => class10 === '' ? setClass10('class_10') : setClass10('')}
                setClass11={() => class11 === '' ? setClass11('class_11') : setClass11('')}
                setClass12={() => class12 === '' ? setClass12('class_12') : setClass12('')}
            />
        </Layout>
    )
}

export default BukuTeksK13