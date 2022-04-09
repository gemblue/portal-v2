import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const SectionJelajahi = () => {
    return (
        <section className="py-4 bg-soft-blue" style={{ backgroundImage: 'url(/assets/image/home/bg-book-for-all.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
            <div className="container p-3 text-center">
                <h2 className="text-blue fw-bold mb-3">Jelajahi buku sekarang</h2>
                <Link to="/katalog" className="btn btn-orange">Buka Katalog Buku <FontAwesomeIcon icon={faChevronCircleRight} className="ms-2" /></Link>
            </div>
        </section>
    )
}

export default SectionJelajahi