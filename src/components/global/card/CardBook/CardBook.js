import styles from "./CardBook.module.scss"

const CardBook = ({ image, title, typeBook, level }) => {
    return (
        <div className={`card shadow-sm border-0 h-100 mt-3 ${styles.card}`}>
            <div className="card-header" style={{ backgroundImage: 'url(/assets/image/home/ellipse-1.png)', backgroundRepeat: 'no-repeat', backgroundPositionY: 'bottom' }}>
                <img src={image} alt="books" className="w-75" />
            </div>
            <div className="card-body">

                {typeBook === 'audio' && (<span className="badge rounded-pill bg-success mt-2">Buku Audio</span>)}
                {typeBook === 'pdf' && (<span className="badge rounded-pill bg-danger mt-2">Buku PDF &nbsp;&nbsp;</span>)}
                <span className="badge rounded-pill bg-secondary mt-2 ms-1">{level}</span>

                <div className="my-2">{title}</div>
            </div>
        </div>
    )
}

export default CardBook