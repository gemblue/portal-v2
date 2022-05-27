import { faFilePdf, faHandPointer, faSearch, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'
import Fuse from "fuse.js";
import { BASE_URL } from '../../../utils/config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fuzzy from "fuzzy"

const Hero = () => {

    const navigate = useNavigate()
    const [lists, setLists] = useState([])
    const [search, setSearch] = useState('')
    const [typeBook, setTypeBook] = useState('Kurikulum Merdeka')

    useEffect(() => {
        const getLists = async () => {
            try {
                let response = await axios.get(`${BASE_URL}/api/catalogue/search`)
                if (response.data.error === "No Content") {
                    setLists(null);
                } else {
                    setLists(response.data.results);
                }
            } catch (err) {
                return err.message;
            }
        };
        getLists();
    }, []);

    // Handle search using fuse JS
    // const fuse = new Fuse(lists, {
    //     keys: [
    //         'title', 'type'
    //     ],
    //     id: 'id'
    // });
    // const results = fuse.search(search)
    // const listResults = results.map((result) => result.item)

    // Handle search using fuzzy JS
    var options = {
        extract: function (el) { return el.title; }
    };
    var results = fuzzy.filter(search, lists, options);
    var listResults = results.map(function (el) { return el; });

    const handleSearch = ({ currentTarget = {} }) => {
        const { value } = currentTarget
        setSearch(value)
    }

    const searchBook = () => {
        navigate('/katalog', { state: { title: search, typeBook: typeBook } })
    }

    return (
        <section id="hero" className={`bg-soft-blue position-relative ${styles.hero}`}>
            <div className="container p-3">
                <div className="row">
                    <div className="col-lg-5 order-last order-md-first my-5 my-md-auto">
                        <h1 className="text-blue fw-bold" style={{ fontSize: '3rem' }}>Buku untuk Semua</h1>
                        <p className="lead">Akses <div className="d-inline-flex flex-column"><span>di mana pun, kapan pun,</span><span className="mt-n3 d-none d-md-block"><img src="/assets/image/home/line-title.png" alt="line title" /></span></div> Baca buku yuk!</p>
                        <div className="input-group shadow-sm mt-5">
                            <span className="input-group-text bg-white border-0"><FontAwesomeIcon className='text-muted' icon={faSearch} /></span>
                            <input value={search} onChange={handleSearch} onKeyDown={e => e.code === 'Enter' && searchBook()} type="text" className="form-control py-3 border-0 px-1" placeholder="Cari buku disini" aria-label="Cari buku disini" />
                            <button className="d-none d-sm-block btn btn-white border-start border-1 dropdown-toggle px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">{typeBook}</button>
                            <ul className="dropdown-menu">
                                <li><div onClick={() => setTypeBook('Kurikulum Merdeka')} className="dropdown-item" style={{ cursor: 'pointer' }}>Kurikulum Merdeka</div></li>
                                <li><div onClick={() => setTypeBook('Teks K13')} className="dropdown-item" style={{ cursor: 'pointer' }}>Teks K13</div></li>
                                <li><div onClick={() => setTypeBook('Nonteks')} className="dropdown-item" style={{ cursor: 'pointer' }}>Nonteks</div></li>
                            </ul>
                            <div className="bg-white my-auto p-2">
                                <button onClick={() => searchBook()} className="btn btn-orange" type="button">Cari</button>
                            </div>
                        </div>
                        <div className="position-relative bg-danger">
                            {
                                search !== '' && (
                                    <div className="card-body bg-white p-0 py-2 px-3 position-absolute">
                                        <h6>Hasil pencarian :</h6>
                                        <div className="list-group">
                                            {
                                                search !== '' && listResults.length < 1 && (
                                                    <>
                                                        <p className="bg-light rounded-pill">Hasil tidak ditemukan. Silahkan cari dengan kata kunci lain</p>
                                                    </>
                                                )
                                            }
                                            {
                                                listResults &&
                                                listResults.map((item, index) => {
                                                    return (
                                                        <Link key={index} to={`/katalog/${item.original.slug}`} className="list-group-item list-group-item-action border-0 rounded-pill text-muted">
                                                            {item.original.type === 'pdf' && <FontAwesomeIcon icon={faFilePdf} className="me-2" />}
                                                            {item.original.type === 'audio' && <FontAwesomeIcon icon={faVolumeHigh} className="me-2" />}
                                                            {item.original.type === 'interactive' && <FontAwesomeIcon icon={faHandPointer} className="me-2" />}
                                                            {item.original.title}
                                                        </Link>
                                                    )
                                                }).slice(0, 10)
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img src="/assets/image/home/aset home day.png" className="w-100 d-block d-lg-none" alt="" />
                    </div>
                </div>
            </div>
            <img src="/assets/image/home/aset home day.png" style={{ zIndex: '1', left: '45%', bottom: '3%' }} className=" d-none d-lg-block position-absolute" alt="" />
        </section >
    )
}

export default Hero