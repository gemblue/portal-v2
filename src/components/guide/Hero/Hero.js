import styles from './Hero.module.scss'

const Hero = ({ content }) => {
    return (
        <section id="hero" className={`bg-soft-blue position-relative ${styles.hero}`}>
            <div className="container p-3 pb-0">
                <div className="row">
                    <div className="col-lg-6 order-last order-md-first my-5 my-md-auto">
                        <p className="lead"><div className="d-inline-flex flex-column"><span>{content.subtitle}</span><span className="mt-n3 d-none d-md-block"><img src="/assets/image/home/line-title.png" alt="line title" /></span></div></p>
                        <h1 className="text-blue fw-bold">{content.title}</h1>
                        <p className="lead mt-4">{content.description}</p>

                    </div>
                    <div className="col-lg-6 position-relative">
                        <img src={content.image} className="w-100 position-relative" alt="" style={{ zIndex: '1' }} />
                        <img src={content.vector} className="w-100 d-block d-md-none position-absolute end-0 bottom-0" alt="" />
                    </div>
                </div>
            </div>
            <img src={content.vector} className="w-50 d-none d-md-block position-absolute end-0 bottom-0" alt="" />
        </section >
    )
}

export default Hero