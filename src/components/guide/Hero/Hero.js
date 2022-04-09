import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <section id="hero" className={`bg-soft-blue ${styles.hero}`}>
            <div className="container p-3">
                <div className="row">
                    <div className="col-lg-6 order-last order-md-first my-5 my-md-auto">
                        <p className="lead"><div className="d-inline-flex flex-column"><span>BUKU UNTUK SISWA</span><span className="mt-n3 d-none d-md-block"><img src="/assets/image/home/line-title.png" alt="line title" /></span></div></p>
                        <h1 className="text-blue fw-bold">Belajar jadi lebih mudah</h1>
                        <p className="lead">Temukan buku pelajaran resmi kemendikbud disini</p>

                    </div>
                    <div className="col-lg-6">
                        <img src="/assets/image/guide/hero.png" className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero