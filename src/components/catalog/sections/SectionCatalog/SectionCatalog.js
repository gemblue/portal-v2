import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CardBook from '../../../global/card/CardBook/CardBook'
import CardSkeleton from '../../../global/card/CardSkeleton/CardSkeleton'

const SectionCatalog = ({ books, loading, setLimit, skeletonCount, typeBook, setTypeBook, setLevelSD, setLevelSMP, setLevelSMA, setLessonIPA, setLessonIPS, setLessonBIndonesia, setLessonBInggris, setLessonMatematika, setLessonPkn }) => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <section>
            <div className="container px-3 py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <h4>Buku Kurikulum Merdeka</h4>
                        <div className="card mt-3">
                            <div className="card-header">
                                TIPE BUKU
                            </div>
                            <div className="card-body">
                                <div onChange={() => setTypeBook('type_pdf')} className="form-check">
                                    <input className="form-check-input" checked={typeBook == 'type_pdf' && true} name="type_book" type="radio" id="typePDF" />
                                    <label className="form-check-label" htmlFor="typePDF">
                                        Buku PDF
                                    </label>
                                </div>
                                <div onChange={() => setTypeBook('type_audio')} className="form-check">
                                    <input className="form-check-input" checked={typeBook == 'type_audio' && true} name="type_book" type="radio" id="typeAudio" />
                                    <label className="form-check-label" htmlFor="typeAudio">
                                        Buku Audio
                                    </label>
                                </div>
                                <div onChange={() => setTypeBook('type_interactive')} className="form-check">
                                    <input className="form-check-input" checked={typeBook == 'type_interactive' && true} name="type_book" type="radio" id="typeInteractive" />
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
                                    <input className="form-check-input" type="checkbox" value="" id="checkPAUD" />
                                    <label className="form-check-label" htmlFor="checkPAUD">
                                        PAUD
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onClick={setLevelSD} className="form-check-input" type="checkbox" value="" id="checkSD" />
                                    <label className="form-check-label" htmlFor="checkSD">
                                        SD/MI
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onClick={setLevelSMP} className="form-check-input" type="checkbox" value="" id="checkSMP" />
                                    <label className="form-check-label" htmlFor="checkSMP">
                                        SMP/MTS
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onClick={setLevelSMA} className="form-check-input" type="checkbox" value="" id="checkSMK" />
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
                    </div>
                    <div className="col-lg-9">
                        <div className="text-muted text-end my-4">
                            Menampilkan {books.length} buku ({books.length} dari 2234 buku)
                        </div>
                        <div className="row">
                            <div className="col-8 col-lg-8">
                                <div className="input-group shadow-sm">
                                    <span className="input-group-text bg-white"><FontAwesomeIcon className='text-muted' icon={faSearch} /></span>
                                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="form-control py-2 border-start-0 border-end-0 px-1" placeholder="Cari buku disini (cth: buku kelas XII)" aria-label="Cari buku disini" />
                                    <button className="btn btn-orange" type="button">Cari</button>
                                </div>
                            </div>
                            <div className="col-4 col-lg-4 my-auto text-end">
                                <div className="dropdown">
                                    <span className="d-none d-md-inline">Urutkan : </span>
                                    <button className="btn btn-outline-white dropdown-toggle px-3 py-2 ms-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Terbaru
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><button className="dropdown-item">Terpopuler</button></li>
                                        <li><button className="dropdown-item">Another action</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                loading
                                    ? [...Array(skeletonCount)].map((item, index) => {
                                        return ((<div key={index} className="col-lg-4 my-2"><CardSkeleton /></div>))
                                    })
                                    : books.filter(value => {
                                        if (value.title.toLowerCase().includes(searchValue.toLowerCase())) {
                                            return value;
                                        }
                                    }).map((book, index) => {
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
                        <div className="text-center mt-4">
                            <button onClick={() => setLimit()} className="btn btn-primary rounded-pill">Load more</button>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default SectionCatalog