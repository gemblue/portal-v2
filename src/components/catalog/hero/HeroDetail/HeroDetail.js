import { faCircleExclamation, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroDetail = () => {
    return (
        <section>
            <div className="container p-4">
                <div className="row p-3 mb-5" style={{ background: 'url(/assets/image/catalog/Background.png)', backgroundRepeat: 'no-repeat' }}>
                    <div className="col-lg-3">
                        <img src="/assets/image/catalog/Cover.png" alt="" />
                    </div>
                    <div className="col-lg-9 pt-5 pt-md-0">
                        <button className="btn btn-sm rounded-pill btn-outline-success">Buku Audio</button>
                        <h3 className="my-3">Bahasa Indonesia Aku Bisa Untuk SD Kelas I</h3>
                        <a href="" className="btn btn-sm btn-orange py-2 me-3 my-2"><FontAwesomeIcon icon={faPlay} className="me-2" /> Putar Audio</a>
                        <a href="" className="btn btn-sm btn-outline-primary py-2">Unduh Audio</a>
                        <small className="my-3 text-muted d-block">Telah diputar 23.943 kali <Link to="/" className="text-decoration-none text-blue ms-2 fw-bold"><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</Link> jika menemukan kesalahan pada audio</small>
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
                                <small className="text-muted">Pusat Kurikulum dan Perbukuan</small>
                            </div>
                            <div className="col-lg-3 mb-2 mb-md-0">
                                <div>ISBN</div>
                                <small className="text-muted">978-129-291-212-2</small>
                            </div>
                            <div className="col-lg-3 mb-2 mb-md-0">
                                <div>Edisi</div>
                                <small className="text-muted">2018</small>
                            </div>
                            <div className="col-lg-3 mb-2 mb-md-0">
                                <div>Penulis</div>
                                <small className="text-muted">Ekawati, Anna farida</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroDetail