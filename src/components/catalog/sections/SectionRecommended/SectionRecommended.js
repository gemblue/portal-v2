import { Link } from 'react-router-dom'
import CardBook from '../../../global/card/CardBook/CardBook'
import CardSkeleton from '../../../global/card/CardSkeleton/CardSkeleton'

const SectionRecommended = ({ recommendBooks, loading }) => {
    return (
        <section className="py-5">
            <div className="container p-3">
                <h4>Rekomendasi buku lainnya</h4>

                <div className="row my-3">
                    {
                        loading
                            ? [...Array(8)].map((item, index) => {
                                return ((<div key={index} className="col-lg-4 my-2"><CardSkeleton /></div>))
                            })
                            : recommendBooks?.map((book, index) => {
                                return (
                                    <div key={index} className="col-lg-3 my-2">
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

                {/* <div className="text-center">
                    <button className="btn btn-outline-primary">Lihat lebih banyak</button>
                </div> */}
            </div>
        </section>
    )
}

export default SectionRecommended