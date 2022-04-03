
const SectionBookForAll = () => {
    return (
        <section className="py-4 bg-soft-blue" style={{ backgroundImage: 'url(/assets/image/home/bg-book-for-all.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
            <div className="container p-3">
                <h3>Buku untuk semua</h3>
                <p className="text-muted">This is placeholder for description</p>
                <div className="row">
                    <div className="col-lg-4">
                        <div class="card mb-3 p-2 shadow">
                            <div class="row g-0">
                                <div class="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 20.png" class="img-fluid rounded-start mt-3 mt-3" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Siswa</h5>
                                        <p class="card-text text-muted">This is a wider card with supporting</p>
                                        <a href="#" class="card-text"><small class="text-primary">Lihat selengkapnya &#8594;</small></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card mb-3 p-2 shadow">
                            <div class="row g-0">
                                <div class="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 21.png" class="img-fluid rounded-start mt-3" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Guru</h5>
                                        <p class="card-text text-muted">This is a wider card with supporting</p>
                                        <a href="#" class="card-text"><small class="text-primary">Lihat selengkapnya &#8594;</small></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card mb-3 p-2 shadow">
                            <div class="row g-0">
                                <div class="col-md-4 text-center">
                                    <img src="/assets/image/home/Group 22.png" class="img-fluid rounded-start mt-3" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Orang Tua</h5>
                                        <p class="card-text text-muted">This is a wider card with supporting</p>
                                        <a href="#" class="card-text"><small class="text-primary">Lihat selengkapnya &#8594;</small></a>
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