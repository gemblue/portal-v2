import React from 'react'

const SectionIntro = () => {
    return (
        <section className="py-5">
            <div className="container p-3">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center">
                        <img src="/assets/image/guide/icon.png" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="text-blue mb-3">Akses gratis buku <br /> pelajaran resmi</h2>
                        <p>Tersedia lebih dari 1000 buku resmi kemendikbud</p>
                    </div>
                </div>
                <div className="row align-items-center mt-5">
                    <div className="col-lg-6 ps-5">
                        <h2 className="text-blue mb-3">Tersedia dalam <br /> berbagai format</h2>
                        <p>Tersedia lebih dari 1000 buku resmi kemendikbud</p>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src="/assets/image/guide/icon2.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionIntro