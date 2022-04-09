import { faCircleExclamation, faFile, faFileAudio, faFilePdf, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroDetail = ({ image, bookType, title, publisher, isbn, edition, writer, attachment }) => {
    return (
        <section>
            <div className="container p-4">
                <div className="row p-3 mb-5" style={{ background: 'url(/assets/image/catalog/Background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'right' }}>
                    <div className="col-lg-3">
                        <img src={image} className="w-100" alt="" />
                    </div>
                    <div className="col-lg-9 pt-5 pt-md-0">
                        <button className="btn btn-sm rounded-pill btn-outline-success">{bookType}</button>
                        <h3 className="my-3">{title}</h3>

                        {/* Handle type book PDF */}
                        {
                            bookType == 'pdf' && (
                                <>
                                    <a href={attachment} className="btn btn-sm btn-orange py-2 me-3 my-2" target="_blank" download="file.pdf">
                                        <FontAwesomeIcon icon={faFilePdf} className="me-1" /> Unduh PDF
                                    </a>
                                    <a href={attachment} className="btn btn-sm btn-outline-primary py-2" target="_blank" download="file.pdf">
                                        <FontAwesomeIcon icon={faFilePdf} className="me-1" /> Baca Online
                                    </a>
                                    <small className="my-3 text-muted d-block">Telah diunduh 23.943 kali <Link to="/" className="text-decoration-none text-blue ms-2 fw-bold"><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</Link> jika menemukan kesalahan pada buku</small>
                                </>
                            )
                        }

                        {/* Handle book type audio */}
                        {
                            bookType == 'audio' && (
                                <>
                                    <button className="btn btn-sm btn-orange py-2 me-3 my-2"><FontAwesomeIcon icon={faPlay} className="me-2" /> Putar Audio</button>
                                    <a href={attachment} className="btn btn-sm btn-outline-primary py-2" target="_blank" download="file.pdf">
                                        <FontAwesomeIcon icon={faFileAudio} className="me-1" /> Unduh Audio
                                    </a>
                                    <small className="my-3 text-muted d-block">Telah diputar 23.943 kali <Link to="/" className="text-decoration-none text-blue ms-2 fw-bold"><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</Link> jika menemukan kesalahan pada audio</small>
                                </>
                            )
                        }

                        {/* Handle book type interactive */}
                        {
                            bookType == 'interactive' && (
                                <>
                                    <button className="btn btn-sm btn-orange py-2 me-3 my-2"><FontAwesomeIcon icon={faFile} className="me-2" />Baca Buku Interaktif</button>
                                    <small className="my-3 text-muted d-block">Telah diputar 23.943 kali <Link to="/" className="text-decoration-none text-blue ms-2 fw-bold"><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</Link> jika menemukan kesalahan pada naskah</small>
                                </>
                            )
                        }

                        <div className="row align-items-center mb-3">
                            <div className="col-6 col-lg-2">
                                <span>DETAIL BUKU</span>
                            </div>
                            <div className="col-5 col-lg-10 p-0">
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 mb-2 mb-md-0">
                                <div>Penerbit</div>
                                {publisher == "" && <small className="text-muted fst-italic">Belum ada penerbit</small>}
                                {publisher != "" && <small className="text-muted">{publisher}</small>}
                            </div>
                            <div className="col-lg-3 mb-2 mb-md-0">
                                <div>ISBN</div>
                                {isbn == "" && <small className="text-muted fst-italic">Belum ada ISBN</small>}
                                {isbn != "" && <small className="text-muted">{isbn}</small>}
                            </div>
                            <div className="col-lg-3 mb-2 mb-md-0">
                                <div>Edisi</div>
                                {edition == "" || edition == null && <small className="text-muted fst-italic">Belum ada edisi</small>}
                                {edition != "" && <small className="text-muted">{edition}</small>}
                            </div>
                            <div className="col-lg-3 mb-2 mb-md-0">
                                <div>Penulis</div>
                                {writer == "" && <small className="text-muted fst-italic">Belum ada penulis</small>}
                                {writer != "" && <small className="text-muted">{writer}</small>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroDetail