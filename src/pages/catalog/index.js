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
    const [typeBook, setTypeBook] = useState('')
    const [typeCatalogue, setTypeCatalogue] = useState('getTextBooks')

    let search = useLocation().search;
    let [type, setType] = useState(new URLSearchParams(search).get('type'))

    useEffect(() => {
        type === 'getTextBooks' && setTypeCatalogue(type)
        type === 'getPenggerakTextBooks' && setTypeCatalogue(type)
        type === 'getNonTextBooks' && setTypeCatalogue(type)

        const getTextBooks = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${BASE_URL}/api/catalogue/${typeCatalogue}?limit=${limit}&${typeBook}`)
                setBooks(response.data.results)
                setLoading(false)
            } catch (err) {
                return err.message;
            }
        };
        getTextBooks()
    }, [typeCatalogue, limit, typeBook])

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
                setTypeBook={(type) => setTypeBook(type)}
            />
        </Layout>
    )
}

export default Catalog