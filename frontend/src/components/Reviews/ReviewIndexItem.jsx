import React, { useState } from "react"; //do I need to still include this line?
import { useDispatch, useSelector } from "react-redux";
import assetImg from "../Listings/houseimgs/airbnzphoto.jpg"
import { deleteReview } from '../../store/reviews.js';
import ReviewFormEdit from "./ReviewFormEdit";



const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    let activeUser;
    if (sessionUser) {
        activeUser = sessionUser.username;
    } else {
        activeUser = null;
    }


    const[showReviewFormEdit, setShowReviewFormEdit] = useState(false);
    const toggleReviewForm = () => {
        setShowReviewFormEdit(!showReviewFormEdit);
    }

    const defaultProfileImg = <img src={assetImg} alt="house"/>

    const handleDelete = () => {
        dispatch(deleteReview(review.id))
    }

    return(
        <>
            <div id="review-container">
                <div id="user-review-info">
                    {review.profilePic ?
                        <div id="profile-img"><img src={review.profilePic} alt="profilePic" /></div>
                        :
                        <div id="profile-img">{defaultProfileImg}</div>
                    }
                    <div id="username-and-time">
                        <div id="review-username">{review.username}</div>
                        <div id="review-time">{review.createDate}</div>
                    </div>
                </div>
                <div id="review-body">{review.body}</div>

                {/* <div id="review-stars">{review.starRating} stars</div> */}

                {/* only show if the current user is the one that made the review */}
                {activeUser === review.username ?
                <div id="review-button-container">
                    <div className="review-button" id="edit-review-button" onClick={toggleReviewForm}>Edit Review</div>
                    <div className="review-button" onClick={handleDelete}>Delete Review</div>
                </div> : ""
                }
            {showReviewFormEdit ? <ReviewFormEdit review = {review} setShowReviewFormEdit = {setShowReviewFormEdit}/> : ""}
            </div>
        </>
    )
}

export default ReviewIndexItem;
