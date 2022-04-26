import { faArrowLeft, faArrowRight, faFilePdf, faHandPointer, faSearch, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Paginator from 'react-hooks-paginator'
import { Link, useNavigate } from 'react-router-dom'
import CardBook from '../../../global/card/CardBook/CardBook'
import CardSkeleton from '../../../global/card/CardSkeleton/CardSkeleton'
import Fuse from "fuse.js";
import { BASE_URL } from '../../../../utils/config'
import axios from 'axios'
import fuzzy from "fuzzy"

const SectionCatalog = ({ setSearchTypeCatalogue, searchTitle, checkActive, books, loading, skeletonCount, typeBook, typeCatalogue, setTypeBook, setLevel, setLevelPAUD, setLevelSD, setLevelSMP, setLevelSMA, setLessonIPA, setLessonIPS, setLessonBIndonesia, setLessonBInggris, setLessonMatematika, setLessonPkn, setPopularBook }) => {
    const navigate = useNavigate()
    const pageLimit = 12;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    const [lists, setLists] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getLists = async () => {
            try {
                let response = await axios.get(`${BASE_URL}/api/catalogue/search`)
                if (response.data.error === "No Content") {
                    setLists(null);
                } else {
                    setLists(response.data.results);
                }
            } catch (err) {
                return err.message;
            }
        };
        getLists();
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

    const selectOnlyThis = (e) => {
        let id = e.target.id;
        for (var i = 1; i <= 4; i++) {
            document.getElementById("check" + i).checked = false;
        }
        document.getElementById(id).checked = true;
    }

    const searchBook = () => {
        setSearchTypeCatalogue({
            title: search,
            typeCatalogue: typeCatalogue
        })
        setSearch('')
    }

    return (
        <section id="catalog">
            <div className="container px-3 py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <h4>Buku Kurikulum <br /> Merdeka</h4>
                        {/* {
                            typeCatalogue == 'getNonTextBooks'
                                ? (
                                    <>
                                        <div className="card mt-3">
                                            <div className="card-header">
                                                TIPE BUKU
                                            </div>
                                            <div className="card-body">
                                                <div onChange={() => setTypeBook('type_pdf')} className="form-check">
                                                    <input className="form-check-input" name="type_book" type="checkbox" id="typePDF" />
                                                    <label className="form-check-label" htmlFor="typePDF">
                                                        Fiksi
                                                    </label>
                                                </div>
                                                <div onChange={() => setTypeBook('type_audio')} className="form-check">
                                                    <input className="form-check-input" name="type_book" type="checkbox" id="typeAudio" />
                                                    <label className="form-check-label" htmlFor="typeAudio">
                                                        Non Fiksi
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                                : (
                                    <> */}
                        <div className="card mt-3">
                            <div className="card-header">
                                TIPE BUKU
                            </div>
                            <div className="card-body">
                                <div onChange={() => setTypeBook('type_pdf')} className="form-check">
                                    <input className="form-check-input" checked={typeBook == 'type_pdf' && true} name="type_book" type="checkbox" id="typePDF" />
                                    <label className="form-check-label" htmlFor="typePDF">
                                        Buku PDF
                                    </label>
                                </div>
                                <div onChange={() => setTypeBook('type_audio')} className="form-check">
                                    <input className="form-check-input" checked={typeBook == 'type_audio' && true} name="type_book" type="checkbox" id="typeAudio" />
                                    <label className="form-check-label" htmlFor="typeAudio">
                                        Buku Audio
                                    </label>
                                </div>
                                <div onChange={() => setTypeBook('type_interactive')} className="form-check">
                                    <input className="form-check-input" checked={typeBook == 'type_interactive' && true} name="type_book" type="checkbox" id="typeInteractive" />
                                    <label className="form-check-label" htmlFor="typeInteractive">
                                        Buku Interaktif
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-header">
                                JENJANG
                            </div>
                            <div className="card-body">
                                <div className="form-check">
                                    <input onClick={() => setLevel('level_paud')} checked={checkActive == 'level_paud' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" type="checkbox" id="check1" />
                                    <label className="form-check-label" htmlFor="checkPAUD">
                                        PAUD
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onClick={() => setLevel('level_sd')} checked={checkActive == 'level_sd' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" type="checkbox" id="check2" />
                                    <label className="form-check-label" htmlFor="checkSD">
                                        SD/MI
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onClick={() => setLevel('level_smp')} checked={checkActive == 'level_smp' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" type="checkbox" id="check3" />
                                    <label className="form-check-label" htmlFor="checkSMP">
                                        SMP/MTS
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onClick={() => setLevel('level_sma')} checked={checkActive == 'level_sma' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" type="checkbox" id="check4" />
                                    <label className="form-check-label" htmlFor="checkSMK">
                                        SMA/MA/SMK/MAK
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-header">
                                MATA PELAJARAN
                            </div>
                            <div className="card-body overflow-auto" style={{ height: '160px' }}>
                                <div className="form-check">
                                    <input onChange={setLessonIPA} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        IPA
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={setLessonIPS} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        IPS
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={setLessonBIndonesia} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Bahasa Indonesia
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={setLessonBInggris} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Bahasa Inggris
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={setLessonMatematika} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Matematika
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={setLessonPkn} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Pendidikan Kewarganegaraan
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* </>
                                )
                        } */}
                    </div>
                    <div className="col-lg-9">
                        <div className="text-muted text-end my-4">
                            Menampilkan {currentData?.length} buku ({currentData?.length} dari {books?.length} buku)
                        </div>
                        <div className="row">
                            <div className="col-8 col-lg-8">
                                <div className="input-group shadow-sm">
                                    <span className="input-group-text bg-white"><FontAwesomeIcon className='text-muted' icon={faSearch} /></span>
                                    <input value={search} onChange={handleSearch} onKeyDown={e => e.code === 'Enter' && searchBook()} type="text" className="form-control py-2 border-start-0 border-end-0 px-1" placeholder="Cari buku disini" aria-label="Cari buku disini" />
                                    <button onClick={() => searchBook()} className="btn btn-orange" type="button">Cari</button>
                                </div>
                                {
                                    searchTitle !== null && (
                                        <div className="mt-3">Hasil pencarian dari : <strong>{searchTitle}</strong> </div>
                                    )
                                }
                                {
                                    search != '' && (
                                        <div className="card-body bg-white p-0 py-2 px-3">
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
                            <div className="col-4 col-lg-4 my-auto text-end">
                                <span className="d-none d-md-inline">Urutkan : </span>
                                <select className="form-select d-inline filter-type">
                                    <option selected onClick={() => setPopularBook('')}>Semua</option>
                                    <option onClick={() => setPopularBook('getPopularCatalogue')}>Terpopuler</option>
                                    <option value="2">Terbaru</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            {
                                loading
                                    ? [...Array(skeletonCount)].map((item, index) => {
                                        return ((<div key={index} className="col-lg-4 my-2"><CardSkeleton /></div>))
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
                                                <div key={index} className="col-lg-4 my-2">
                                                    <Link key={index} to={`/katalog/${book.slug}`} className="text-decoration-none text-dark">
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
            </div >
        </section >
    )
}

export default SectionCatalog