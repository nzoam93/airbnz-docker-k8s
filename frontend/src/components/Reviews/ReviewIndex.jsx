import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, getReviews } from "../../store/reviews";
import ReviewIndexItem from "./ReviewIndexItem";
import './Review.css';
// import './ReviewIndex.css'
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import ReviewProgressBar from "./ReviewProgressBar";

const ReviewIndex = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews);
    const {listingId} = useParams();

    const sessionUser = useSelector(state => state.session.user)

    const [showReviewForm, setShowReviewForm] = useState(false)
    const toggleReviewForm = () => {
        setShowReviewForm(!showReviewForm);
    }

    useEffect(() => {
        dispatch(fetchReviews(listingId));
    }, [listingId, dispatch])

    if(!reviews){
        return null;
    }

    return(
        <>


            <ReviewProgressBar/>

            {/* the button only appears if the user is signed in  */}
            {sessionUser ?
            <div className="review-button" onClick={toggleReviewForm}>Write a review</div>
            :
            <div id="log-in-to-review">
                <a href="#profile-button-hamburger" className="underline">Please log in to leave a review</a>
            </div>
            }
            {/* only appear if user clicks the toggleReviewForm button above */}
            {showReviewForm ? < ReviewForm setShowReviewForm = {setShowReviewForm}/> : ""}

            <div id="all-reviews">
                {reviews.map((review) => <ReviewIndexItem review={review} key={review.id}/> )}
            </div>
        </>
    )
}

export default ReviewIndex;
