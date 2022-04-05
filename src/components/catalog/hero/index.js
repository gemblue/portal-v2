import React from 'react'

const Hero = () => {
    return (
        <section className="bg-soft-blue">
            <div className="container py-5">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="card p-3 border-0 shadow d-flex flex-row align-items-center me-4 my-1 my-lg-0">
                        <img src="/assets/image/home/Group 76.png" width="40" alt="" />
                        <div className="ms-2">Buku Teks K-13</div>
                    </div>
                    <div className="card p-3 border-0 shadow d-flex flex-row align-items-center me-4 my-1 my-lg-0">
                        <img src="/assets/image/home/Group 79.png" width="40" alt="" />
                        <div className="ms-2">Buku Kurikulum Merdeka</div>
                    </div>
                    <div className="card p-3 border-0 shadow d-flex flex-row align-items-center me-4 my-1 my-lg-0">
                        <img src="/assets/image/home/Group 80.png" width="40" alt="" />
                        <div className="ms-2">Buku Nonteks</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero