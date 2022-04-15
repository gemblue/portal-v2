import { faCheck, faCircleExclamation, faFile, faFileAudio, faFilePdf, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { BASE_URL } from '../../../../utils/config'
import Modal from '../../modal/Modal'
import styles from './HeroDetail.module.scss'

const HeroDetail = ({ loading, image, slug, bookType, title, publisher, isbn, edition, writer, attachment, totalDownload, totalRead }) => {
    const token = localStorage.getItem('user_token');
    const [loadingReport, setLoadingReport] = useState(false)
    const [successReview, setSuccessReview] = useState(false)
    const { resetField, register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        setLoadingReport(true)
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
                setSuccessReview(true)
                resetField('message')
            }
        } catch (error) {
            return error.message
        } finally {
            setLoadingReport(false)
        }
    }

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
                                                <small className="my-3 text-muted d-block">Telah diunduh {totalDownload.toLocaleString()} kali <a data-bs-toggle="modal" data-bs-target="#exampleModal" className="text-decoration-none text-blue ms-2 fw-bold" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</a> jika menemukan kesalahan pada buku</small>
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
                                                <small className="my-3 text-muted d-block">Telah diputar {totalRead.toLocaleString()} kali <a data-bs-toggle="modal" data-bs-target="#exampleModal" className="text-decoration-none text-blue ms-2 fw-bold" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</a> jika menemukan kesalahan pada audio</small>
                                            </>
                                        )
                                    }

                                    {/* Handle book type interactive */}
                                    {
                                        bookType === 'interactive' && (
                                            <>
                                                <a href={attachment} className="btn btn-sm btn-orange py-2 me-3 my-2"><FontAwesomeIcon icon={faFile} className="me-2" />Baca Buku Interaktif</a>
                                                <small className="my-3 text-muted d-block">Telah diunduh {totalDownload.toLocaleString()} kali <a data-bs-toggle="modal" data-bs-target="#exampleModal" className="text-decoration-none text-blue ms-2 fw-bold" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faCircleExclamation} /> Lapor disini</a> jika menemukan kesalahan pada naskah</small>
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
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content bg-">
                        <div class="modal-header bg-warning">
                            <h5 class="modal-title" id="exampleModalLabel"><FontAwesomeIcon icon={faCircleExclamation} /> Laporkan Buku</h5>
                            <button onClick={() => setSuccessReview(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="modal-body bg-soft-grey">
                                {successReview && <div className="alert alert-success">Laporan berhasil dikirim <FontAwesomeIcon className="ms-1" icon={faCheck} /></div>}
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="kategori">Kategori</label>
                                    <select {...register('category', { required: true })} id="kategori" className="form-select">
                                        <option value="Sara">Sara</option>
                                        <option value="Salah Cetak">Salah Cetak</option>
                                        <option value="Plagiasi">Plagiasi</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea {...register('message', { required: true })} className="form-control" rows="3" placeholder="Pesan"></textarea>
                                    {errors.message && errors.message.type === 'required' && <small className="text-danger">Pesan laporan harus diisi</small>}
                                </div>
                            </div>
                            <div class="modal-footer bg-soft-grey">
                                {
                                    loadingReport
                                        ? (<button type="button" class="btn btn-primary disabled btn-sm"><div class="spinner-border" role="status"></div></button>)
                                        : (<button type="submit" class="btn rounded-pill bg-blue text-white">Kirim</button>)
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroDetail