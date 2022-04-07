import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import ReactStars from 'react-rating-stars-component'

const SectionReview = () => {
    const [showComment, setShowComment] = useState(false)
    return (
        <section>
            <div className="container p-3">
                <h4>Ulasan Pembaca</h4>
                <div className="card border-0">
                    <div className="card-header p-4">
                        <div className="row">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <img src="/assets/image/catalog/Group 73.png" className="me-2" alt="" />
                                    <span>Belum ada ulasan dari pembaca</span>
                                </div>
                            </div>
                            <div className="col-6 text-end">
                                <button onClick={() => setShowComment(!showComment)} className="btn btn-outline-primary">{showComment ? 'Batal memberi ulasan' : 'Tulis ulasanmu di sini'}</button>
                            </div>
                        </div>
                    </div>
                    {
                        showComment && (
                            <div className="card-header p-4">
                                <textarea cols="30" rows="7" className="form-control p-2" placeholder="Tulis ulasanmu di sini"></textarea>
                                <div className="d-flex flex-column flex-sm-row mt-3">
                                    <div className="d-flex align-items-center">
                                        <small>Rating untuk buku ini :</small>
                                        <ReactStars
                                            classNames={'ms-1'}
                                            size={15}
                                            count={5}
                                            color="#9e9e9e"
                                            activeColor="yellow"
                                            value={0}
                                            a11y={true}
                                            emptyIcon={<FontAwesomeIcon icon={faStar} />}
                                            filledIcon={<FontAwesomeIcon icon={faStar} />}
                                        />
                                    </div>
                                    <button className="btn btn-sm btn-orange ms-auto mt-3 mt-sm-0">Submit</button>
                                </div>
                            </div>
                            // <div className="card-header py-5 text-center">
                            //     <img src="/assets/image/catalog/check-circle.png" alt="" />
                            //     <div className="text my-2">Ulasanmu berhasil dikirim</div>
                            //     <small className="text-muted">Ulasanmu akan muncul setelah proses moderasi</small>
                            // </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionReview