import { Link } from "react-router-dom"
import CardBook from "../../../global/card/CardBook/CardBook"

const SectionPopularBook = () => {
    return (
        <section className="py-5">
            <div className="container p-3">
                <div className="row align-items-center">
                    <div className="col-lg-6 ">
                        <h3>Buku <div className="d-inline-flex flex-column"><span>terpopuler</span><span className="mt-n4"><img src="/assets/image/home/line-populer.png" alt="line title" /></span></div></h3>
                        <p className="text-muted">Jelajahi buku populer dari pusat perbukuan resmi</p>
                    </div>
                    <div className="col-lg-6 text-end">
                        <Link to="#" className="btn btn-sm btn-outline-primary">Lihat Semua Buku</Link>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-3">
                        <CardBook cover="/assets/image/home/bindo.png" title="Kelas VI Tema 8 Bumiku" />
                    </div>
                    <div className="col-lg-3">
                        <CardBook cover="/assets/image/home/bindo.png" title="Kelas VI Tema 8 Bumiku" />
                    </div>
                    <div className="col-lg-3">
                        <CardBook cover="/assets/image/home/informatika.png" title="Kelas VI Tema 8 Bumiku" />
                    </div>
                    <div className="col-lg-3">
                        <CardBook cover="/assets/image/home/matematika.png" title="Kelas VI Tema 8 Bumiku" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionPopularBook