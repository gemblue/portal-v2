import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import CardBook from '../../../global/card/CardBook/CardBook'
import CardSkeleton from '../../../global/card/CardSkeleton/CardSkeleton'

const SectionCatalog = ({ books, loading, setLimit, skeletonCount, setTypeBook }) => {
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
                                <div className="form-check">
                                    <input onChange={() => setTypeBook('type_pdf')} className="form-check-input" name="type_book" type="radio" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Buku PDF
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={() => setTypeBook('type_audio')} className="form-check-input" name="type_book" type="radio" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Buku Audio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={() => setTypeBook('type_interactive')} className="form-check-input" name="type_book" type="radio" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
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
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        PAUD
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        SD/MI
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        SMP/MTS
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
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
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        IPA
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        IPS
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Bahasa Indonesia
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Bahasa Inggris
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Matematika
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Pendidikan Kewarganegaraan
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="text-muted text-end my-4">
                            Menampilkan 2234 buku (12 dari 2234 buku)
                        </div>
                        <div className="row">
                            <div className="col-8 col-lg-8">
                                <div className="input-group shadow-sm">
                                    <span className="input-group-text bg-white"><FontAwesomeIcon className='text-muted' icon={faSearch} /></span>
                                    <input type="text" className="form-control py-2 border-start-0 border-end-0 px-1" placeholder="Cari buku disini (cth: buku kelas XII)" aria-label="Cari buku disini" />
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
                                    : books.map((book, index) => {
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