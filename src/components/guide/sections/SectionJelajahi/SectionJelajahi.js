import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const SectionJelajahi = () => {
    return (
        <section className="bg-pink" style={{ padding: '60px 0', backgroundImage: 'url(/assets/image/guide/Background.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
            <div className="container p-3 text-center">
                <h1 className="text-blue fw-bold mb-3">Jelajahi buku sekarang</h1>
                <Link to="/katalog" className="btn btn-orange">Buka Katalog Buku <FontAwesomeIcon icon={faChevronCircleRight} className="ms-2" /></Link>
            </div>
        </section>
    )
}

export default SectionJelajahi