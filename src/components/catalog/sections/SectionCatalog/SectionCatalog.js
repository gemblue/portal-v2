import { faArrowLeft, faArrowRight, faFilePdf, faHandPointer, faSearch, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Paginator from 'react-hooks-paginator'
import { Link, useNavigate } from 'react-router-dom'
import CardBook from '../../../global/card/CardBook/CardBook'
import CardSkeleton from '../../../global/card/CardSkeleton/CardSkeleton'
import Fuse from "fuse.js";
import { BASE_URL } from '../../../../utils/config'
import axios from 'axios'
import fuzzy from "fuzzy"
import { Tooltip } from 'bootstrap'

const SectionCatalog = ({ level, setLevelNonText, setLatestBook, setClass1, setClass2, setClass3, setClass4, setClass5, setClass6, setClass7, setClass8, setClass9, setClass10, setClass11, setClass12, setSearchTypeCatalogue, searchTitle, checkActive, books, loading, skeletonCount, typeBook, typeCatalogue, setTypeBook, setLevel, setLessonSejarah, setLessonGeografi, setLessonEkonomi, setLessonAntropologi, setLessonSosiologi, setLessonIPA, setLessonIPS, setLessonBIndonesia, setLessonBInggris, setLessonMatematika, setLessonPkn, setLessonInformatika, setLessonPJOK, setLessonIslam, setLessonKristen, setLessonKatolik, setLessonHindu, setLessonBuddha, setLessonKhonghucu, setLessonKepercayaan, setLessonSeniTari, setLessonSeniMusik, setLessonSeniRupa, setLessonSeniTeater, setLessonPrakarya, setPopularBook }) => {
    const navigate = useNavigate()
    const pageLimit = 12;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    const [lists, setLists] = useState([])
    const [search, setSearch] = useState('')
    console.log(typeCatalogue)

    // Tooltip configuration
    const message = [
        "Pembaca yang baru kali pertama mengenal buku yang memerlukan perancah(scaffolding) yaitu guru dan orang tua untuk secara aktif dan intensif mendampingi anak membaca.Pembaca pada tahap ini berusaha memahami arti setiap kata, frasa, dan kalimat sederhana yang tertulis.",
        "Pembaca yang sudah mengenal buku dan mampu membaca teks sederhana berupa kata / frasa dengan kombinasi bunyi huruf, klausa, dan kalimat dengan tingkat kesulitan yang meningkat.Pembaca pada jenjang ini dibagi menjadi tiga subjenjang berdasarkan tingkat kesulitan teks yang dipadupadankan terkait dengan kombinasi bunyi huruf, suku kata, dan kata, makna kosakata, dan struktur kalimat.",
        "Pembaca yang sudah sangat mengenali aneka jenis buku serta mampu membaca teks secara lancar dalam bentuk paragraf.Tema buku yang mereka baca semakin beragam.Mereka sudah mulai mempraktikkan membaca buku dengan anatomi yang lengkap(misalnya bab - bab buku).",
        "Pembaca yang semakin mahir membaca aneka jenis buku dengan kemampuan membaca untuk memahami beragam genre teks yang sudah meningkat.Pembaca pada jenjang ini dibagi atas dua subjenjang berdasarkan tingkat kesulitan teks yang meningkat; ragam atau genre teks / buku yang lebih bervariasi, serta kemampuan membaca banyak buku, lalu melakukan sintesis pemikiran—merujuk beberapa buku atau bacaan untuk menciptakan karya.",
        "Pembaca yang merupakan orang dewasa dengan kemampuan membaca secara analitis dan kritis serta kemampuan membaca banyak buku untuk menyintesis pemikiran secara lebih baik.Pembaca mahir dapat disejajarkan pada jenjang pendidikan tinggi."
    ]
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl)
    })

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

    var options = {
        extract: function (el) { return el.title; }
    };
    var results = fuzzy.filter(search, lists, options);
    var listResults = results.map(function (el) { return el; });

    const handleSearch = ({ currentTarget = {} }) => {
        const { value } = currentTarget
        setSearch(value)

    }

    // Set for pagination
    useEffect(() => {
        setCurrentData(books?.slice(offset, offset + pageLimit));
    }, [offset, books]);

    const scrollTop = () => {
        setTimeout(() => {
            document.getElementById('catalog').scrollIntoView()
        }, 0);
    }

    const selectOnlyThis = (e) => {
        let id = e.target.id;
        for (var i = 1; i <= 4; i++) {
            document.getElementById("check" + i).checked = false;
        }
        document.getElementById(id).checked = true;
    }

    const searchBook = () => {
        setSearchTypeCatalogue({
            title: search,
            typeCatalogue: typeCatalogue
        })
        setSearch('')
    }

    const titleSidebar = typeCatalogue === 'getPenggerakTextBooks' ? 'Buku Kurikulum Merdeka' : typeCatalogue === 'getTextBooks' ? 'Buku Teks K13' : 'Buku Non Teks'

    return (
        <section id="catalog">
            <div className="container px-3 py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <h4>{titleSidebar}</h4>
                        {
                            typeCatalogue === 'getNonTextBooks'
                                ? (
                                    <>
                                        <div className="card mt-3">
                                            <div className="card-header">
                                                TIPE BUKU
                                            </div>
                                            <div className="card-body">
                                                <div className="form-check">
                                                    <input onClick={() => setLevelNonText('level_A')} checked={level === 'level_A' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" name="type_book" type="checkbox" id="typeA" />
                                                    <label className="form-check-label" htmlFor="typeA">
                                                        Pembaca Dini A
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onClick={() => setLevelNonText('level_B')} checked={level === 'level_B' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" name="type_book" type="checkbox" id="typeB1" />
                                                    <label className="form-check-label" htmlFor="typeB1">
                                                        Pembaca Awal B1
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onClick={() => setLevelNonText('level_B2')} checked={level === 'level_B2' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" name="type_book" type="checkbox" id="typeB2" />
                                                    <label className="form-check-label" htmlFor="typeB2">
                                                        Pembaca Awal B2
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onClick={() => setLevelNonText('level_B3')} checked={level === 'level_B3' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" name="type_book" type="checkbox" id="typeB3" />
                                                    <label className="form-check-label" htmlFor="typeB3">
                                                        Pembaca Awal B3
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onClick={() => setLevelNonText('level_C')} checked={level === 'level_C' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" name="type_book" type="checkbox" id="typeC" />
                                                    <label className="form-check-label" htmlFor="typeC">
                                                        Pembaca Lanjut C
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onClick={() => setLevelNonText('level_D')} checked={level === 'level_D' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" name="type_book" type="checkbox" id="typeD1" />
                                                    <label className="form-check-label" htmlFor="typeD1">
                                                        Pembaca Semenjana D1
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onClick={() => setLevelNonText('level_D2')} checked={level === 'level_D2' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" name="type_book" type="checkbox" id="typeD2" />
                                                    <label className="form-check-label" htmlFor="typeD2">
                                                        Pembaca Semenjana D2
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onClick={() => setLevelNonText('level_E')} checked={level === 'level_E' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" name="type_book" type="checkbox" id="typeE" />
                                                    <label className="form-check-label" htmlFor="typeE">
                                                        Pembaca Mahir E
                                                    </label>
                                                </div>
                                                <div className="mt-3">
                                                    <span className="link text-blue" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#descriptionModal">
                                                        Penjelasan Jenjang Buku
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                                : (
                                    <>
                                        <div className="card mt-3">
                                            <div className="card-header">
                                                TIPE BUKU
                                            </div>
                                            <div className="card-body">
                                                <div onChange={() => setTypeBook('type_pdf')} className="form-check">
                                                    <input className="form-check-input" checked={typeBook == 'type_pdf' && true} name="type_book" type="checkbox" id="typePDF" />
                                                    <label className="form-check-label" htmlFor="typePDF">
                                                        Buku PDF
                                                    </label>
                                                </div>
                                                <div onChange={() => setTypeBook('type_audio')} className="form-check">
                                                    <input className="form-check-input" checked={typeBook == 'type_audio' && true} name="type_book" type="checkbox" id="typeAudio" />
                                                    <label className="form-check-label" htmlFor="typeAudio">
                                                        Buku Audio
                                                    </label>
                                                </div>
                                                <div onChange={() => setTypeBook('type_interactive')} className="form-check">
                                                    <input className="form-check-input" checked={typeBook == 'type_interactive' && true} name="type_book" type="checkbox" id="typeInteractive" />
                                                    <label className="form-check-label" htmlFor="typeInteractive">
                                                        Buku Interaktif
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mt-3">
                                            <div className="card-header">
                                                JENJANG
                                            </div>
                                            <div className="card-body">
                                                <div className="form-check">
                                                    <input onClick={() => setLevel('level_paud')} checked={checkActive == 'level_paud' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" type="checkbox" id="check1" />
                                                    <label className="form-check-label" htmlFor="checkPAUD">
                                                        PAUD
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onClick={() => setLevel('level_sd')} checked={checkActive == 'level_sd' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" type="checkbox" id="check2" />
                                                    <label className="form-check-label" htmlFor="checkSD">
                                                        SD/MI
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onClick={() => setLevel('level_smp')} checked={checkActive == 'level_smp' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" type="checkbox" id="check3" />
                                                    <label className="form-check-label" htmlFor="checkSMP">
                                                        SMP/MTS
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onClick={() => setLevel('level_sma')} checked={checkActive == 'level_sma' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" type="checkbox" id="check4" />
                                                    <label className="form-check-label" htmlFor="checkSMK">
                                                        SMA/MA/SMK/MAK
                                                    </label>
                                                </div>
                                                {
                                                    typeCatalogue === "getPenggerakTextBooks" && (
                                                        <div className="form-check">
                                                            <input onClick={() => setLevel('level_sdlb')} checked={checkActive == 'level_sdlb' ? true : false} onChange={(e) => selectOnlyThis(e)} className="form-check-input" type="checkbox" id="check5" />
                                                            <label className="form-check-label" htmlFor="checkSDLB">
                                                                SLB (SDLB/SMPLB/SMALB)
                                                            </label>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="card mt-3">
                                            <div className="card-header">
                                                Kelas
                                            </div>
                                            <div className="card-body row overflow-auto">
                                                <div className="col-6">
                                                    <div className="form-check">
                                                        <input onChange={setClass1} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            I
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input onChange={setClass2} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            II
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input onChange={setClass3} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            III
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input onChange={setClass4} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            IV
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input onChange={setClass5} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            V
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input onChange={setClass6} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            VI
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-check">
                                                        <input onChange={setClass7} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            VII
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input onChange={setClass8} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            VIII
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input onChange={setClass9} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            IX
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input onChange={setClass10} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            X
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input onChange={setClass11} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            XI
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input onChange={setClass12} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            XII
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mt-3">
                                            <div className="card-header">
                                                MATA PELAJARAN
                                            </div>
                                            <div className="card-body overflow-auto" style={{ height: '160px' }}>
                                                <div className="form-check">
                                                    <input onChange={setLessonIPA} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        IPA
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonIPS} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        IPS
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonBIndonesia} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Bahasa Indonesia
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonBInggris} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Bahasa Inggris
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonMatematika} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Matematika
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonPkn} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Pendidikan Kewarganegaraan
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonInformatika} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Informatika
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonPJOK} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        PJOK
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonIslam} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Pendidikan Agama Islam
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonKristen} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Pendidikan Agama Kristen
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonKatolik} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Pendidikan Agama Katolik
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonHindu} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Pendidikan Agama Hindu
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonBuddha} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Pendidikan Agama Buddha
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonKhonghucu} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Pendidikan Agama Khonghucu
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonKepercayaan} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Kepercayaan
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonSeniTari} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Seni Tari
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonSeniMusik} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Seni Musik
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonSeniRupa} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Seni Rupa
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonSeniTeater} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Seni Teater
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonPrakarya} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Prakarya
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonSosiologi} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Sosiologi
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonAntropologi} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Antropologi
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonEkonomi} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Ekonomi
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonGeografi} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Geografi
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input onChange={setLessonSejarah} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Sejarah
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    </div>
                    <div className="col-lg-9">
                        <div className="text-muted text-end my-4">
                            Menampilkan {currentData?.length} buku ({currentData?.length} dari {books?.length} buku)
                        </div>
                        <div className="row">
                            <div className="col-8 col-lg-8 position-relative">
                                <div className="input-group shadow-sm">
                                    <span className="input-group-text bg-white"><FontAwesomeIcon className='text-muted' icon={faSearch} /></span>
                                    <input value={search} onChange={handleSearch} onKeyDown={e => e.code === 'Enter' && searchBook()} type="text" className="form-control py-2 border-start-0 border-end-0 px-1" placeholder="Cari buku disini" aria-label="Cari buku disini" />
                                    <button onClick={() => searchBook()} className="btn btn-orange" type="button">Cari</button>
                                </div>

                                {
                                    search != '' && (
                                        <div className="card-body bg-white p-0 py-2 px-3 position-absolute" style={{ zIndex: '10' }}>
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
                                                            <Link to={`/katalog/${item.original.slug}`} className="list-group-item list-group-item-action border-0 rounded-pill text-muted">
                                                                {item.original.type === 'pdf' && <FontAwesomeIcon icon={faFilePdf} className="me-2" />}
                                                                {item.original.type === 'audio' && <FontAwesomeIcon icon={faVolumeHigh} className="me-2" />}
                                                                {item.original.type === 'interactive' && <FontAwesomeIcon icon={faHandPointer} className="me-2" />}
                                                                {item.original.title}
                                                            </Link>
                                                        )
                                                    }).slice(0, 5)
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="col-4 col-lg-4 my-auto text-end fw-bold">
                                <span className="d-none d-md-inline">Urutkan : &nbsp;</span>
                                <select className="form-select d-inline filter-type">
                                    <option selected onClick={() => { setPopularBook(''); setLatestBook('') }}>Semua</option>
                                    <option onClick={() => setPopularBook('getPopularCatalogue')}>Terpopuler</option>
                                    <option onClick={() => setLatestBook('sort=desc')}>Terbaru</option>
                                </select>
                            </div>
                        </div>
                        {
                            searchTitle !== null && (
                                <div className="mt-3">Hasil pencarian dari : <strong>{searchTitle}</strong> </div>
                            )
                        }
                        <div className="row">
                            {
                                loading
                                    ? [...Array(skeletonCount)].map((item, index) => {
                                        return ((<div key={index} className="col-lg-4 my-2"><CardSkeleton /></div>))
                                    })
                                    : currentData?.length == 0 ? (
                                        <div className="text-center mt-5">
                                            <img
                                                width="60"
                                                src="/assets/image/catalog/not-found.png"
                                                className="img-fluid"
                                                alt="Not found"
                                            />
                                            <div className="text-center mt-2">Buku belum tersedia</div>
                                        </div>
                                    )
                                        : currentData?.map((book, index) => {
                                            return (
                                                <div key={index} className="col-lg-4 my-2">
                                                    <Link key={index} to={`/katalog/${book.slug}`} className="text-decoration-none text-dark">
                                                        <CardBook
                                                            image={book.image}
                                                            title={book.title}
                                                            typeBook={book.type}
                                                            level={book.level}
                                                        />
                                                    </Link>
                                                </div>
                                            )
                                        })
                            }
                        </div>
                        <div className="mt-4">
                            <div onClick={() => scrollTop()}>
                                <Paginator
                                    pagePrevText={<FontAwesomeIcon icon={faArrowLeft} />}
                                    pageNextText={<FontAwesomeIcon icon={faArrowRight} />}
                                    totalRecords={books?.length}
                                    pageLimit={pageLimit}
                                    pageNeighbours={2}
                                    setOffset={setOffset}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />

                            </div>
                            {/* <button onClick={() => setLimit()} className="btn btn-primary rounded-pill">Load more</button> */}
                        </div>
                    </div>
                </div>
            </div >
            <div class="modal fade" id="descriptionModal" tabindex="-1" aria-labelledby="descriptionModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="descriptionModalLabel">Penjelasan Jenjang Buku</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td width={150}>Pembaca Dini A</td>
                                        <td>{message[0]}</td>
                                    </tr>
                                    <tr>
                                        <td>Pembaca Awal B1, B2, dan B3</td>
                                        <td>{message[1]}</td>
                                    </tr>
                                    <tr>
                                        <td>Pembaca Lanjut C</td>
                                        <td>{message[2]}</td>
                                    </tr>
                                    <tr>
                                        <td>Pembaca Semenjana D1 dan D2</td>
                                        <td>{message[3]}</td>
                                    </tr>
                                    <tr>
                                        <td>Pembaca Mahir E</td>
                                        <td>{message[4]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SectionCatalog