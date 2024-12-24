const Line = ({ textTitle }) => {
    return (
        <div>
            <p style={{ fontSize: '18px', margin: '0' }}>{textTitle}</p>
            <div className="line-container row" style={{ width: '100%', height: '2px' }}>
                <div className="blue col-3 " style={{ backgroundColor: '#49a010' }} />
                <div className="gray col-9 " style={{ backgroundColor: '#777575' }} />
            </div>


        </div>
    )
}
export default Line