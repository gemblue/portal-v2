import { faCircleExclamation, faFile, faFileAudio, faFilePdf, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import Modal from '../../modal/Modal'

const HeroDetail = ({ loading, image, bookType, title, publisher, isbn, edition, writer, attachment, totalDownload, totalRead }) => {
    return (
        <section>
            <div className="container p-4">
                <div className="row p-3 mb-5" style={{ background: 'url(/assets/image/catalog/Background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'right' }}>
                    {
                        loading && (
                            <>
                                <div className="col-lg-3">
                                    <Skeleton count={1} height={300} />
                                </div>
                                <div className="col-lg-9 pt-5 pt-md-4">
                                    <Skeleton count={6} height={25} className="mb-2 mt-2" />
                                </div>
                            </>
                        )
                    }
                    {
                        !loading && (
                            <>
                                <div className="col-lg-3">
                                    <img src={image} className="w-100" alt="" />
                                </div>
                                <div className="col-lg-9 pt-5 pt-md-0">
                                    <button className="btn btn-sm rounded-pill btn-outline-success">{bookType}</button>
                                    <h3 className="my-3">{title}</h3>

                                    {/* Handle type book PDF */}
                                    {
                                        bookType === 'pdf' && (
                                            <>
                                                <a href={attachment} className="btn btn-sm btn-orange py-2 me-3 my-2" rel="noreferrer" target="_blank" download="file.pdf">
                                                    <FontAwesomeIcon icon={faFilePdf} className="me-1" /> Unduh PDF
                                                </a>
                                                <button
                                                    className="btn btn-sm btn-outline-primary py-2"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#readModal"
                                                >
                                                    <FontAwesomeIcon icon={faFilePdf} className="me-1" /> Baca Online
                                                </button>
                                                <small className="my-3 text-muted d-block">Telah diunduh {totalDownload.toLocaleString()} kali <Link to="/" className="text-decoration-none text-blue ms-2 fw-bold"><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</Link> jika menemukan kesalahan pada buku</small>
                                            </>
                                        )
                                    }

                                    {/* Handle book type audio */}
                                    {
                                        bookType === 'audio' && (
                                            <>
                                                <a href="#audioPlayer" className="btn btn-sm btn-orange py-2 me-3 my-2"><FontAwesomeIcon icon={faPlay} className="me-2" /> Putar Audio</a>
                                                <a href={attachment} className="btn btn-sm btn-outline-primary py-2" target="_blank" rel="noreferrer" download="file.pdf">
                                                    <FontAwesomeIcon icon={faFileAudio} className="me-1" /> Unduh Audio
                                                </a>
                                                <small className="my-3 text-muted d-block">Telah diputar {totalRead.toLocaleString()} kali <Link to="/" className="text-decoration-none text-blue ms-2 fw-bold"><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</Link> jika menemukan kesalahan pada audio</small>
                                            </>
                                        )
                                    }

                                    {/* Handle book type interactive */}
                                    {
                                        bookType === 'interactive' && (
                                            <>
                                                <a href={attachment} className="btn btn-sm btn-orange py-2 me-3 my-2"><FontAwesomeIcon icon={faFile} className="me-2" />Baca Buku Interaktif</a>
                                                <small className="my-3 text-muted d-block">Telah diunduh {totalDownload.toLocaleString()} kali <Link to="/" className="text-decoration-none text-blue ms-2 fw-bold"><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</Link> jika menemukan kesalahan pada naskah</small>
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
                                            {publisher === "" && <small className="text-muted fst-italic">Belum ada penerbit</small>}
                                            {publisher !== "" && <small className="text-muted">{publisher}</small>}
                                        </div>
                                        <div className="col-lg-3 mb-2 mb-md-0">
                                            <div>ISBN</div>
                                            {isbn === "" && <small className="text-muted fst-italic">Belum ada ISBN</small>}
                                            {isbn !== "" && <small className="text-muted">{isbn}</small>}
                                        </div>
                                        <div className="col-lg-3 mb-2 mb-md-0">
                                            <div>Edisi</div>
                                            {edition === "" || edition === null && <small className="text-muted fst-italic">Belum ada edisi</small>}
                                            {edition !== "" && <small className="text-muted">{edition}</small>}
                                        </div>
                                        <div className="col-lg-3 mb-2 mb-md-0">
                                            <div>Penulis</div>
                                            {writer === "" && <small className="text-muted fst-italic">Belum ada penulis</small>}
                                            {writer !== "" && <small className="text-muted">{writer}</small>}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
            <Modal id="readModal" title={title}>
                <object
                    type="application/pdf"
                    data={attachment}
                    width="100%"
                    height="800"
                    aria-label={title}
                >
                    <p>Silahkan klik tombol unduh untuk membaca</p>
                    <a className="btn btn-light" href={attachment}><i className="fas fa-fw fa-download" /> Unduh</a>
                </object>
            </Modal>
        </section>
    )
}

export default HeroDetail