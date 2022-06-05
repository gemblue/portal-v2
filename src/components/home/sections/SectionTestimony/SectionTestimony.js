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
            name: 'Aldiansyah Ibrahim',
            school: 'SMK TI Garuda Nusantara'
        },
        {
            comment: 'Buku Elektronik Interaktif keren sekali',
            avatar: '/assets/image/testimony/pic2.webp',
            name: 'Luella Syifa',
            school: 'SMK TI Garuda Nusantara'
        },
        {
            comment: 'Animasi Buku Interaktifnya sangat menarik',
            avatar: '/assets/image/testimony/pic4.webp',
            name: 'Hadyan Palupi',
            school: 'MA Persis Tasikmalaya'
        },
        {
            comment: 'Sangat membantu saya buat belajar',
            avatar: '/assets/image/testimony/pic3.webp',
            name: 'Mochamad Firman',
            school: 'SMPN 1 Padalarang'
        },
        {
            comment: 'Sangat memudahkan dan membantu siswa maupun guru mendapat wawasan',
            avatar: '/assets/image/testimony/pic5.jpeg',
            name: 'Nui',
            school: 'Guru SMK Telkom Bandung'
        },
        {
            comment: 'Pembelajar menjadi lebih efektif, efesien dan menarik',
            avatar: '/assets/image/testimony/pic6.jpeg',
            name: 'Bella',
            school: 'Guru SMPN 3 Baleendah'
        },
        {
            comment: 'Buku-bukunya lengkap dan variatif',
            avatar: '/assets/image/testimony/pic7.jpeg',
            name: 'Radit',
            school: 'Siswa SMPN 3 Baleendah'
        },
        {
            comment: 'Support system yang bagus untuk kemajuan pendidikan',
            avatar: '/assets/image/testimony/pic8.jpeg',
            name: 'Naila',
            school: 'Umum'
        },
        {
            comment: 'Support system yang bagus untuk kemajuan pendidikan',
            avatar: '/assets/image/testimony/pic8.jpeg',
            name: 'Naila',
            school: 'Umum'
        },
        {
            comment: 'Support system yang bagus untuk kemajuan pendidikan',
            avatar: '/assets/image/testimony/pic8.jpeg',
            name: 'Naila',
            school: 'Umum'
        },
        {
            comment: 'Support system yang bagus untuk kemajuan pendidikan',
            avatar: '/assets/image/testimony/pic8.jpeg',
            name: 'Naila',
            school: 'Umum'
        },
    ]

    const testimony = [];
    const limit = 3;
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
        <section className="py-5" style={{ background: 'linear-gradient(to bottom, white, #e5f8ff, #e5f8ff)' }}>
            <div className="container p-3">
                <h3 className="mb-4">Apa kata mereka?</h3>

            </div>
            <Swiper
                autoplay={{ delay: '0ms' }}
                loop
                speed={40000}
                spaceBetween={5}
                slidesPerView={3.5}
                breakpoints={{
                    // when window width is >= 414px
                    350: {
                        slidesPerView: 1.8,
                    },
                }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    testimony.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="pe-4 my-3">
                                    <div className="card shadow border-0" style={{ minWidth: '130px' }}>
                                        <div className="card-body px-3">
                                            <div className="text-end text-muted">
                                                <FontAwesomeIcon size='xl' icon={faQuoteLeft} />
                                            </div>
                                            <div className="mb-2 text-muted">{item[0].comment}</div>
                                            <div className="row px-lg-1 align-items-center">
                                                <div className="col-lg-1 pe-0 d-flex justify-content-center text-center text-md-start">
                                                    <img src={item[0].avatar} className="rounded-circle me-lg-auto mb-2 mb-lg-0" width={50} height={50} alt="" />
                                                </div>
                                                <div className="col-lg-10 ms-1">
                                                    <small className="d-block fw-bold text-lg-start">{item[0].name}</small>
                                                    <small>{item[0].school}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-4 my-3">
                                    <div className="card shadow border-0" style={{ minWidth: '130px' }}>
                                        <div className="card-body px-3">
                                            <div className="text-end text-muted">
                                                <FontAwesomeIcon size='xl' icon={faQuoteLeft} />
                                            </div>
                                            <div className="mb-2 text-muted">{item[1].comment}</div>
                                            <div className="row px-lg-1 align-items-center">
                                                <div className="col-lg-1 pe-0 d-flex justify-content-center text-center text-md-start">
                                                    <img src={item[1].avatar} className="rounded-circle me-lg-auto mb-2 mb-lg-0" width={50} height={50} alt="" />
                                                </div>
                                                <div className="col-lg-10 ms-1">
                                                    <small className="d-block fw-bold text-lg-start">{item[1].name}</small>
                                                    <small>{item[1].school}</small>
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
        </section >
    )
}

export default SectionTestimony