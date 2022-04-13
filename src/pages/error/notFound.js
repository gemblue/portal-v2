import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const notFound = () => {
    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col text-center">
                    <img className="img-fluid" src="/assets/image/oops.png" alt="Oops! Halaman Tidak ditemukan" />
                    <h1 style={{ fontWeight: 'bold', fontSize: '2rem' }}>404 - Page Not Found</h1>
                    <p className="lead text-muted mb-5">
                        Sepertinya halaman yang kamu cari tidak ditemukan.
                    </p>
                    <Link to="/" className="btn btn-primary px-4 py-2" style={{ backgroundColor: '#2b4da2', color: 'white', border: 'none' }}>
                        <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                        Kembali
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default notFound;
