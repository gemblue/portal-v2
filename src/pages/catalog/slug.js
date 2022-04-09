import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroDetail from '../../components/catalog/hero/HeroDetail/HeroDetail'
import SectionAudioPlayer from '../../components/catalog/sections/SectionAudioPlayer/SectionAudioPlayer'
import SectionBreadcumb from '../../components/catalog/sections/SectionBreadcumb/SectionBreadcumb'
import SectionRecommended from '../../components/catalog/sections/SectionRecommended/SectionRecommended'
import SectionReview from '../../components/catalog/sections/SectionReview/SectionReview'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const CatalogDetail = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(false)
    const [book, setBook] = useState([])
    const [recommendBooks, setRecommendBooks] = useState([])

    useEffect(() => {
        const getRecommendBooks = async () => {
            setLoading(true)
            try {
                let response = await axios.get(`${BASE_URL}/api/catalogue/getRecommendCatalogue?slug=${slug}&qty=8`);
                setRecommendBooks(response.data.results);
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
        getRecommendBooks()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [slug])
    console.log(book);
    return (
        <Layout>
            <SectionBreadcumb
                category={book.category}
                level={book.level}
                title={book.title}
            />
            <HeroDetail
                image={book.image}
                bookType={book.type}
                title={book.title}
                publisher={book.publisher}
                isbn={book.isbn}
                edition={book.edition}
                writer={book.writer}
                attachment={book.attachment}
            />
            {book.type == 'audio' && <SectionAudioPlayer audio={book.audio_attachment} />}
            <SectionReview />
            <SectionRecommended
                recommendBooks={recommendBooks}
                loading={loading}
            />
        </Layout >
    )
}

export default CatalogDetail