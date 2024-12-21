const Circle = ({ imgUrl, textTitle, textContent }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className='review-circle' style={{ width: '80px', height: '80px' }}>
                <div className='circle'>

                </div>
                <div className='circle'>
                    <img src={imgUrl} />
                </div>
                <div className='circle'></div>
                <div className='circle'></div>

            </div>
            <h4>{textTitle}</h4>
            <p style={{ textAlignLast: 'center' }}>{textContent}</p>
        </div>
    )
}
export default Circle