// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

SwiperCore.use([Grid, Autoplay]);

const SectionTestimony = () => {
    const data = [
        {
            comment: 'Bukunya bagus bagus',
            avatar: '/assets/image/testimony/pic1.webp',
            name: 'Aldian',
            school: 'SMK TI GARNUS'
        },
        {
            comment: 'Buku Elektronik Interaktif keren sekali',
            avatar: '/assets/image/testimony/pic2.webp',
            name: 'Luella Syifa',
            school: 'SMK TI GARNUS'
        },
        {
            comment: 'Animasi Buku Interaktifnya sangat menarik',
            avatar: '/assets/image/testimony/pic4.webp',
            name: 'Hadyan Palupi',
            school: 'SMK TI GARNUS'
        },
        {
            comment: 'Sangat membantu saya buat belajar',
            avatar: '/assets/image/testimony/pic3.webp',
            name: 'Mochamad Firman',
            school: 'SMK TI GARNUS'
        },
        {
            comment: 'Animasi Buku Interaktifnya sangat menarik',
            avatar: '/assets/image/testimony/pic4.webp',
            name: 'Hadyan Palupi',
            school: 'SMK TI GARNUS'
        },
        {
            comment: 'Buku Elektronik Interaktif keren sekali',
            avatar: '/assets/image/testimony/pic1.webp',
            name: 'Luella Syifa',
            school: 'SMK TI GARNUS'
        },
    ]

    const testimony = [];
    const limit = 2;
    let start = 1;
    let counter = 0;
    let testimonyTemp = [];

    data.forEach(() => {
        if (start <= limit) {
            testimonyTemp.push(data[counter]);
            start++;
        } else {
            start = 1
            testimony.push(testimonyTemp);
            testimonyTemp = [];
        };
        counter++;
    });

    return (
        <section className="py-5" style={{ background: 'linear-gradient(to bottom, white, #fef2e8)' }}>
            <div className="container p-3">
                <h3 className="mb-4">Apa kata mereka?</h3>
                <Swiper
                    autoplay={{ delay: '0ms' }}
                    loop
                    speed={20000}
                    spaceBetween={0}
                    slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        testimony.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>

                                    <div className="pe-4 my-3">
                                        <div className="card h-100 shadow border-0" style={{ minWidth: '130px' }}>
                                            <div className="card-body">
                                                <div className="text-end text-muted">
                                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                                </div>
                                                <div className="mb-3 text-muted">{item[0].comment}</div>
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 text-center text-md-start">
                                                        <img src={item[0].avatar} className="rounded-circle" width={50} height={50} alt="" />
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <small className="d-block fw-bold text-center text-lg-start">{item[0].name}</small>
                                                        <small>SMP 1 Padalarang</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-4 my-3">
                                        <div className="card shadow border-0" style={{ minWidth: '130px' }}>
                                            <div className="card-body">
                                                <div className="text-end text-muted">
                                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                                </div>
                                                <div className="mb-3 text-muted">{item[1].comment}</div>
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 text-center text-md-start">
                                                        <img src={item[1].avatar} className="rounded-circle" width={50} height={50} alt="" />
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <small className="d-block fw-bold text-center text-lg-start">{item[1].name}</small>
                                                        <small>SMP 1 Padalarang</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section >
    )
}

export default SectionTestimony