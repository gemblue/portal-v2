import { faDoorOpen, faSignOut, faTachometerAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'

const Navbar = ({ nightMode }) => {

    // Handle night mode
    let backgroundColor = nightMode ? 'bg-night' : 'bg-soft-blue'
    let navbarType = nightMode ? 'navbar-dark' : 'navbar-light'
    let buttonColor = nightMode ? 'btn-outline-white' : 'btn-outline-blue'

    const location = useLocation()
    const navigate = useNavigate()
    const logout = () => {

        // Check if collapsed is show
        const toggler = document.getElementById('navbarNav')
        toggler.classList.contains('show') && toggler.classList.remove('show')

        // Delete localstorage and navigate route to root
        localStorage.removeItem('user_token')
        localStorage.removeItem('user_profile')
        navigate('/')
    }

    // Handle page on scroll navbar change background 
    const navbar = document.querySelector('.navbar');
    let button = document.querySelector('.btn-login')
    if (location.pathname.includes('/katalog')) {
        window.onscroll = () => {
            if (window.pageYOffset > 100) {
                if (nightMode) {
                    button.classList.remove('btn-outline-white')
                    button.classList.add('btn-outline-primary')

                    navbar.classList.remove('navbar-dark')
                    navbar.classList.add('navbar-light')

                    navbar.classList.remove('bg-night')
                    navbar.classList.add('bg-white')
                } else {
                    navbar.classList.remove('bg-white')
                    navbar.classList.add('bg-soft-blue')
                }
            }
            if (window.pageYOffset < 100) {
                if (nightMode) {
                    navbar.classList.remove('navbar-light')
                    navbar.classList.add('navbar-dark')

                    button.classList.remove('btn-outline-primary')
                    button.classList.add('btn-outline-white')

                    navbar.classList.remove('bg-white')
                    navbar.classList.add('bg-night')
                } else {
                    navbar.classList.remove('bg-soft-blue')
                    navbar.classList.add('bg-soft-white')

                }
            }
        }
    } else {
        window.onscroll = () => {
            if (window.pageYOffset > 100) {
                if (nightMode) {
                    button.classList.remove('btn-outline-white')
                    button.classList.add('btn-outline-blue')

                    navbar.classList.remove('navbar-dark')
                    navbar.classList.add('navbar-light')
                }

                navbar.classList.remove('bg-soft-blue')
                navbar.classList.add('bg-white')
            }
            if (window.pageYOffset < 100) {
                if (nightMode) {
                    navbar.classList.remove('navbar-light')
                    navbar.classList.add('navbar-dark')

                    button.classList.remove('btn-outline-blue')
                    button.classList.add('btn-outline-white')
                }
                navbar.classList.remove('bg-white')
                navbar.classList.add('bg-soft-blue')
            }
        }
    }

    // Handle user is logged in
    const token = localStorage.getItem('user_token');
    const user = JSON.parse(localStorage.getItem('user_profile'))

    return (
        <section className="sticky-top fixed-top" id="navbar">
            <nav className={`navbar navbar-expand-lg ${navbarType} ${backgroundColor}`}>
                <div className="container">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img src="/assets/image/logo-sibi.png" height={50} alt="" />
                        <div className={navbarType} style={{ fontSize: '.95rem' }}>
                            <div>Sistem Informasi</div>
                            <div className="fw-bold">Perbukuan Indonesia</div>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-1">
                                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">Beranda</NavLink>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link dropdown-toggle dropdown-mobile" href="#" id="dropdownCatalogue" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Katalog Buku
                                </a>
                                <NavLink to="/katalog" className={({ isActive }) => isActive ? 'dropdown-desktop nav-link fw-bold dropdown-toggle' : 'dropdown-desktop nav-link dropdown-toggle'} aria-current="page">Katalog Buku</NavLink>
                                <ul className="dropdown-menu px-2" aria-labelledby="dropdownCatalogue">
                                    <li>
                                        <Link className="dropdown-item p-2" to="/katalog/buku-kurikulum-merdeka">
                                            <img src="/assets/image/home/Group 79.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Buku Kurikulum Merdeka</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item p-2" to="/katalog/buku-teks-k13">
                                            <img src="/assets/image/home/Group 76.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Buku Teks K-13</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item p-2" to="/katalog/buku-non-teks">
                                            <img src="/assets/image/home/Group 80.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">Buku Nonteks</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-1">
                                <a className="nav-link dropdown-toggle dropdown-mobile" href="#" id="dropdownGuide" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Petunjuk
                                </a>
                                <NavLink to="/panduan/siswa" className={({ isActive }) => isActive ? 'dropdown-desktop nav-link fw-bold dropdown-toggle' : 'dropdown-desktop nav-link dropdown-toggle'} aria-current="page">Petunjuk</NavLink>
                                <ul className="dropdown-menu px-2" aria-labelledby="dropdownGuide">
                                    <li>
                                        <Link className="dropdown-item p-2" to="/panduan/siswa">
                                            <img src="/assets/image/home/Group 20.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">untuk Siswa</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item p-2" to="/panduan/guru">
                                            <img src="/assets/image/home/Group 21.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">untuk Guru</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item p-2" to="/panduan/orang-tua">
                                            <img src="/assets/image/home/Group 22.png" width={30} alt="" />
                                            <span className="ms-2 my-auto">untuk Orang Tua</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className="nav-item mx-1">
                                <a target="_blank" rel="noreferrer" href="https://pusbuk.kemdikbud.go.id" className={({ isActive }) => isActive ? 'nav-link fw-bold' : 'nav-link'} aria-current="page">Profil</a>
                            </li> */}
                            <li className="nav-item mx-1">
                                <div onClick={() => window.location.replace("https://pusbuk.kemdikbud.go.id")} className="nav-link" style={{ cursor: 'pointer' }}>Profil</div>
                            </li>
                            {
                                token && (
                                    <li className="nav-item mx-1 mt-3 d-block d-lg-none">
                                        <Link to="/user/dashboard" className="nav-link"><FontAwesomeIcon icon={faDoorOpen} /> Dasbor</Link>
                                        <div onClick={() => logout()} className="nav-link" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSignOut} /> Logout</div>
                                    </li>
                                )
                            }
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0 text-center text-xl-start">

                            {
                                token == null
                                    ? (
                                        <li className="nav-item ms-3 pt-1">
                                            <Link to="/login" className={`btn btn-sm ${buttonColor} btn-login`}>Masuk</Link>
                                        </li>
                                    )
                                    : (
                                        <li className="nav-item dropdown d-none d-xl-block">
                                            <a
                                                className="nav-link"
                                                data-toggle="dropdown"
                                                href="!#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <strong>{user && user.name}</strong>
                                                {user.avatar
                                                    ? (<img className="rounded-circle" src={user && user.avatar} alt="" style={{ width: "40px", height: "40px" }}/>)
                                                    : (<FontAwesomeIcon icon={faUserCircle} size="xl" />)
                                                }                                                
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end profile" aria-labelledby="navbarDropdown">
                                                <li className="py-0">
                                                    <small className="dropdown-item">Hai, <span className="fw-bold">{user.fullname}</span></small>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="/user/dashboard">
                                                        <FontAwesomeIcon icon={faTachometerAlt} className="me-1" /> Dashboard
                                                    </Link>
                                                </li>
                                                <li
                                                    className="dropdown-item"
                                                    onClick={logout}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <FontAwesomeIcon icon={faDoorOpen} className="me-1" /> Logout
                                                </li>
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