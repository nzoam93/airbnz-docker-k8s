import { useEffect } from "react";
import { Calendar } from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchReview, getReview } from "../../store/reviews";

const ReviewShow = () => {
    const dispatch = useDispatch();
    const {reviewId} = useParams();
    const review = useSelector(getReview(reviewId));

    useEffect(() => {
        dispatch(fetchReview(reviewId));
    }, [reviewId, dispatch])


    //wait for review to be defined before doing the return. Basically, break early so you don't try to return review.something without it being in state
    if(!review) {
        return null;
    }


    return(
        <>
        </>
    )
}

export default ReviewShow;
