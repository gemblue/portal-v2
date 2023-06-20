import React from 'react'
import { Link } from 'react-router-dom'

const SectionBreadcumb = ({ category, level, title, bookRecommendation }) => {
    let fixCategory = '';
    let categoryAction = '';

    if (category === 'buku_teks') {
        fixCategory = 'Buku Teks K13';
        categoryAction = 'getTextBooks'
    }

    if (category === 'buku_sekolah_penggerak') {
        fixCategory = 'Buku Teks Kurikulum Merdeka';
        categoryAction = 'getPenggerakTextBooks'
    }

    if (category === 'buku_non_teks') {
        fixCategory = 'Buku Nonteks';
        categoryAction = 'getNonTextBooks'
    }

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
                        {bookRecommendation && (
                            <li className="breadcrumb-item">
                                <Link to={`/katalog/buku-rekomendasi`} className="text-decoration-none text-blue">Buku Rekomendasi</Link>
                            </li>)
                        }
                        {category != "" && !bookRecommendation && (
                            <li className="breadcrumb-item">
                                <Link to={`/katalog?type=${categoryAction}`} className="text-decoration-none text-blue">{fixCategory}</Link>
                            </li>)
                        }
                        {/* {
                            level != "" && (
                                <li className="breadcrumb-item">
                                    <Link to="/katalog" className="text-decoration-none text-blue">{level}</Link>
                                </li>
                            )
                        } */}
                        <li className="breadcrumb-item active" aria-current="page">{title}</li>
                    </ol>
                </nav>
            </div>
        </section>
    )
}

export default SectionBreadcumb