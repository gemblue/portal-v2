import { Link } from 'react-router-dom'
import CardBook from '../../../global/card/CardBook/CardBook'

const SectionAudioBook = () => {
    return (
        <section className="py-5">
            <div className="container p-3">
                <div className="row align-items-center">
                    <div className="col-lg-6 ">
                        <h3>Buku <div className="d-inline-flex flex-column"><span>audio</span><span className="mt-n4"><img src="/assets/image/home/line-subtitle.png" alt="line title" /></span></div></h3>
                        <p className="text-muted">Belajar lebih interaktif dan mudah dengan buku audio</p>
                    </div>
                    <div className="col-lg-6 text-end">
                        <Link to="#" className="btn btn-sm btn-outline-primary">Lihat Semua Buku Audio</Link>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-3">
                        <CardBook cover="/assets/image/home/bindo.png" title="Kelas X Buku Audio" audio={true} />
                    </div>
                    <div className="col-lg-3">
                        <CardBook cover="/assets/image/home/bindo.png" title="Kelas X Buku Audio" audio={true} />
                    </div>
                    <div className="col-lg-3">
                        <CardBook cover="/assets/image/home/informatika.png" title="Kelas X Buku Audio" audio={true} />
                    </div>
                    <div className="col-lg-3">
                        <CardBook cover="/assets/image/home/matematika.png" title="Kelas X Buku Audio" audio={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAudioBook