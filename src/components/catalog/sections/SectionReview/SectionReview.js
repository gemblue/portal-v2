import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useState } from 'react'
import { set } from 'react-hook-form'
import ReactStars from 'react-rating-stars-component'
import { BASE_URL } from '../../../../utils/config'

const SectionReview = ({ slug }) => {
    const token = localStorage.getItem('user_token')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(0)
    const [showComment, setShowComment] = useState(false)

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

        const review = {
            feedback_star: rating,
            agreement: 'no',
            message: message,
            slug: slug
        }
        postReview(review)
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
                                <button onClick={() => setShowComment(!showComment)} className="btn btn-outline-primary">{showComment ? 'Batal memberi ulasan' : 'Tulis ulasanmu di sini'}</button>
                            </div>
                        </div>
                    </div>
                    {
                        showComment && (
                            <>
                                {
                                    !success && (
                                        <div className="card-header p-4">
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
                                                            <textarea value={message} onChange={e => setMessage(e.target.value)} cols="30" rows="7" className="form-control p-2" placeholder="Tulis ulasanmu di sini"></textarea>
                                                            <div className="d-flex flex-column flex-sm-row mt-3">
                                                                <div className="d-flex align-items-center">
                                                                    <small>Rating untuk buku ini :</small>
                                                                    <ReactStars
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
                                                                <button type="submit" className="btn btn-sm btn-orange ms-auto mt-3 mt-sm-0">Submit</button>
                                                            </div>
                                                        </form>
                                                    )
                                            }
                                        </div>
                                    )
                                }
                                {
                                    success && (
                                        <div className="card-header py-5 text-center">
                                            <img src="/assets/image/catalog/check-circle.png" alt="" />
                                            <div className="text my-2">Ulasanmu berhasil dikirim</div>
                                            <small className="text-muted">Ulasanmu akan muncul setelah proses moderasi</small>
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