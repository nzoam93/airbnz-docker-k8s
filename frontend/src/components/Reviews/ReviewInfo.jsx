import { useSelector } from "react-redux";
import { getReviews } from "../../store/reviews";

const ReviewInfo = () => {
    // const reviews = useSelector(getReviews);

    // const numReviews = reviews.length;
    // let totalRating = 0;
    // reviews.forEach((review) => {
    //     totalRating += review.starRating
    // })
    // const avgRating = totalRating / numReviews;

    const reviews = useSelector(getReviews);
    const numReviews = reviews.length;

    let totalCleanlinessRating = 0;
    reviews.forEach((review) => {
        totalCleanlinessRating += review.cleanliness;
    })
    const avgCleanlinessRatingString = totalCleanlinessRating ? (totalCleanlinessRating / numReviews).toFixed(1) : "5";
    const avgCleanlinessRating = parseFloat(avgCleanlinessRatingString)

    let totalCommunicationRating = 0;
    reviews.forEach((review) => {
        totalCommunicationRating += review.communication;
    })
    const avgCommunicationRatingString = totalCommunicationRating ? (totalCommunicationRating / numReviews).toFixed(1) : "5";
    const avgCommunicationRating = parseFloat(avgCommunicationRatingString);

    let totalCheckinRating = 0;
    reviews.forEach((review) => {
        totalCheckinRating += review.checkIn;
    })
    const avgCheckinRatingString = totalCheckinRating ? (totalCheckinRating / numReviews).toFixed(1) : "5";
    const avgCheckinRating = parseFloat(avgCheckinRatingString);

    let totalAccuracyRating = 0;
    reviews.forEach((review) => {
        totalAccuracyRating += review.accuracy;
    })
    const avgAccuracyRatingString = totalAccuracyRating ? (totalAccuracyRating / numReviews).toFixed(1) : "5";
    const avgAccuracyRating = parseFloat(avgAccuracyRatingString);

    let totalLocationRating = 0;
    reviews.forEach((review) => {
        totalLocationRating += review.location;
    })
    const avgLocationRatingString = totalLocationRating ? (totalLocationRating / numReviews).toFixed(1) : "5";
    const avgLocationRating = parseFloat(avgLocationRatingString);

    let totalValueRating = 0;
    reviews.forEach((review) => {
        totalValueRating += review.value;
    })
    const avgValueRatingString = totalValueRating ? (totalValueRating / numReviews).toFixed(1) : "5";
    const avgValueRating = parseFloat(avgValueRatingString);

    let avgOverallRating = Math.round((avgCleanlinessRating + avgCommunicationRating + avgCheckinRating
        + avgAccuracyRating + avgLocationRating + avgValueRating) / 6 * 10) / 10;

    return(
        <>
            <i className="fa-solid fa-star fa-0.5x" />
            <span id="price-span">{numReviews === 0 ? 5 : avgOverallRating} • <a className="underline" href="#reviews-show">{reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}</a> </span>
        </>
    )
}

export default ReviewInfo;
