// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Grid, Autoplay]);

const SectionTestimony = () => {
    return (
        <section className="py-5" style={{ background: 'linear-gradient(to bottom, white, #fef2e9)' }}>
            <div className="container p-3">
                <h3 className="mb-4">Apa kata mereka?</h3>
                <Swiper
                    autoplay={{ delay: '0ms' }}
                    loop
                    speed={20000}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        [0, 1, 2, 3, 4, 5].map((label, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="pe-4 my-3">
                                        <div className="card shadow border-0" style={{ minWidth: '130px' }}>
                                            <div className="card-body">
                                                <div className="text-end text-muted">
                                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                                </div>
                                                <div className="mb-3">Sangat membantu</div>
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 text-center text-md-start">
                                                        <img src="/assets/image/kemendikbud.webp" width={60} alt="" />
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <small className="d-block fw-bold">Muhammad Aldian</small>
                                                        <small>SMP 1 Padalarang</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-5 my-3">
                                        <div className="card shadow border-0" style={{ minWidth: '130px' }}>
                                            <div className="card-body">
                                                <div className="text-end text-muted">
                                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                                </div>
                                                <div className="mb-3">Sangat membantu</div>
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 text-center text-md-start">
                                                        <img src="/assets/image/kemendikbud.webp" width={60} alt="" />
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <small className="d-block fw-bold">Muhammad Aldian</small>
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