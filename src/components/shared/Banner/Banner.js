const Banner = ({ textTitle, textContent }) => {
    return (
        <div className="darkened-div">
            <div className="overlay" />
            <div>
                <h4>{textTitle}</h4>
                <p>
                    {textContent}
                </p>
            </div>

        </div>
    )
}
export default Banner