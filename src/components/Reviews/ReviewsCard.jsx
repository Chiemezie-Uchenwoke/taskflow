const ReviewsCard = ({fullname, role, imgUrl, imgAlt, review, rating}) => {
    return (
        <div>
            <div>
                <div>
                    <img src={imgUrl} alt={imgAlt} />
                </div>

                <div>
                    <h3>
                        {fullname}
                    </h3>

                    <p>
                        {role}
                    </p>
                </div>
            </div>

            <p>
                {review}
            </p>

            <p>
                {rating}
            </p>
        </div>
    )
}

export default ReviewsCard;