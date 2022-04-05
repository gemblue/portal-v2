import styles from "./CardBook.module.scss"
const CardBook = ({ cover, title, audio, catalog }) => {
    return (
        <div className={`card shadow-sm border-0 ${styles.card}`}>
            <div className="card-body">
                <img src={cover} alt="" />

                {audio && (<span className="badge rounded-pill bg-success mt-2">Buku Audio</span>)}
                {!audio && (<span className="badge rounded-pill bg-danger mt-2">Buku PDF &nbsp;&nbsp;</span>)}
                {catalog && (<span className="badge rounded-pill bg-secondary mt-2 ms-1">SD KELAS II</span>)}

                <div className="my-2">{title}</div>
            </div>
        </div>
    )
}

export default CardBook