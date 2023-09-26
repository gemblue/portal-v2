import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/catalog/hero'
import SectionCatalog from '../../components/catalog/sections/SectionCatalog/SectionCatalog'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'
import Swal from "sweetalert2"
import PdfViewer from '../../components/global/PdfViewer'

const BukuTransisiPaudSD = () => {

    // State handle query params from homepage
    const location = useLocation()
    const [title, setTitle] = useState(location.state !== null ? location.state.title : null)
    const [typeSearchBook, setTypeSearchBook] = useState(location.state !== null ? location.state.typeBook : null)

    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([])
    const [limit, setLimit] = useState(12)
    const [typeBook, setTypeBook] = useState('type_pdf')
    const [typeCatalogue, setTypeCatalogue] = useState('getNonTextBooks')

    // State for filter endpoints
    const [popularBook, setPopularBook] = useState('')
    const [latestBook, setLatestBook] = useState('')

    // State for filter level
    const [level, setLevel] = useState('level_transisi')

    useEffect(() => {
        let ENDPOINTS_URL = `${BASE_URL}/api/catalogue/${typeCatalogue}?limit=2000&${typeBook}&${level}&${latestBook}`;

         // If filter transisi PAUD SD book
         if(level === 'level_transisi') {
            ENDPOINTS_URL = `${BASE_URL}/api/catalogue/getNonTextBooks?limit=2000&type_pdf&tag=transisi`
        }
        
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
                ENDPOINTS_URL = `${BASE_URL}/api/catalogue/getNonTextBooks?title=${title}&limit=20&offset=0&sort=desc`;
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
    }, [title, typeSearchBook, popularBook, typeCatalogue, typeBook, level, latestBook]);

    // Handle popup book guide first
    useEffect(() => {
        Swal.fire({
            title: 'Halo!',
            text: 'Selamat datang di laman buku transisi PAUD ke SD. Silakan klik tombol berikut ini untuk membaca panduan.',
            confirmButtonText: "Buka Panduan",
            showCancelButton: true,
            cancelButtonText: "Nanti Saja",
        })
        .then((result) => {
            if(result.isConfirmed) {
                Swal.fire({
                    html: `
                        <object
                            type="application/pdf"
                            data="https://ik.imagekit.io/z5w8c5jluyvp/Gabungan%20FINAL%20DIGITAL%20-%20Buku%20Bacaan%20Berkualitas%20Untuk%20Menguatkan%20Transisi%20PAUD%20ke%20SD%20yang%20Menyenangkan__8Lx2QfVq.pdf?updatedAt=1692603727572"
                            width="100%"
                            style="height: 90vh"
                        >
                            ${<PdfViewer url="https://ik.imagekit.io/z5w8c5jluyvp/Gabungan%20FINAL%20DIGITAL%20-%20Buku%20Bacaan%20Berkualitas%20Untuk%20Menguatkan%20Transisi%20PAUD%20ke%20SD%20yang%20Menyenangkan__8Lx2QfVq.pdf?updatedAt=1692603727572"></PdfViewer>}
                        </object>`,
                    width: 900,
                    showConfirmButton: false,
                    showCloseButton: true,
                })
            }
            }
        )
    }, [])

    const filterSearchCatalogue = (data) => {
        setTitle(data.title)
        setTypeCatalogue(data.typeCatalogue)

        data.typeCatalogue === 'getPenggerakTextBooks' && setTypeSearchBook('Kurikulum Merdeka')
        data.typeCatalogue === 'getTextBooks' && setTypeSearchBook('Teks K13')
        data.typeCatalogue === 'getNonTextBooks' && setTypeSearchBook('Nonteks')
    }

    const handleFilterLevel = (filter) => {
        filter === level ? setLevel("") : setLevel(filter)
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
                setSearchTypeCatalogue={(data) => filterSearchCatalogue(data)}
                level={level}
                setLevelNonText={(filter) => handleFilterLevel(filter)}
            />
        </Layout>
    )
}

export default BukuTransisiPaudSD