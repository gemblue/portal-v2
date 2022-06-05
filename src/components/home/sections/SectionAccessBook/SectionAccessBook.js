import { Link } from "react-router-dom"

const SectionAccessBook = () => {
    return (
        <section id="accessBook" className=" py-2 bg-pink" style={{ backgroundImage: 'url(/assets/image/home/bg-access-book.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
            <div className="container p-3">
                <h3 className="fw-bold">Akses buku <div className="d-inline-flex flex-column"><span>lebih mudah</span><span className="mt-n4"><img src="/assets/image/home/line-access-book.png" className="line-access w-100" alt="line title" /></span></div></h3>
                <p className="mt-n4 text-access-book">Temukan buku sesuai kebutuhanmu</p>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-3 p-2 shadow" style={{ height: '90%' }}>
                            <div className="row g-0">
                                <div className="col-md-3 text-center ps-lg-2">
                                    <img src="/assets/image/home/Group 79.png" className="img-fluid rounded-start mt-3" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body px-3">
                                        <div className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Buku Kurikulum Merdeka</div>
                                        <p className="card-text text-muted">Buku teks pelajaran terbitan tahun 2021</p>
                                        <Link to="/katalog/buku-kurikulum-merdeka" className="card-text text-decoration-none"><small className="text-blue">Lihat selengkapnya &#8594;</small></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 p-2 shadow" style={{ height: '90%' }}>
                            <div className="row g-0">
                                <div className="col-md-3 text-center ps-lg-2">
                                    <img src="/assets/image/home/Group 76.png" className="img-fluid rounded-start mt-3 mt-3" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body px-3">
                                        <div className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Buku Teks K-13</div>
                                        <p className="card-text text-muted">Buku teks pelajaran terbitan tahun 2013</p>
                                        <Link to="/katalog/buku-teks-k13" className="card-text text-decoration-none"><small className="text-blue">Lihat selengkapnya &#8594;</small></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 p-2 shadow" style={{ height: '90%' }}>
                            <div className="row g-0">
                                <div className="col-md-3 text-center px-lg-2">
                                    <img src="/assets/image/home/Group 80.png" className="img-fluid rounded-start mt-3" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body px-3">
                                        <div className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Buku Nonteks</div>
                                        <p className="card-text text-muted">Buku umum sebagai pelengkap belajarmu</p>
                                        <Link to="/katalog/buku-non-teks" className="card-text text-decoration-none"><small className="text-blue">Lihat selengkapnya &#8594;</small></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAccessBook