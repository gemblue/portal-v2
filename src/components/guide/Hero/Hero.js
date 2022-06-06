import styles from './Hero.module.scss'

const Hero = ({ content, role }) => {
    return (
        <section id="hero" className={`bg-soft-blue position-relative ${role === 'teacher' ? styles['hero-teacher'] : role === 'student' ? styles['hero-student'] : styles['hero-parent']}`}>
            <div className="container p-3 pb-0">
                <div className="row">
                    <div className="col-lg-6 order-last order-md-first my-5 my-md-auto">
                        <p className={`${styles.subtitle} lead fw-bold`}><div className="d-inline-flex flex-column"><span>{content.subtitle}</span><span className="mt-n3 d-none d-md-block"><img src="/assets/image/home/line-title.png" alt="line title" /></span></div></p>
                        <div className="row">
                            {
                                role === 'student'
                                    ? (<div className="col-10">
                                        <div className={`${styles.title} text-blue fw-bold display-4`}>Belajar jadi lebih mudah</div>
                                    </div>)
                                    : (<h1 className={`${styles.title} text-blue fw-bold display-4`}>{content.title}</h1>)
                            }

                        </div>
                        <p className={`${styles.desc} lead mt-2 mt-lg-4`}>{content.description}</p>

                    </div>
                    <div className="col-lg-6 position-relative">
                        <img src={content.image} className="w-100 d-block d-lg-none position-relative" alt="" style={{ zIndex: '1' }} />
                        <img src={content.vector} className="w-100 d-block d-lg-none position-absolute end-0 bottom-0" alt="" />
                    </div>
                </div>
            </div>
            <img src={content.image} style={{ zIndex: '1', left: '50%', bottom: '0%' }} className="d-none d-lg-block position-absolute " alt="" />
            <img src={content.vector} style={{ width: '41%', right: '0%' }} className="d-none d-lg-block position-absolute bottom-0" alt="" />
        </section >
    )
}

export default Hero