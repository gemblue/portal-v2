import { faFilePdf, faHandPointer, faSearch, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'
import Fuse from "fuse.js";
import { BASE_URL } from '../../../utils/config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

    const [lists, setLists] = useState([])
    const [search, setSearch] = useState('')

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

    const fuse = new Fuse(lists, {
        keys: [
            'title',
        ]
    });

    const results = fuse.search(search)
    const listResults = results.map((result) => result.item)

    const handleSearch = ({ currentTarget = {} }) => {
        const { value } = currentTarget
        setSearch(value)
    }

    return (
        <section id="hero" className={`bg-soft-blue position-relative ${styles.hero}`}>
            <div className="container p-3">
                <div className="row">
                    <div className="col-lg-5 order-last order-md-first my-5 my-md-auto">
                        <h1 className="text-blue fw-bold">Buku untuk Semua</h1>
                        <p className="lead">Akses <div className="d-inline-flex flex-column"><span>di mana pun, kapan pun,</span><span className="mt-n3 d-none d-md-block"><img src="/assets/image/home/line-title.png" alt="line title" /></span></div> Baca buku yuk!</p>
                        <div className="input-group shadow-sm mt-5">
                            <span className="input-group-text bg-white border-0"><FontAwesomeIcon className='text-muted' icon={faSearch} /></span>
                            <input value={search} onChange={handleSearch} type="text" className="form-control py-3 border-0 px-1" placeholder="Cari buku disini" aria-label="Cari buku disini" />
                            <button className="d-none d-sm-block btn btn-white border-start border-1 dropdown-toggle px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">Buku Teks K13</button>
                            <ul className="dropdown-menu">
                                <li><Link to="/katalog?type=getTextBooks" className="dropdown-item">Buku Teks K13</Link></li>
                                <li><Link to="/katalog?type=getPenggerakTextBooks" className="dropdown-item">Buku Kurikulum Merdeka</Link></li>
                                <li><Link to="/katalog?type=getNonTextBooks" className="dropdown-item">Buku Nonteks</Link></li>
                            </ul>
                            <div className="bg-white my-auto p-2">
                                <button className="btn btn-orange" type="button">Cari</button>
                            </div>
                        </div>
                        {
                            search != '' && (
                                <div className="card-body bg-white p-0 py-2 px-3">
                                    <h6>Hasil pencarian :</h6>
                                    <div className="list-group">
                                        {
                                            search != '' && listResults.length < 1 && (
                                                <>
                                                    <p className="bg-light rounded-pill">Hasil tidak ditemukan. Silahkan cari dengan kata kunci lain</p>
                                                </>
                                            )
                                        }
                                        {
                                            listResults &&
                                            listResults.map((item, index) => {
                                                return (
                                                    <Link to={`/katalog/${item.slug}`} className="list-group-item list-group-item-action border-0 rounded-pill text-muted">
                                                        {item.type == 'pdf' && <FontAwesomeIcon icon={faFilePdf} className="me-2" />}
                                                        {item.type == 'audio' && <FontAwesomeIcon icon={faVolumeHigh} className="me-2" />}
                                                        {item.type == 'interactive' && <FontAwesomeIcon icon={faHandPointer} className="me-2" />}
                                                        {item.title}
                                                    </Link>
                                                )
                                            }).slice(0, 10)
                                        }
                                    </div>
                                </div>
                            )
                        }
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