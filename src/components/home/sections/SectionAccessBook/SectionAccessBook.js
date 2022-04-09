import { Link } from "react-router-dom"

const SectionAccessBook = () => {
    return (
        <section className="py-4 bg-pink" style={{ backgroundImage: 'url(/assets/image/home/bg-access-book.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
            <div className="container p-3">
                <h3>Akses buku <div className="d-inline-flex flex-column"><span>lebih mudah</span><span className="mt-n4"><img src="/assets/image/home/line-access-book.png" alt="line title" /></span></div></h3>
                <p className="text-muted">Temukan buku sesuai kebutuhanmu</p>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-3 p-2 shadow">
                            <div className="row g-0">
                                <div className="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 76.png" className="img-fluid rounded-start mt-3 mt-3" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Buku Teks K-13</h5>
                                        <p className="card-text text-muted">This is a wider card with supporting</p>
                                        <Link to="/katalog?type=getTextBooks" className="card-text"><small className="text-primary">Lihat selengkapnya &#8594;</small></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 p-2 shadow">
                            <div className="row g-0">
                                <div className="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 79.png" className="img-fluid rounded-start mt-3" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Buku Kurikulum Merdeka</h5>
                                        <p className="card-text text-muted">This is a wider card with supporting</p>
                                        <Link to="/katalog?type=getPenggerakTextBooks" className="card-text"><small className="text-primary">Lihat selengkapnya &#8594;</small></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 p-2 shadow">
                            <div className="row g-0">
                                <div className="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 80.png" className="img-fluid rounded-start mt-3" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Buku Nonteks</h5>
                                        <p className="card-text text-muted">This is a wider card with supporting</p>
                                        <Link to="/katalog?type=getNonTextBooks" className="card-text"><small className="text-primary">Lihat selengkapnya &#8594;</small></Link>
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