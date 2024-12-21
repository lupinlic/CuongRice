import { Link } from 'react-router-dom';
const News = ({ imgUrl, textTitle, textContent }) => {
    return (
        <div style={{ marginLeft: '12px' }}>
            <div className="row bg-white new-child">
                <div className="col-md-4">
                    <img src={imgUrl} style={{ widows: '100%' }} />
                </div>
                <div className="col-md-8 d-flex flex-column align-items-center justify-content-center p-3">
                    <h5>{textTitle}</h5>
                    <p>{textContent}</p>
                    <Link>Xem thêm</Link>
                </div>


            </div>
        </div>
    )
}
export default News