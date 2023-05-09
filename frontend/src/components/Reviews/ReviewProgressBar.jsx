import { useSelector } from "react-redux";
import { getReviews } from "../../store/reviews";
import "./ReviewProgressBar.css"
// import ReviewRatingCalculator from "./ReviewRatingCalculator";


const ReviewProgressBar = () => {
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
            <div className="title-show">
                <i className="fa-solid fa-star show-page-icon" />
                {numReviews === 0 ? 5 : avgOverallRating} •
                {" "}
                {numReviews}
                {numReviews === 1 ? ' Review' : ' Reviews'}
            </div>

            <div id="progress-container">
                <div className="progress-item">
                    <label htmlFor="cleanliness">Cleanliness</label>
                    <div id="progress-rating">
                        <progress id="cleanliness" value={avgCleanlinessRating} max="5"></progress>
                        <p>{avgCleanlinessRatingString}</p>
                    </div>
                </div>
                <div className="progress-item">
                    <label htmlFor="accuracy">Accuracy</label>
                    <div id="progress-rating">
                        <progress id="accuracy" value={avgAccuracyRating} max="5"></progress>
                        <p>{avgAccuracyRatingString}</p>
                    </div>
                </div>
                <div className="progress-item">
                    <label htmlFor="communication">Communication</label>
                    <div id="progress-rating">
                        <progress id="communication" value={avgCommunicationRating} max="5"></progress>
                        <p>{avgCommunicationRatingString}</p>
                    </div>
                </div>
                <div className="progress-item">
                    <label htmlFor="location">Location</label>
                    <div id="progress-rating">
                        <progress id="location" value={avgLocationRating} max="5"></progress>
                        <p>{avgLocationRatingString}</p>
                    </div>
                </div>
                <div className="progress-item">
                    <label htmlFor="checkIn">Check-in</label>
                    <div id="progress-rating">
                        <progress id="checkIn" value={avgCheckinRating} max="5"></progress>
                        <p>{avgCheckinRatingString}</p>
                    </div>
                </div>
                <div className="progress-item">
                    <label htmlFor="value-rating">Value</label>
                    <div id="progress-rating">
                        <progress id="value-rating" value={avgValueRating} max="5"></progress>
                        <p>{avgValueRatingString}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewProgressBar;
