import CountUp from 'react-countup';
import { formatNumber } from '../../../../utils/helper';
import styles from "../SectionStats/SectionStats.module.scss"

const SectionStats = ({ data }) => {
    const stats = data

    return (
        <section className="" style={{ backgroundImage: 'url(/assets/image/background/bg-stats.png)', backgroundPosition: 'center' }} id="counter">
            <div className="container p-4">
                <div className="row text-center justify-content-center">
                    <div className="col-6 col-lg-2">
                        <span className={styles.count}>
                            <CountUp end={stats.total_read} duration={5} formattingFn={val => formatNumber(val)} />
                        </span>
                        <p className="text-white">Buku telah dibaca</p>
                    </div>
                    <div className="col-6 col-lg-2">
                        <span className={styles.count}>
                            <CountUp end={stats.total_download} duration={5} formattingFn={val => formatNumber(val)} />
                        </span>
                        <p className="text-white">Buku terunduh</p>
                    </div>
                    <div className="col-6 col-lg-2">
                        <span className={styles.count}>
                            <CountUp end={stats.total_book} duration={5} formattingFn={val => formatNumber(val)} />
                        </span>
                        <p className="text-white">Buku tersedia</p>
                    </div>
                    <div className="col-6 col-lg-2">
                        <span className={styles.count}>
                            <CountUp end={stats.total_assessment} duration={5} formattingFn={val => formatNumber(val)} />
                        </span>
                        <p className="text-white">Buku lulus penilaian</p>
                    </div>
                    <div className="col-6 col-lg-2">
                        <span className={styles.count}>
                            <CountUp end={780907} duration={5} formattingFn={val => formatNumber(val)} />
                        </span>
                        <p className="text-white">Total Kunjungan</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionStats