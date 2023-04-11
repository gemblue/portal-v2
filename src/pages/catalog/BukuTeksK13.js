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
    const [lessonIPAS, setLessonIPAS] = useState('')
    const [lessonTeknikKonstruksiDanPerumahan, setLessonTeknikKonstruksiDanPerumahan] = useState('')
    const [lessonTeknikOtomotif, setLessonTeknikOtomotif] = useState('')
    const [lessonTeknikElektronika, setLessonTeknikElektronika] = useState('')
    const [lessonTeknikPesawatUdara, setLessonTeknikPesawatUdara] = useState('')
    const [lessonTeknikKonstruksiKapal, setLessonTeknikKonstruksiKapal] = useState('')
    const [lessonTeknikKetenagalistrikan, setLessonTeknikKetenagalistrikan] = useState('')
    const [lessonTeknikGeospasial, setLessonTeknikGeospasial] = useState('')
    const [lessonTeknikGeologiPertambangan, setLessonTeknikGeologiPertambangan] = useState('')
    const [lessonLayananKesehatan, setLessonLayananKesehatan] = useState('')
    const [lessonAgriteknologiPengolahanHasilPertanian, setLessonAgriteknologiPengolahanHasilPertanian] = useState('')
    const [lessonManajementPerkantoranDanLayananBisnis, setLessonManajementPerkantoranDanLayananBisnis] = useState('')
    const [lessonUsahaLayananPariwisata, setLessonUsahaLayananPariwisata] = useState('')
    const [lessonDesainKomunikasiVisual, setLessonDesainKomunikasiVisual] = useState('')
    const [lessonTeknikFurniture, setLessonTeknikFurniture] = useState('')
    const [lessonKuliner, setLessonKuliner] = useState('')

    useEffect(() => {
        let ENDPOINTS_URL = `${BASE_URL}/api/catalogue/${typeCatalogue}?limit=2000&${typeBook}&${level}&${lessonIPA}&${lessonIPS}&${lessonBIndonesia}&${lessonBInggris}&${lessonMatematika}&${lessonPKN}&${lessonInformatika}&${lessonPJOK}&${lessonIslam}&${lessonKristen}&${lessonKatolik}&${lessonHindu}&${lessonBuddha}&${lessonKhonghucu}&${lessonKepercayaan}&${lessonSeniTari}&${lessonSeniMusik}&${lessonSeniRupa}&${lessonSeniTeater}&${lessonSosiologi}&${lessonAntropologi}&${lessonEkonomi}&${lessonGeografi}&${lessonSejarah}&${lessonPrakarya}&${lessonIPAS}&${lessonTeknikKonstruksiDanPerumahan}&${lessonTeknikOtomotif}&${lessonTeknikElektronika}&${lessonTeknikPesawatUdara}&${lessonTeknikKonstruksiKapal}&${lessonTeknikKetenagalistrikan}&${lessonTeknikGeospasial}&${lessonTeknikGeologiPertambangan}&${lessonLayananKesehatan}&${lessonAgriteknologiPengolahanHasilPertanian}&${lessonManajementPerkantoranDanLayananBisnis}&${lessonUsahaLayananPariwisata}&${lessonDesainKomunikasiVisual}&${lessonTeknikFurniture}&${lessonKuliner}&${class1}&${class2}&${class3}&${class4}&${class5}&${class6}&${class7}&${class8}&${class9}&${class10}&${class11}&${class12}&${latestBook}`;

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
    }, [title, typeSearchBook, popularBook, typeCatalogue, typeBook, level, lessonIPA, lessonIPS, lessonBIndonesia, lessonBInggris, lessonMatematika, lessonPKN, lessonInformatika, lessonPJOK, lessonIslam, lessonKristen, lessonKatolik, lessonHindu, lessonBuddha, lessonKhonghucu, lessonKepercayaan, lessonSeniTari, lessonSeniMusik, lessonSeniRupa, lessonSeniTeater, lessonSosiologi, lessonAntropologi, lessonEkonomi, lessonGeografi, lessonSejarah, lessonPrakarya, lessonIPAS, lessonTeknikKonstruksiDanPerumahan, lessonTeknikOtomotif, lessonTeknikElektronika, lessonTeknikPesawatUdara, lessonTeknikKonstruksiKapal, lessonTeknikKetenagalistrikan, lessonTeknikGeospasial, lessonTeknikGeologiPertambangan, lessonLayananKesehatan, lessonAgriteknologiPengolahanHasilPertanian, lessonManajementPerkantoranDanLayananBisnis, lessonUsahaLayananPariwisata, lessonDesainKomunikasiVisual, lessonTeknikFurniture, lessonKuliner, class1, class2, class3, class4, class5, class6, class7, class8, class9, class10, class11, class12, latestBook])

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
                setLessonIPA={() => lessonIPA === '' ? setLessonIPA('subject_ipa') : setLessonIPA('')}
                setLessonIPS={() => lessonIPS === '' ? setLessonIPS('subject_ips') : setLessonIPS('')}
                setLessonBIndonesia={() => lessonBIndonesia === '' ? setLessonBIndonesia('subject_indonesia') : setLessonBIndonesia('')}
                setLessonBInggris={() => lessonBInggris === '' ? setLessonBInggris('subject_inggris') : setLessonBInggris('')}
                setLessonMatematika={() => lessonMatematika === '' ? setLessonMatematika('subject_matematika') : setLessonMatematika('')}
                setLessonPkn={() => lessonPKN === '' ? setLessonPKN('subject_ppkn') : setLessonPKN('')}
                setLessonInformatika={() => lessonInformatika === '' ? setLessonInformatika('subject_informatika') : setLessonInformatika('')}
                setLessonPJOK={() => lessonPJOK === '' ? setLessonPJOK('subject_pjok') : setLessonPJOK('')}
                setLessonIslam={() => lessonIslam === '' ? setLessonIslam('subject_agama_islam') : setLessonIslam('')}
                setLessonKristen={() => lessonKristen === '' ? setLessonKristen('subject_agama_kristen') : setLessonKristen('')}
                setLessonKatolik={() => lessonKatolik === '' ? setLessonKatolik('subject_agama_katolik') : setLessonKatolik('')}
                setLessonHindu={() => lessonHindu === '' ? setLessonHindu('subject_agama_hindu') : setLessonHindu('')}
                setLessonBuddha={() => lessonBuddha === '' ? setLessonBuddha('subject_agama_budha') : setLessonBuddha('')}
                setLessonKhonghucu={() => lessonIPS === '' ? setLessonKhonghucu('subject_agama_khonghucu') : setLessonIPS('')}
                setLessonKepercayaan={() => lessonKepercayaan === '' ? setLessonKepercayaan('subject_kepercayaan') : setLessonKepercayaan('')}
                setLessonSeniTari={() => lessonSeniTari === '' ? setLessonSeniTari('subject_seni_tari') : setLessonSeniTari('')}
                setLessonSeniMusik={() => lessonSeniMusik === '' ? setLessonSeniMusik('subject_seni_musik') : setLessonSeniMusik('')}
                setLessonSeniRupa={() => lessonSeniRupa === '' ? setLessonSeniRupa('subject_seni_rupa') : setLessonSeniRupa('')}
                setLessonSeniTeater={() => lessonSeniTeater === '' ? setLessonSeniTeater('subject_seni_teater') : setLessonSeniTeater('')}
                setLessonSosiologi={() => lessonSosiologi === '' ? setLessonSosiologi('subject_sosiologi') : setLessonSosiologi('')}
                setLessonAntropologi={() => lessonAntropologi === '' ? setLessonAntropologi('subject_antropologi') : setLessonAntropologi('')}
                setLessonEkonomi={() => lessonEkonomi === '' ? setLessonEkonomi('subject_ekonomi') : setLessonEkonomi('')}
                setLessonGeografi={() => lessonGeografi === '' ? setLessonGeografi('subject_geografi') : setLessonGeografi('')}
                setLessonSejarah={() => lessonSejarah === '' ? setLessonSejarah('subject_sejarah') : setLessonSejarah('')}
                setLessonPrakarya={() => lessonPrakarya === '' ? setLessonPrakarya('subject_prakarya') : setLessonPrakarya('')}
                setLessonIPAS={() => lessonIPAS === '' ? setLessonIPAS('subject_ipas') : setLessonIPAS('')}
                setLessonTeknikKonstruksiDanPerumahan={() => lessonTeknikKonstruksiDanPerumahan === '' ? setLessonTeknikKonstruksiDanPerumahan('subject_teknik_konstruksi_dan_perumahan') : setLessonTeknikKonstruksiDanPerumahan('')}
                setLessonTeknikOtomotif={() => lessonTeknikOtomotif === '' ? setLessonTeknikOtomotif('subject_teknik_otomotif') : setLessonTeknikOtomotif('')}
                setLessonTeknikElektronika={() => lessonTeknikElektronika === '' ? setLessonTeknikElektronika('subject_teknik_elektronika') : setLessonTeknikElektronika('')}
                setLessonTeknikPesawatUdara={() => lessonTeknikPesawatUdara === '' ? setLessonTeknikPesawatUdara('subject_teknik_pesawat_udara') : setLessonTeknikPesawatUdara('')}
                setLessonTeknikKonstruksiKapal={() => lessonTeknikKonstruksiKapal === '' ? setLessonTeknikKonstruksiKapal('subject_teknik_konstruksi_kapal') : setLessonTeknikKonstruksiKapal('')}
                setLessonTeknikKetenagalistrikan={() => lessonTeknikKetenagalistrikan === '' ? setLessonTeknikKetenagalistrikan('subject_teknik_ketenagalistrikan') : setLessonTeknikKetenagalistrikan('')}
                setLessonTeknikGeospasial={() => lessonTeknikGeospasial === '' ? setLessonTeknikGeospasial('subject_teknik_geospasial') : setLessonTeknikGeospasial('')}
                setLessonTeknikGeologiPertambangan={() => lessonTeknikGeologiPertambangan === '' ? setLessonTeknikGeologiPertambangan('subject_teknik_geologi_pertambangan') : setLessonTeknikGeologiPertambangan('')}
                setLessonLayananKesehatan={() => lessonLayananKesehatan === '' ? setLessonLayananKesehatan('subject_layanan_kesehatan') : setLessonLayananKesehatan('')}
                setLessonAgriteknologiPengolahanHasilPertanian={() => lessonAgriteknologiPengolahanHasilPertanian === '' ? setLessonAgriteknologiPengolahanHasilPertanian('subject_agriteknologi_pengolahan_hasil_pertanian') : setLessonAgriteknologiPengolahanHasilPertanian('')}
                setLessonManajementPerkantoranDanLayananBisnis={() => lessonManajementPerkantoranDanLayananBisnis === '' ? setLessonManajementPerkantoranDanLayananBisnis('subject_manajemen_perkantoran_dan_layanan_bisnis') : setLessonManajementPerkantoranDanLayananBisnis('')}
                setLessonUsahaLayananPariwisata={() => lessonUsahaLayananPariwisata === '' ? setLessonUsahaLayananPariwisata('subject_usaha_layanan_pariwisata') : setLessonUsahaLayananPariwisata('')}
                setLessonDesainKomunikasiVisual={() => lessonDesainKomunikasiVisual === '' ? setLessonDesainKomunikasiVisual('subject_desain_komunikasi_visual') : setLessonDesainKomunikasiVisual('')}
                setLessonTeknikFurniture={() => lessonTeknikFurniture === '' ? setLessonTeknikFurniture('subject_teknik_furniture') : setLessonTeknikFurniture('')}
                setLessonKuliner={() => lessonKuliner === '' ? setLessonKuliner('subject_kuliner') : setLessonKuliner('')}
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