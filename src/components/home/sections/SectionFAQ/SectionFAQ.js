import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SectionFAQ.module.scss'

const SectionFAQ = () => {
    return (
        <section>
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
                                        <div className="accordion-body">Buku-buku yang dikembangkan dan diterbitkan oleh unit-unit kerja di Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi untuk kebutuhan siswa, guru, atau masyarakat Indonesia.</div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-2">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed ps-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Bagaimana cara mendaftar di SIBI?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Silahkan klik Daftar di bagian pojok kanan atas, lalu isi formulir dengan lengkap menggunakan data sebenarnya. Lalu klik tombol Daftar di bagian bawah. Proses pendaftaran selesai.</div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-2">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                        <button className="accordion-button collapsed ps-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            Siapakah Pelaku Perbukuan?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Pelaku perbukuan terdiri atas Penulis, Penerjemah, Penyadur, Editor, Desainer, Ilustrator, Pencetak, Pengembang Buku Elektronik, Penerbit, dan Toko Buku.</div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-2">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed ps-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Mengapa saya tidak menerima email konfirmasi setelah mendaftar?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Panduan Sibi
                                            Sering Ditanyakan
                                            Karena mungkin email kamu tidak aktif, salah memasukan email ketika mendaftar, atau mungkin masuk ke folder promosi atau spam di email kamu.</div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-2">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed ps-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Apakah saya boleh mencetak buku yang ada di SIBI?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Buku yang diunggah di SIBI merupakan buku yang diterbitkan oleh Pemerintah Indonesia, sehingga masyarakat Indonesia diizinkan memanfaatkan buku ini termasuk mengunduh dan mencetaknya. Namun, jika akan diperjual belikan, dilarang menjual lebih dari harga eceran tertinggi (HET) yang tertera di sampul belakang buku.</div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/faq" className="btn btn-outline-primary">Lihat Semua Pertanyaan</Link>
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