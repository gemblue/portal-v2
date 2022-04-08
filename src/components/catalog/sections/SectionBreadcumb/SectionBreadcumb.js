import React from 'react'
import { Link } from 'react-router-dom'

const SectionBreadcumb = ({ category, level, title }) => {
    let fixCategory = '';
    category == 'buku_teks' && (fixCategory = 'Buku Teks K13');

    return (
        <section className="pt-3">
            <div className="container p-3">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none text-blue">Beranda</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/katalog" className="text-decoration-none text-blue">Katalog</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/katalog" className="text-decoration-none text-blue">{fixCategory}</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/katalog" className="text-decoration-none text-blue">{level}</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{title}</li>
                    </ol>
                </nav>
            </div>
        </section>
    )
}

export default SectionBreadcumb