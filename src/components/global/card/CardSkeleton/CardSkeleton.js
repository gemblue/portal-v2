import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = () => {
    return (
        <div className="card shadow border-0 mt-3">
            <div className="card-body">
                <Skeleton height={200} borderRadius={10} />
                <div className="row mt-2">
                    <div className="col-5">
                        <Skeleton />
                    </div>
                    <div className="col-5">
                        <Skeleton />
                    </div>
                </div>
                <Skeleton count={2} />
            </div>
        </div>
    )
}

export default CardSkeleton