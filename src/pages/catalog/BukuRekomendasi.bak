import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faFilePdf, faHandPointer, faSearch, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import CardSkeleton from '../../components/global/card/CardSkeleton/CardSkeleton'
import fuzzy from "fuzzy"
import CardBook from '../../components/global/card/CardBook/CardBook'
import Paginator from 'react-hooks-paginator'

const BukuRekomendasi = () => {

    const pageLimit = 12;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    const [books, setBooks] = useState([])
    const [title, setTitle] = useState(null);
    const [limit, setLimit] = useState(12);
    const [loading, setLoading] = useState(false)

    const [lists, setLists] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getBooks = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${BASE_URL}/api/catalogue/getPenggerakTextBooks?limit=2000&type_pdf`)
                setBooks(response.data.results)
                setLoading(false)
            } catch (err) {
                return err.message;
            }
        };
        getBooks()
    }, []);

    var options = {
        extract: function (el) { return el.title; }
    };
    var results = fuzzy.filter(search, lists, options);
    var listResults = results.map(function (el) { return el; });

    const handleSearch = ({ currentTarget = {} }) => {
        const { value } = currentTarget
        setSearch(value)
    }

    // Set for pagination
    useEffect(() => {
        setCurrentData(books?.slice(offset, offset + pageLimit));
    }, [offset, books]);

    const scrollTop = () => {
        setTimeout(() => {
            document.getElementById('catalog').scrollIntoView()
        }, 0);
    }


    const searchBook = () => {
        setSearch('')
    }

    return (
        <Layout>
            <div className="container">
                <div className="px-3 py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-muted text-end my-4">
                                Menampilkan 100 buku (100 dari 150 buku)
                            </div>
                            <div className="row">
                                <div className="col-lg-7">
                                    <h3>Buku Rekomendasi</h3>
                                </div>
                                <div className="col-lg-5 position-relative">
                                    <div className="input-group shadow-sm">
                                        <span className="input-group-text bg-white"><FontAwesomeIcon className='text-muted' icon={faSearch} /></span>
                                        <input value={search} onChange={handleSearch} onKeyDown={e => e.code === 'Enter' && searchBook()} type="text" className="form-control py-2 border-start-0 border-end-0 px-1" placeholder="Cari buku disini" aria-label="Cari buku disini" />
                                        <button onClick={() => searchBook()} className="btn btn-orange" type="button">Cari</button>
                                    </div>

                                    {
                                        search != '' && (
                                            <div className="card-body bg-white p-0 py-2 px-3 position-absolute" style={{ zIndex: '10' }}>
                                                <h6>Hasil pencarian :</h6>
                                                <div className="list-group">
                                                    {
                                                        search !== '' && listResults.length < 1 && (
                                                            <>
                                                                <p className="bg-light rounded-pill">Hasil tidak ditemukan. Silahkan cari dengan kata kunci lain</p>
                                                            </>
                                                        )
                                                    }
                                                    {
                                                        listResults &&
                                                        listResults.map((item, index) => {
                                                            return (
                                                                <Link to={`/katalog/${item.original.slug}`} className="list-group-item list-group-item-action border-0 rounded-pill text-muted">
                                                                    {item.original.type === 'pdf' && <FontAwesomeIcon icon={faFilePdf} className="me-2" />}
                                                                    {item.original.type === 'audio' && <FontAwesomeIcon icon={faVolumeHigh} className="me-2" />}
                                                                    {item.original.type === 'interactive' && <FontAwesomeIcon icon={faHandPointer} className="me-2" />}
                                                                    {item.original.title}
                                                                </Link>
                                                            )
                                                        }).slice(0, 5)
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            {
                                title !== null && (
                                    <div className="mt-3">Hasil pencarian dari : <strong>{title}</strong> </div>
                                )
                            }
                            <div className="row">
                                {
                                    loading
                                        ? [...Array(limit)].map((item, index) => {
                                            return ((<div key={index} className="col-lg-3 my-2"><CardSkeleton /></div>))
                                        })
                                        : currentData?.length == 0 ? (
                                            <div className="text-center mt-5">
                                                <img
                                                    width="60"
                                                    src="/assets/image/catalog/not-found.png"
                                                    className="img-fluid"
                                                    alt="Not found"
                                                />
                                                <div className="text-center mt-2">Buku belum tersedia</div>
                                            </div>
                                        )
                                            : currentData?.map((book, index) => {
                                                return (
                                                    <div key={index} className="col-lg-3 my-2">
                                                        <Link key={index} to={`/katalog/buku-rekomendasi/${book.slug}`} className="text-decoration-none text-dark">
                                                            <CardBook
                                                                image={book.image}
                                                                title={book.title}
                                                                typeBook={book.type}
                                                                level={book.level}
                                                            />
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                }
                            </div>
                            <div className="mt-4">
                                <div onClick={() => scrollTop()}>
                                    <Paginator
                                        pagePrevText={<FontAwesomeIcon icon={faArrowLeft} />}
                                        pageNextText={<FontAwesomeIcon icon={faArrowRight} />}
                                        totalRecords={books?.length}
                                        pageLimit={pageLimit}
                                        pageNeighbours={2}
                                        setOffset={setOffset}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                    />

                                </div>
                                {/* <button onClick={() => setLimit()} className="btn btn-primary rounded-pill">Load more</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BukuRekomendasi