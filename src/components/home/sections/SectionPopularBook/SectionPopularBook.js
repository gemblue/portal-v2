import { Link } from "react-router-dom"
import CardBook from "../../../global/card/CardBook/CardBook";
import CardSkeleton from "../../../global/card/CardSkeleton/CardSkeleton"

const SectionPopularBook = ({ loading, popularBooks }) => {
    return (
        <section className="py-5">
            <div className="container p-3">
                <div className="row align-items-center">
                    <div className="col-lg-6 ">
                        <h3>Buku <div className="d-inline-flex flex-column"><span>terpopuler</span><span className="mt-n3"><img src="/assets/image/home/line-populer.png" alt="line title" /></span></div></h3>
                        <p className="text-muted">Jelajahi buku populer dari pusat perbukuan resmi</p>
                    </div>
                    <div className="col-lg-6 text-end">
                        <Link to="/katalog" className="btn btn-sm btn-outline-primary">Lihat Semua Buku</Link>
                    </div>
                </div>
                <div className="row mt-4">
                    {
                        loading
                            ? [0, 1, 2, 3].map((item, index) => {
                                return (
                                    <div className="col-lg-3"><CardSkeleton /></div>
                                )
                            })
                            : popularBooks.map((book, index) => {
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
            </div>
        </section>
    )
}

export default SectionPopularBook