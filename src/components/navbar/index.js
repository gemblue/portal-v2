import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section className="sticky-top fixed-top" id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src="/assets/image/logo/logo-navbar.png" className="w-100" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-1">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Beranda</Link>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <Link to="/catalog" className="nav-link dropdown-toggle">
                                    Katalog Buku
                                </Link>
                                <ul className="dropdown-menu px-2" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item p-2" href="#">
                                            <img src="/assets/image/home/Group 76.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Buku Teks K-13</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item p-2" href="#">
                                            <img src="/assets/image/home/Group 79.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Buku Kurikulum Merdeka</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item p-2" href="#">
                                            <img src="/assets/image/home/Group 80.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Buku Nonteks</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Buku Untuk
                                </a>
                                <ul className="dropdown-menu px-2" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item p-2" href="#">
                                            <img src="/assets/image/home/Group 20.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Siswa</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item p-2" href="#">
                                            <img src="/assets/image/home/Group 21.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Guru</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item p-2" href="#">
                                            <img src="/assets/image/home/Group 22.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Orang Tua</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link" href="#">Pusbuk</a>
                            </li>
                            <li className="nav-item ms-3 pt-1">
                                <Link to="/login" className="nav-link" className="btn btn-sm btn-outline-primary">Masuk</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar