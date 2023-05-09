// const ReviewRatingCalculator = () => {
//     const reviews = useSelector(getReviews);
//     const numReviews = reviews.length;

//     let reviewRatings = {};
//     reviewRatings["totalCleanlinessRating"] = 0;

//     // let totalCleanlinessRating = 0;
//     reviews.forEach((review) => {
//         reviewRatings["totalCleanlinessRating"] += review.cleanliness;
//     })
//     const avgCleanlinessRating = (Math.round((totalCleanlinessRating / numReviews) * 10) / 10) || 5.0;

//     let totalCommunicationRating = 0;
//     reviews.forEach((review) => {
//         totalCommunicationRating += review.communication;
//     })
//     const avgCommunicationRating = Math.round((totalCommunicationRating / numReviews) * 10) / 10;

//     let totalCheckinRating = 0;
//     reviews.forEach((review) => {
//         totalCheckinRating += review.checkIn;
//     })
//     const avgCheckinRating = Math.round((totalCheckinRating / numReviews) * 10) / 10;

//     let totalAccuracyRating = 0;
//     reviews.forEach((review) => {
//         totalAccuracyRating += review.accuracy;
//     })
//     const avgAccuracyRating = Math.round((totalAccuracyRating / numReviews) * 10) / 10;

//     let totalLocationRating = 0;
//     reviews.forEach((review) => {
//         totalLocationRating += review.location;
//     })
//     const avgLocationRating = Math.round((totalLocationRating / numReviews) * 10) / 10;

//     let totalValueRating = 0;
//     reviews.forEach((review) => {
//         totalValueRating += review.value;
//     })
//     const avgValueRating = Math.round((totalValueRating / numReviews) * 10) / 10;

//     let avgOverallRating = Math.round((avgCleanlinessRating + avgCommunicationRating + avgCheckinRating
//         + avgAccuracyRating + avgLocationRating + avgValueRating) / 6 * 10) / 10;

//     return
//     {avgOverallRating: }
//     avgOverallRating || 5;
// }

// export default ReviewRatingCalculator;
