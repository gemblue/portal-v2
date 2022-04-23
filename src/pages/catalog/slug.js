import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroDetail from '../../components/catalog/hero/HeroDetail/HeroDetail'
import SectionAudioPlayer from '../../components/catalog/sections/SectionAudioPlayer/SectionAudioPlayer'
import SectionBreadcumb from '../../components/catalog/sections/SectionBreadcumb/SectionBreadcumb'
import SectionRecommended from '../../components/catalog/sections/SectionRecommended/SectionRecommended'
import SectionReview from '../../components/catalog/sections/SectionReview/SectionReview'
import SectionTestimonyComment from '../../components/catalog/sections/SectionTestimonyComment/SectionTestimonyComment'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const CatalogDetail = () => {
    const token = localStorage.getItem('user_token');
    const { slug } = useParams();
    const [loading, setLoading] = useState(false)
    const [book, setBook] = useState([])
    const [reviews, setReviews] = useState([])
    const [recommendBooks, setRecommendBooks] = useState([])

    useEffect(() => {

        setLoading(true)
        const getRecommendBooks = async () => {
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
        const getReviews = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/review/getReviews?slug=${slug}&limit=5&offset=0`);
                setReviews(response.data.results);
            } catch (error) {
                return error.message;
            }
        }
        getReviews()
        getBookDetail()
        getRecommendBooks()
    }, [slug])

    return (
        <Layout>
            <SectionBreadcumb
                category={book.category}
                level={book.level}
                title={book.title}
                slug={book.slug}
            />
            <HeroDetail
                token={token}
                slug={book.slug}
                image={book.image}
                bookType={book.type}
                title={book.title}
                publisher={book.publisher}
                isbn={book.isbn}
                edition={book.edition}
                writer={book.writer}
                attachment={book.attachment}
                totalDownload={book.total_download}
                totalRead={book.total_read}
                loading={loading}
            />
            {book.type === 'audio' && <SectionAudioPlayer audio={book.audio_attachment} />}
            <SectionReview
                token={token}
                slug={book.slug}
            />
            <SectionTestimonyComment reviews={reviews} />
            <SectionRecommended
                recommendBooks={recommendBooks}
                loading={loading}
            />
        </Layout >
    )
}

export default CatalogDetail