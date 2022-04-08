import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroDetail from '../../components/catalog/hero/HeroDetail/HeroDetail'
import SectionBreadcumb from '../../components/catalog/sections/SectionBreadcumb/SectionBreadcumb'
import SectionRecommended from '../../components/catalog/sections/SectionRecommended/SectionRecommended'
import SectionReview from '../../components/catalog/sections/SectionReview/SectionReview'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const CatalogDetail = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(false)
    const [book, setBook] = useState([])
    const [popularBooks, setPopularBooks] = useState([])

    useEffect(() => {
        const getPopularBooks = async () => {
            setLoading(true)
            try {
                let response = await axios.get(`${BASE_URL}/api/statistic/getPopularCatalogue?qty=8`);
                setPopularBooks(response.data.results);
                setLoading(false);
            } catch (err) {
                return err.message;
            }
        }
        const getBookDetail = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/catalogue/getDetails?slug=${slug}`);
                setBook(response.data.results);
            } catch (error) {
                return error.message;
            }
        }
        getBookDetail()
        getPopularBooks()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [slug])

    return (
        <Layout>
            <SectionBreadcumb
                category={book.category}
                level={book.level}
                title={book.title}
            />
            <HeroDetail
                image={book.image}
                bookType={book.taxonomy_name}
                title={book.title}
                publisher={book.publisher}
                isbn={book.isbn}
                edition={book.edition}
                writer={book.writer}
                attachment={book.attachment}
            />
            {/* <SectionAudioPlayer /> */}
            <SectionReview />
            <SectionRecommended
                popularBooks={popularBooks}
                loading={loading}
            />
        </Layout >
    )
}

export default CatalogDetail