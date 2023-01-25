import CountUp from 'react-countup';
import { formatNumber } from '../../../../utils/helper';
import styles from "../SectionStats/SectionStats.module.scss"

const SectionStats = ({ data, guide }) => {
    const stats = data
    let background = "bg-stats.png"
    guide && (background = "bg-2-stats.png")

    return (
        <section className="" style={{ backgroundImage: `url(/assets/image/background/${background})`, backgroundPosition: 'center' }} id="counter">
            <div className="container p-4">
                <div className="row text-center justify-content-start justify-content-lg-center">
                    <div className="col-6 col-lg-2">
                        <div className="position-relative">
                            <div className={`${styles.count} position-relative`} style={{ zIndex: '100' }}>
                                <CountUp end={stats.total_read} duration={5} formattingFn={val => formatNumber(val)} />
                            </div>
                            <img src="/assets/image/home/line-stats.png" className="position-absolute mx-auto" style={{ zIndex: '1', bottom: '5%', left: '16%', width: '65%' }} alt="" />
                        </div>
                        <p className="text-white">Kali buku dibaca</p>
                    </div>
                    <div className="col-6 col-lg-2">
                        <div className="position-relative">
                            <div className={`${styles.count} position-relative`} style={{ zIndex: '100' }}>
                                <CountUp end={stats.total_download} duration={5} formattingFn={val => formatNumber(val)} />
                            </div>
                            <img src="/assets/image/home/line-stats.png" className="position-absolute mx-auto" style={{ zIndex: '1', bottom: '5%', left: '16%', width: '66%' }} alt="" />
                        </div>
                        <p className="text-white">Kali Buku diunduh</p>
                    </div>
                    <div className="col-6 col-lg-2">
                        <div className="position-relative">
                            <div className={`${styles.count} position-relative`} style={{ zIndex: '100' }}>
                                <CountUp end={stats.total_book} duration={5} formattingFn={val => formatNumber(val)} />
                            </div>
                            <img src="/assets/image/home/line-stats.png" className="position-absolute mx-auto" style={{ zIndex: '1', bottom: '6%', left: '25%', width: '50%' }} alt="" />
                        </div>
                        <p className="text-white">Buku tersedia</p>
                    </div>
                    <div className="col-6 col-lg-2">
                        <div className="position-relative">
                            <div className={`${styles.count} position-relative`} style={{ zIndex: '100' }}>
                                <CountUp end={stats.total_assessment} duration={5} formattingFn={val => formatNumber(val)} />
                            </div>
                            <img src="/assets/image/home/line-stats.png" className="position-absolute mx-auto" style={{ zIndex: '1', bottom: '4%', left: '16%', width: '65%' }} alt="" />
                        </div>
                        <p className="text-white">Buku lulus penilaian</p>
                    </div>
                    <div className="col-6 col-lg-2">
                        <div className="position-relative">
                            <div className={`${styles.count} position-relative`} style={{ zIndex: '100' }}>
                                <CountUp end={1334557} duration={5} formattingFn={val => formatNumber(val)} />
                            </div>
                            <img src="/assets/image/home/line-stats.png" className="position-absolute mx-auto" style={{ zIndex: '1', bottom: '4%', left: '16%', width: '65%' }} alt="" />
                        </div>
                        <p className="text-white">Total Kunjungan</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionStats