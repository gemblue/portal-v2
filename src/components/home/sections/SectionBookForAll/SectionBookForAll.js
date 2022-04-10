import { Link } from "react-router-dom"

const SectionBookForAll = () => {
    return (
        <section className="py-4 bg-soft-blue" style={{ backgroundImage: 'url(/assets/image/home/bg-book-for-all.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
            <div className="container p-3">
                <h3>Buku untuk semua</h3>
                <p className="text-muted">This is placeholder for description</p>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-3 p-2 shadow">
                            <div className="row g-0">
                                <div className="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 20.png" className="img-fluid rounded-start mt-3 mt-3" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Siswa</h5>
                                        <p className="card-text text-muted">This is a wider card with supporting</p>
                                        <Link to="/panduan/siswa" className="card-text"><small className="text-primary">Lihat selengkapnya &#8594;</small></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 p-2 shadow">
                            <div className="row g-0">
                                <div className="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 21.png" className="img-fluid rounded-start mt-3" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Guru</h5>
                                        <p className="card-text text-muted">This is a wider card with supporting</p>
                                        <Link to="/panduan/guru" className="card-text"><small className="text-primary">Lihat selengkapnya &#8594;</small></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 p-2 shadow">
                            <div className="row g-0">
                                <div className="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 22.png" className="img-fluid rounded-start mt-3" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Orang Tua</h5>
                                        <p className="card-text text-muted">This is a wider card with supporting</p>
                                        <Link to="/panduan/orang-tua" className="card-text"><small className="text-primary">Lihat selengkapnya &#8594;</small></Link>
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

export default SectionBookForAll