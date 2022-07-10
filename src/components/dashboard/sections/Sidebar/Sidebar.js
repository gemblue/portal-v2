import { faBookOpen, faDownload, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const { pathname } = useLocation()
    const [user, setUser] = useState([])


    useEffect(() => {
        let userLoggedIn = localStorage.getItem('user_profile')
        if (userLoggedIn) {
            setUser(JSON.parse(userLoggedIn))
        }
    }, [])

    return (
        <div id="sidebar" className="shadow-sm p-3 bg-white rounded">
            <h4>Dasbor</h4>
            <p>Halo, <strong>{user.fullname}</strong></p>
            <ul class="nav nav-pills flex-column border-0">
                <li class="nav-item d-flex align-items-center">
                    <Link to="/user/dashboard" className={`${pathname == '/user/dashboard' && 'active'} nav-link d-flex align-items-center text-center`}>
                        <FontAwesomeIcon fixedWidth icon={faHome} className="me-2" />
                        <span>Beranda</span>
                    </Link>
                </li>
                <li class="nav-item d-flex align-items-center">
                    <Link to="/user/profile" className={`${pathname == '/user/profile' && 'active'} nav-link d-flex align-items-center text-center`}>
                        <FontAwesomeIcon fixedWidth icon={faUser} className="me-2" />
                        <span>Profil</span>
                    </Link>
                </li>
                <li class="nav-item d-flex align-items-center">
                    <Link to="/user/riwayat-baca" className={`${pathname == '/user/riwayat-baca' && 'active'} nav-link d-flex align-items-center text-center`}>
                        <FontAwesomeIcon fixedWidth icon={faBookOpen} className="me-2" />
                        <span>Riwayat Baca</span>
                    </Link>
                </li>
                <li class="nav-item d-flex align-items-center">
                    <Link to="/user/riwayat-unduh" className={`${pathname == '/user/riwayat-unduh' && 'active'} nav-link d-flex align-items-center text-center`}>
                        <FontAwesomeIcon fixedWidth icon={faDownload} className="me-2" />
                        <span>Riwayat Unduh</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar