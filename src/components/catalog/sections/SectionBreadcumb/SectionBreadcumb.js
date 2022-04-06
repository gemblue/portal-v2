import React from 'react'
import { Link } from 'react-router-dom'

const SectionBreadcumb = () => {
    return (
        <section className="pt-3">
            <div className="container p-3">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none text-blue">Beranda</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/catalog" className="text-decoration-none text-blue">Katalog</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none text-blue">Buku Kurikulum Merdeka</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none text-blue">Jenjang SD</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Bahasa Indonesia</li>
                    </ol>
                </nav>
            </div>
        </section>
    )
}

export default SectionBreadcumb