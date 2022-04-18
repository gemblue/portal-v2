import { faStar, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useState } from 'react'
import { set } from 'react-hook-form'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../../utils/config'

const SectionReview = ({ slug, token }) => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(0)
    const [showComment, setShowComment] = useState(false)
    const [alertLogin, setAlertLogin] = useState(false)

    const postReview = async (payload) => {

        setLoading(true)
        try {
            const response = await axios.post(`${BASE_URL}/api/review/addReview`, payload, {
                headers: {
                    Authorization: token,
                },
            })
            setSuccess(true)
            setLoading(false)
        } catch (error) {
            return error.message
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!token) {
            setAlertLogin(true)
        } else {
            setAlertLogin(false)
            const review = {
                feedback_star: rating,
                agreement: 'no',
                message: message,
                slug: slug
            }
            postReview(review)
        }
    }

    const handleClose = () => {
        setSuccess(false);
        setMessage('')
        setRating('')
    }

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
                                <button onClick={() => {setShowComment(!showComment);setSuccess(false)}} className="btn btn-outline-blue">{showComment ? 'Batal memberi ulasan' : 'Tulis ulasanmu di sini'}</button>
                            </div>
                        </div>
                    </div>
                    {
                        showComment && (
                            <>
                                {
                                    !success && (
                                        <div className="card-header p-4">
                                            {alertLogin && <div className="alert alert-warning alert-dismissible fade show">
                                                Silahkan <Link to="/login" className="text-decoration-none">login</Link> terlebih dahulu
                                                <button onClick={() => setAlertLogin(false)} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                            </div>
                                            }
                                            {
                                                loading
                                                    ? (
                                                        <div className="text-center">
                                                            <div class="spinner-border text-center" role="status">
                                                                <span class="visually-hidden">Loading...</span>
                                                            </div>
                                                        </div>
                                                    )
                                                    : (
                                                        <form onSubmit={handleSubmit}>
                                                            <textarea value={message} onChange={e => setMessage(e.target.value)} required cols="30" rows="7" className="form-control p-2" placeholder="Tulis ulasanmu di sini"></textarea>
                                                            <div className="d-flex flex-column flex-sm-row mt-3">
                                                                <div className="d-flex align-items-center">
                                                                    <small>Rating untuk buku ini :</small>
                                                                    <ReactStars
                                                                        required
                                                                        classNames={'ms-1'}
                                                                        size={15}
                                                                        count={5}
                                                                        color="#9e9e9e"
                                                                        value={rating}
                                                                        activeColor="yellow"
                                                                        a11y={true}
                                                                        emptyIcon={<FontAwesomeIcon icon={faStar} />}
                                                                        filledIcon={<FontAwesomeIcon icon={faStar} />}
                                                                        onChange={value => setRating(value)}
                                                                    />
                                                                </div>
                                                                <button type="submit" className="btn btn-sm btn-orange ms-auto mt-3 mt-sm-0">Kirim</button>

                                                            </div>
                                                        </form>
                                                    )
                                            }
                                        </div>
                                    )
                                }
                                {
                                    success && (
                                        <div className="card-header">
                                            <div onClick={() => handleClose()} className="text-end fs-5"><FontAwesomeIcon className="text-blue" icon={faXmarkCircle} size={40} style={{ cursor: 'pointer' }} /></div>
                                            <div className="text-center py-5">
                                                <img src="/assets/image/catalog/check-circle.png" alt="" />
                                                <div className="text my-2">Ulasanmu berhasil dikirim</div>
                                                <small className="text-muted">Ulasanmu akan muncul setelah proses moderasi</small>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionReview