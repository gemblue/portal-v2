import { faCheck, faCircleExclamation, faDownload, faFile, faFileAudio, faFilePdf, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../../utils/config'
import Modal from '../../modal/Modal'
import styles from './HeroDetail.module.scss'
import { Modal as modal } from 'bootstrap'

const HeroDetail = ({ id, token, image, slug, bookType, title, publisher, isbn, edition, writer, attachment, totalDownload, totalRead }) => {
    const [loading, setLoading] = useState(false)
    const [failedReview, setFailedReview] = useState(false)
    const [successReview, setSuccessReview] = useState(false)
    const { resetField: resetFieldReport, register: registerReport, handleSubmit: handleSubmitReport, formState: { errors: errorsReport } } = useForm();
    const { resetField: resetFieldDownload, register: registerDownload, handleSubmit: handleSubmitDownload, formState: { errors: errorsDownload } } = useForm();

    const onSubmitReport = async (data) => {
        setLoading(true)
        const payload = {
            message: data.message,
            slug: slug,
            category: data.category
        }

        try {
            const response = await axios.post(`${BASE_URL}/api/report/addReport`, JSON.stringify(payload), {
                headers: {
                    Authorization: token,
                },
            })
            if (response.data.status == 'success') {
                setFailedReview(false)
                setSuccessReview(true)
                resetFieldReport('message')
            }
        } catch (error) {
            setSuccessReview(false)
            setFailedReview(true)
            return error.message
        } finally {
            setLoading(false)
        }
    }
    const onSubmitDownload = async (data) => {
        setLoading(true)

        try {
            const response = await axios.post(`${BASE_URL}/api/download/submit`, JSON.stringify(data))
            if (response.data.status == 'success') {
                resetFieldDownload('message')
                window.location.replace(attachment)
            }
        } catch (error) {
            setSuccessReview(false)
            setFailedReview(true)
            return error.message
        } finally {
            setLoading(false)
        }
    }

    const pushLog = async (type) => {
        if (token) {
            const payload = {
                slug: slug,
                activity: type
            }

            const convertRAW = JSON.stringify(payload)

            try {
                const response = await axios.post(`${BASE_URL}/api/statistic/push`, convertRAW, {
                    headers: {
                        Authorization: token,
                    },
                })
                if (response.data.status == 'success') {
                    console.log('log pushed');
                }
            } catch (error) {
                console.log('failed log pushed');
            }
        }
    }

    const handleLogin = () => {
        modal.hide()
    }

    return (
        <section>
            <div className="container p-4">
                <div className="row p-3 mb-5" style={{ background: 'url(/assets/image/catalog/Background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'right', borderRadius: '15px' }}>
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
                                <div className="col-lg-3 text-center d-flex align-items-center justify-content-center">
                                    <img src={image || '/assets/image/catalog/book-placeholder.jpg'} className={styles['img-size']} alt="" />
                                </div>
                                <div className="col-lg-9 pt-5 pt-md-0">
                                    {bookType == 'pdf' && <button className="btn btn-sm rounded-pill btn-outline-danger">Buku PDF</button>}
                                    {bookType == 'audio' && <button className="btn btn-sm rounded-pill btn-outline-success">Buku Audio</button>}
                                    {bookType == 'interactive' && <button className="btn btn-sm rounded-pill btn-outline-primary">Buku Interaktif</button>}

                                    <h3 className="my-3">{title}</h3>

                                    {/* Handle type book PDF */}
                                    {
                                        bookType === 'pdf' && (
                                            <>
                                                {
                                                    !token ? (
                                                        <button className="btn btn-sm btn-orange py-2 me-3 my-2" data-bs-toggle="modal" data-bs-target="#downloadModal">
                                                            <FontAwesomeIcon icon={faFilePdf} className="me-1" /> Unduh PDF
                                                        </button>

                                                    )
                                                        : (
                                                            <a onClick={() => pushLog('download')} href={attachment} className="btn btn-sm btn-orange py-2 me-3 my-2" rel="noreferrer" target="_blank" download="file.pdf">
                                                                <FontAwesomeIcon icon={faFilePdf} className="me-1" /> Unduh PDF
                                                            </a>

                                                        )
                                                }
                                                <button
                                                    onClick={() => pushLog('read')}
                                                    className="btn btn-sm btn-outline-primary py-2"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#readModal"
                                                >
                                                    <FontAwesomeIcon icon={faFilePdf} className="me-1" /> Baca Online
                                                </button>
                                                <small className="my-3 text-muted d-block">Telah diunduh {totalDownload.toLocaleString()} kali <a data-bs-toggle="modal" data-bs-target="#reportModal" className="text-decoration-none text-blue ms-2 fw-bold" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</a> jika menemukan kesalahan pada buku</small>
                                            </>
                                        )
                                    }

                                    {/* Handle book type audio */}
                                    {
                                        bookType === 'audio' && (
                                            <>
                                                <a onClick={() => pushLog('play')} href="#audioPlayer" className="btn btn-sm btn-orange py-2 me-3 my-2"><FontAwesomeIcon icon={faPlay} className="me-2" /> Putar Audio</a>
                                                <a onClick={() => pushLog('download')} href={attachment} className="btn btn-sm btn-outline-primary py-2" target="_blank" rel="noreferrer" download="file.pdf">
                                                    <FontAwesomeIcon icon={faFileAudio} className="me-1" /> Unduh PDF
                                                </a>
                                                <small className="my-3 text-muted d-block">Telah diputar {totalRead.toLocaleString()} kali <a data-bs-toggle="modal" data-bs-target="#reportModal" className="text-decoration-none text-blue ms-2 fw-bold" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</a> jika menemukan kesalahan pada audio</small>
                                            </>
                                        )
                                    }

                                    {/* Handle book type interactive */}
                                    {
                                        bookType === 'interactive' && (
                                            <>
                                                <a onClick={() => pushLog('read')} href={attachment} target="_blank" rel="noreferrer" className="btn btn-sm btn-orange py-2 me-3 my-2"><FontAwesomeIcon icon={faFile} className="me-2" />Baca Buku Interaktif</a>
                                                <small className="my-3 text-muted d-block">Telah diunduh {totalDownload.toLocaleString()} kali <a data-bs-toggle="modal" data-bs-target="#reportModal" className="text-decoration-none text-blue ms-2 fw-bold" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</a> jika menemukan kesalahan pada naskah</small>
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
            <div className="modal fade" id="reportModal" tabindex="-1" aria-labelledby="reportModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-">
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title" id="reportModalLabel"><FontAwesomeIcon icon={faCircleExclamation} /> Laporkan Buku</h5>
                            <button onClick={() => { setSuccessReview(false); setFailedReview(false) }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmitReport(onSubmitReport)}>
                            <div className="modal-body bg-soft-grey">
                                {failedReview && <div className="alert alert-warning">Silahkan <Link to="/login" onClick={() => handleLogin()} className="text-decoration-none">login</Link> terlebih dahulu.</div>}
                                {successReview && <div className="alert alert-success">Laporan berhasil dikirim <FontAwesomeIcon className="ms-1" icon={faCheck} /></div>}
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="kategori">Kategori</label>
                                    <select {...registerReport('category', { required: true })} id="kategori" className="form-select">
                                        <option value="Sara">Sara</option>
                                        <option value="Salah Cetak">Salah Cetak</option>
                                        <option value="Plagiasi">Plagiasi</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea {...registerReport('message', { required: true })} className="form-control" rows="3" placeholder="Pesan"></textarea>
                                    {errorsReport.message && errorsReport.message.type === 'required' && <small className="text-danger">Pesan laporan harus diisi</small>}
                                </div>
                            </div>
                            <div className="modal-footer bg-soft-grey">
                                {
                                    loading
                                        ? (<button type="button" className="btn btn-primary disabled btn-sm"><div className="spinner-border" role="status"></div></button>)
                                        : (<button type="submit" className="btn rounded-pill bg-blue text-white">Kirim</button>)
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="downloadModal" tabindex="-1" aria-labelledby="downloadModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-">
                        <div className="modal-header bg-light text-white">
                            <button onClick={() => { setSuccessReview(false); setFailedReview(false) }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmitDownload(onSubmitDownload)}>
                            <div className="modal-body bg-soft-grey">
                                <p>Mohon isi data dibawah ini sebelum mengunduh buku :</p>
                                <input type="hidden" {...registerDownload('download_file')} value={id} />
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="name">Nama</label>
                                    <input id="name" type="text" {...registerDownload('name', { required: true })} className="form-control" placeholder="Masukan nama" />
                                    {errorsDownload.name && errorsDownload.name.type === 'required' && <small className="text-danger">Nama harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input type="email" id="email" {...registerDownload('email', { required: true })} className="form-control" placeholder="Masukan email" />
                                    {errorsDownload.email && errorsDownload.email.type === 'required' && <small className="text-danger">Email harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="phone">Nomor HP</label>
                                    <input id="phone" type="text" {...registerDownload('phone', { required: true })} className="form-control" placeholder="Masukan nomor HP" />
                                    {errorsDownload.phone && errorsDownload.phone.type === 'required' && <small className="text-danger">Nomor HP harus diisi</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="city">Kota</label>
                                    <input id="city" type="text" {...registerDownload('city', { required: true })} className="form-control" placeholder="Masukan kota" />
                                    {errorsDownload.city && errorsDownload.city.type === 'required' && <small className="text-danger">Asal kota harus diisi</small>}
                                </div>
                            </div>
                            <div className="modal-footer bg-soft-grey">
                                {
                                    loading
                                        ? (<button type="button" className="btn btn-primary disabled btn-sm"><div className="spinner-border" role="status"></div></button>)
                                        : (<button type="submit" className="btn rounded-pill bg-blue text-white">Kirim dan Unduh</button>)
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroDetail