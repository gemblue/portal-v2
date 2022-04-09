import React from 'react'

const Hero = ({ typeCatalogue, setTypeCatalogue }) => {

    let active1 = '';
    let active2 = '';
    let active3 = '';

    typeCatalogue === 'getTextBooks' && (active1 = 'active-type-catalogue')
    typeCatalogue === 'getPenggerakTextBooks' && (active2 = 'active-type-catalogue')
    typeCatalogue === 'getNonTextBooks' && (active3 = 'active-type-catalogue')

    return (
        <section className="bg-soft-blue" id="typeCatalogue">
            <div className="container py-5">
                <div className="d-flex flex-column flex-lg-row">
                    <button onClick={() => setTypeCatalogue('getTextBooks')} className={`${active1} card card-type p-3 shadow d-flex flex-row align-items-center me-4 my-1 my-lg-0`}>
                        <img src="/assets/image/home/Group 76.png" width="40" alt="" />
                        <div className="ms-2">Buku Teks K-13</div>
                    </button>
                    <button onClick={() => setTypeCatalogue('getPenggerakTextBooks')} className={`${active2} card card-type p-3 border-0 shadow d-flex flex-row align-items-center me-4 my-1 my-lg-0`}>
                        <img src="/assets/image/home/Group 79.png" width="40" alt="" />
                        <div className="ms-2">Buku Kurikulum Merdeka</div>
                    </button>
                    <button onClick={() => setTypeCatalogue('getNonTextBooks')} className={`${active3} card card-type p-3 border-0 shadow d-flex flex-row align-items-center me-4 my-1 my-lg-0`}>
                        <img src="/assets/image/home/Group 80.png" width="40" alt="" />
                        <div className="ms-2">Buku Nonteks</div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero