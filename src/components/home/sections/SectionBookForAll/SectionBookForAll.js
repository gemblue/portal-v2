import { Link } from "react-router-dom"

const SectionBookForAll = () => {
    return (
        <section className="py-4 bg-soft-blue" style={{ backgroundImage: 'url(/assets/image/home/bg-book-for-all.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
            <div className="container px-3 py-lg-3">
                <h3 className="fw-bold">Buku untuk semua</h3>
                <p className="text-muted mt-n2">Manfaat buku berdasarkan peran</p>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-3 p-lg-2 shadow">
                            <div className="row g-0">
                                <div className="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 20.png" className="img-fluid rounded-start mt-3 mt-3" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">Siswa</h5>
                                        <p className="card-text text-muted">Belajar lebih asik bersama Buku Kemendikbud</p>
                                        <Link to="/panduan/siswa" className="card-text text-decoration-none fw-bold"><small className="text-blue">Lihat selengkapnya &#8594;</small></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 p-lg-2 shadow">
                            <div className="row g-0">
                                <div className="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 21.png" className="img-fluid rounded-start mt-3" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">Guru</h5>
                                        <p className="card-text text-muted">Dapatkan akses buku untuk bahan ajar di kelas</p>
                                        <Link to="/panduan/guru" className="card-text text-decoration-none fw-bold"><small className="text-blue">Lihat selengkapnya &#8594;</small></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 p-lg-2 shadow">
                            <div className="row g-0">
                                <div className="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 22.png" className="img-fluid rounded-start mt-3" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">Orang Tua</h5>
                                        <p className="card-text text-muted">Bantu tingkatkan proses belajar anak</p>
                                        <Link to="/panduan/orang-tua" className="card-text text-decoration-none fw-bold"><small className="text-blue">Lihat selengkapnya &#8594;</small></Link>
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