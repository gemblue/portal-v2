import { faCircleArrowUp, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <footer id="Footer">
            <div className="container">
                <div className="row justify-content-between my-5">
                    <div className="col-md-4 pe-md-5">
                        <img src="/assets/image/kemendikbud.webp" className="" width="100" alt="" />
                        <p className="text-white my-2"><strong>Pusat Perbukuan</strong></p>
                        <p className="text-white"><small>Badan Standar, Kurikulum, dan Asesmen Pendidikan. Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.</small></p>
                    </div>
                    <div className="col-md-3 mt-4 mt-md-0">
                        <h5 className="footer-section-title">Peta Situs</h5>
                        <ul className="nav flex-column">
                            <a className="nav-link" to="/">Beranda</a>
                            {/* <a className="nav-link" to="/artikel">Berita Terbaru</a> */}
                            <a className="nav-link" to="/buku-teks">Buku Teks K13</a>
                            <a className="nav-link" to="/buku-nonteks">Buku Nonteks</a>
                            <a className="nav-link" to="/buku-kurikulum-merdeka">Buku Kurikulum Merdeka</a>
                            <a className="nav-link" href="https://app.buku.kemdikbud.go.id/penilaian">Penilaian</a>
                            <a className="nav-link" href="https://app.buku.kemdikbud.go.id/kebijakan">Kebijakan</a>
                            <a className="nav-link" to="/panduan">Panduan</a>
                            <Link className="nav-link" to="/tentang-kami">Tentang Kami</Link>
                        </ul>
                    </div>
                    <div className="col-md-5 mt-4 mt-md-0">
                        <h5 className="footer-section-title">Kontak Kami</h5>
                        <p><FontAwesomeIcon icon={faLocationDot} className="me-2" /> Jalan RS. Fatmawati Gd D Komplek Kemendikbudristek Cipete, Jakarta 12410</p>
                        <a className="nav-link" href="phoneto:021-3804248"><FontAwesomeIcon icon={faPhone} className="me-2" /> 021-3804248</a>
                        <a className="nav-link" href="mailto:buku@kemdikbud.go.id"><FontAwesomeIcon icon={faEnvelope} className="me-2" /> buku@kemdikbud.go.id</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <p>&copy; Copyrights 2022 Sistem Informasi Perbukuan Indonesia. All rights reserved. </p>
                    </div>
                    <div className="col text-end">
                        <a className="btn btn-warning rounded" href="#top">
                            <FontAwesomeIcon icon={faCircleArrowUp} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
