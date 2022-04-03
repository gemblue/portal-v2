import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

const Hero = () => {
    return (
        <section id="hero" className={`bg-soft-blue ${styles.hero}`}>
            <div className="container p-3">
                <div className="row">
                    <div className="col-lg-7 order-last order-md-first my-5 my-md-auto">
                        <h1 className="text-blue fw-bold">Buku Untuk Semua</h1>
                        <p className="lead">Akses <div className="d-inline-flex flex-column"><span>di mana pun, kapan pun,</span><span className="mt-n2"><img src="/assets/image/home/line-title.png" alt="line title" /></span></div> Baca buku yuk!</p>
                        <div class="input-group shadow mt-5">
                            <span className="input-group-text bg-white border-0"><FontAwesomeIcon className='text-muted' icon={faSearch} /></span>
                            <input type="text" class="form-control py-3 border-0 px-1" placeholder="Cari buku disini (cth: buku kelas XII)" aria-label="Cari buku disini" />
                            <button class="btn btn-white border-start border-1 dropdown-toggle px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">Buku Teks K13</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                            <div className="bg-white my-auto p-2">
                                <button class="btn btn-orange" type="button">Cari</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img src="/assets/image/home/hero.png" className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero