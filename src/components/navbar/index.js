import { faBars, faDoorOpen, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('user_token')
        localStorage.removeItem('user_profile')
        navigate('/')
    }

    // Handle page on scroll navbar change background 
    const navbar = document.querySelector('.navbar');
    window.onscroll = () => {
        if (window.pageYOffset > 200) {
            navbar.classList.remove('bg-light')
            navbar.classList.add('bg-white')
        }
        if (window.pageYOffset < 200) {
            navbar.classList.remove('bg-white')
            navbar.classList.add('bg-light')
        }
    }

    // Handle user is logged in
    const token = localStorage.getItem('user_token');
    const user = JSON.parse(localStorage.getItem('user_profile'))

    return (
        <section className="sticky-top fixed-top" id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src="/assets/image/logo/sibi-nav-logo.png" className="nav-logo" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto pt-3">
                            <li className="nav-item mx-1">
                                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link text-blue' : 'nav-link'} aria-current="page">Beranda</NavLink>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <NavLink to="/katalog" className={({ isActive }) => isActive ? 'nav-link text-blue dropdown-toggle' : 'nav-link dropdown-toggle'} aria-current="page">Katalog Buku</NavLink>
                                <ul className="dropdown-menu px-2" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <Link className="dropdown-item p-2" to="/katalog?type=getTextBooks">
                                            <img src="/assets/image/home/Group 76.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Buku Teks K-13</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item p-2" to="/katalog?type=getPenggerakTextBooks">
                                            <img src="/assets/image/home/Group 79.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Buku Kurikulum Merdeka</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item p-2" to="/katalog?type=getNonTextBooks">
                                            <img src="/assets/image/home/Group 80.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Buku Nonteks</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <NavLink to="/panduan/siswa" className={({ isActive }) => isActive ? 'nav-link text-blue dropdown-toggle' : 'nav-link dropdown-toggle'} aria-current="page">Buku Untuk</NavLink>
                                <ul className="dropdown-menu px-2" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <Link className="dropdown-item p-2" to="/panduan/siswa">
                                            <img src="/assets/image/home/Group 20.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Siswa</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item p-2" to="/panduan/guru">
                                            <img src="/assets/image/home/Group 21.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Guru</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item p-2" to="/panduan/orang-tua">
                                            <img src="/assets/image/home/Group 22.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Orang Tua</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className="nav-item mx-1">
                                <NavLink to="/pusbuk" className={({ isActive }) => isActive ? 'nav-link text-blue' : 'nav-link'} aria-current="page">Pusbuk</NavLink>
                            </li> */}
                            {
                                token == null
                                    ? (
                                        <li className="nav-item ms-3 pt-1">
                                            <Link to="/login" className="btn btn-sm btn-outline-primary">Masuk</Link>
                                        </li>
                                    )
                                    : (
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle h5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FontAwesomeIcon icon={faUserCircle} />
                                            </a>
                                            <ul class="dropdown-menu profile" aria-labelledby="navbarDropdown">
                                                <li><small className="dropdown-item fw-bold">Hai, {user.fullname}</small></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item"><FontAwesomeIcon className="me-1" icon={faBars} /> Dashboard</a></li>
                                                <li><a onClick={() => logout()} class="dropdown-item" href="#"> <FontAwesomeIcon className="me-1" icon={faDoorOpen} /> Logout</a></li>
                                            </ul>
                                        </li>
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar