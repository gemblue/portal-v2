import React from 'react'
import CountUp from 'react-countup';
import { formatNumber } from '../../../../utils/helper';
import styles from "../SectionStats/SectionStats.module.scss"

const SectionStats = () => {
    return (
        <section className="bg-blue" id="counter">
            <div className="container p-4">
                <div className="row text-center">
                    <div className="col-6 col-lg-3">
                        <span className={styles.count}>
                            <CountUp end={409836} duration={5} formattingFn={val => formatNumber(val)} />
                        </span>
                        <p className="text-white">Buku telah dibaca</p>
                    </div>
                    <div className="col-6 col-lg-3">
                        <span className={styles.count}>
                            <CountUp end={472092} duration={5} formattingFn={val => formatNumber(val)} />
                        </span>
                        <p className="text-white">Buku terunduh</p>
                    </div>
                    <div className="col-6 col-lg-3">
                        <span className={styles.count}>
                            <CountUp end={885} duration={5} formattingFn={val => formatNumber(val)} />
                        </span>
                        <p className="text-white">Buku tersedia</p>
                    </div>
                    <div className="col-6 col-lg-3">
                        <span className={styles.count}>
                            <CountUp end={16439} duration={5} formattingFn={val => formatNumber(val)} />
                        </span>
                        <p className="text-white">Buku lulus penilaian</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionStats