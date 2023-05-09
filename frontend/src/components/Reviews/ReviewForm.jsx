import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from '../../store/reviews.js';
import "./Review.css"

const ReviewForm = ({setShowReviewForm}) => {
    const dispatch = useDispatch();
    const {listingId} = useParams();
    const [body, setBody] = useState("");
    const [cleanliness, setCleanliness] = useState(3);
    const [communication, setCommunication] = useState(3);
    const [checkIn, setCheckIn] = useState(3);
    const [accuracy, setAccuracy] = useState(3);
    const [location, setLocation] = useState(3);
    const [value, setValue] = useState(3);

    //this allows the backend to know who made the review
    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            body,
            cleanliness,
            communication,
            check_in: checkIn,
            accuracy,
            location,
            value,
            reviewer_id: sessionUser.id,
            listing_id: listingId
        }
        dispatch(createReview(data));
        setShowReviewForm(false); //close the form
    }

    return(
        <div id="review-form-container">
            <form id="review-form" onSubmit={handleSubmit}>
                <textarea
                    id="review-body-form"
                    placeholder="Write your review here"
                    value={body}
                    cols="30" rows="10"
                    onChange={(e) => setBody(e.target.value)}
                />
                <br />
                <div className="star-rating-container">
                    <p>Cleanliness</p>
                    <div className="star-rating">
                        <input
                            type="range" min="1" max="5"
                            value={cleanliness}
                            onChange={(e) => setCleanliness(e.target.value)}
                        />
                        <p>{cleanliness}</p>
                        <i className="fa-solid fa-star fa-0.5x" />
                        <br />
                    </div>
                </div>

                <div className="star-rating-container">
                    <p>Communication</p>
                    <div className="star-rating">
                        <input
                            type="range" min="1" max="5"
                            value={communication}
                            onChange={(e) => setCommunication(e.target.value)}
                        />
                        <p>{communication}</p>
                        <i className="fa-solid fa-star fa-0.5x" />
                        <br />
                    </div>
                </div>

                <div className="star-rating-container">
                    <p>Check-in</p>
                    <div className="star-rating">
                        <input
                            type="range" min="1" max="5"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                        />
                        <p>{checkIn}</p>
                        <i className="fa-solid fa-star fa-0.5x" />
                        <br />
                    </div>
                </div>

                <div className="star-rating-container">
                    <p>Accuracy</p>
                    <div className="star-rating">
                        <input
                            type="range" min="1" max="5"
                            value={accuracy}
                            onChange={(e) => setAccuracy(e.target.value)}
                        />
                        <p>{accuracy}</p>
                        <i className="fa-solid fa-star fa-0.5x" />
                        <br />
                    </div>
                </div>

                <div className="star-rating-container">
                    <p>Location</p>
                    <div className="star-rating">
                        <input
                            type="range" min="1" max="5"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <p>{location}</p>
                        <i className="fa-solid fa-star fa-0.5x" />
                        <br />
                    </div>
                </div>

                <div className="star-rating-container">
                    <p>Value</p>
                    <div className="star-rating">
                        <input
                            type="range" min="1" max="5"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <p>{value}</p>
                        <i className="fa-solid fa-star fa-0.5x" />
                        <br />
                    </div>
                </div>

                <button id="submit-review-button">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;
