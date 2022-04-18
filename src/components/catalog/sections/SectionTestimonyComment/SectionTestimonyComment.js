import ReactStars from 'react-rating-stars-component'
import styles from './SectionTestimonyComment.module.scss'

const SectionTestimonyComment = ({ reviews }) => {
    return (
        <section>
            <div className="container p-3">
                {
                    reviews.map((review, index) => {
                        return (
                            <div className={`card mb-3 ${styles.card}`} key={index}>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-3 col-lg-3 text-center">
                                        <img src="/assets/image/icons/icon-avatar.png" className={`rounded-circle ${styles['img-responsive']}`} alt={review.name} />
                                    </div>
                                    <div className="col-8 col-lg-9">
                                        <div>
                                            <h6 className={`pt-4 fw-bold ${styles.username}`}>{review.name}</h6>
                                            <small>{review.message == " " ? (<i>Tidak ada komentar</i>) : review.message == "" ? (<i>Tidak ada komentar</i>) : review.message}</small>
                                            <div className="me-4 my-2">
                                                <ReactStars classNames="ms-auto" count={5} size={25} value={review.feedback_star} edit={false} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default SectionTestimonyComment