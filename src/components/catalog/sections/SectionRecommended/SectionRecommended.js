import { Link } from 'react-router-dom'
import CardBook from '../../../global/card/CardBook/CardBook'

const SectionRecommended = () => {
    return (
        <section className="py-5">
            <div className="container p-3">
                <h4>Rekomendasi buku lainnya</h4>

                <div className="row my-3">
                    {
                        [0, 1, 2, 3, 4, 5].map((book, index) => {
                            return (
                                <div key={index} className="col-lg-3">
                                    <Link to="/catalog/Bahasa">
                                        <CardBook
                                            cover="/assets/image/home/informatika.png"
                                            title="Kelas VI Tema 8 Bumiku"
                                        />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="text-center">
                    <button className="btn btn-outline-primary">Lihat lebih banyak</button>
                </div>
            </div>
        </section>
    )
}

export default SectionRecommended