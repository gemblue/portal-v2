import React from 'react'
import styles from './SectionFAQ.module.scss'

const SectionFAQ = () => {
    return (
        <section className="bg-soft-blue">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-7 p-3">
                        <div className={`ms-lg-auto ${styles.faq}`}>
                            <h3>Pertanyaan yang sering ditanyakan</h3>
                            <div className="accordion accordion-flush my-4" id="accordionFlushExample">
                                <div className="accordion-item mb-2">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed ps-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Apa itu buku Kemendikbudristek?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-2">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed ps-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Bagaimana cara mendaftar di SIBI?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-2">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed ps-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Mengapa saya tidak menerima email konfirmasi setelah mendaftar?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-2">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed ps-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Apakah saya boleh mencetak buku yang ada di SIBI?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="btn btn-outline-primary">Lihat Semua Pertanyaan</a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img src="/assets/image/home/faq.png" className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFAQ