import styles from "./CardBook.module.scss"

const CardBook = ({ image, title, typeBook, level }) => {
    return (
        <div className={`card shadow-sm border-0 h-100 mt-3 ${styles.card}`}>
            <div className="card-header text-center" style={{ backgroundImage: 'url(/assets/image/home/ellipse-1.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
                <img src={image || '/assets/image/catalog/book-placeholder.jpg'} alt={title} className={styles['img-size']} />
            </div>
            <div className="card-body">

                {typeBook === 'pdf' && (<span className="badge rounded-pill bg-danger mt-2">PDF</span>)}
                {typeBook === 'audio' && (<span className="badge rounded-pill bg-success mt-2">Audio</span>)}
                {typeBook === 'interactive' && (<span className="badge rounded-pill bg-primary mt-2">Interaktif</span>)}
                <span className="badge rounded-pill bg-secondary mt-2 ms-1">{level}</span>

                <div className="my-2">{title}</div>
            </div>
        </div>
    )
}

export default CardBook