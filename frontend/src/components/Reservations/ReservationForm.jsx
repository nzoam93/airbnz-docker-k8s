import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getListing } from "../../store/listings";
import { createReservation } from "../../store/reservations";
import AirbnzCalendar from "../AirbnzCalendar"
import ReviewInfo from "../Reviews/ReviewInfo";
import "./Reservation.css"

const ReservationForm = () => {
    const dispatch = useDispatch();
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId));
    const [checkinDate, setCheckinDate] = useState();
    const [checkoutDate, setCheckoutDate] = useState();
    const [numGuests, setNumGuests] = useState(1);

    //increment and decrement buttons
    const handleSubtract = (e) => {
        e.preventDefault();
        if(numGuests > 1){
            setNumGuests(numGuests - 1)
        }
    }

    const handleAdd = (e) => {
        e.preventDefault();
        if(numGuests < listing.numGuests){
            setNumGuests(numGuests + 1)
        }
    }

    //using time function from calendar and JS Date object
    let checkInTime;
    let checkoutTime;
    let daysElapsed = 1;
    if(checkinDate){
        checkInTime = new Date(checkinDate._d).getTime();
    }
    if(checkoutDate){
        checkoutTime = new Date(checkoutDate._d).getTime();
    }
    if(checkinDate && checkoutDate){
        daysElapsed = Math.round((checkoutTime - checkInTime) / 1000 / 60 / 60 / 24)
    }

    //prices for listing
    const visitCost = Math.round(listing.price * daysElapsed);
    let discount;
    if(daysElapsed && daysElapsed > 5){
        discount = Math.round(listing.price * 0.1 * daysElapsed);
    }
    else{
        discount = 0
    }
    const cleaningFee = Math.round(listing.price * 0.08);
    const serviceFee = Math.round(listing.price * 0.05);
    const totalPrice = visitCost - discount + cleaningFee + serviceFee;

    //allows the backend to know who made the reservation
    const sessionUser = useSelector(state => state.session.user);

    //upon submission of the form
    const handleSubmit = async (e) => {
        // e.preventDefault();
        const data = {
            check_in_date: checkinDate,
            check_out_date: checkoutDate,
            num_guests: numGuests,
            reserver_id: sessionUser.id,
            listing_id: listingId
        }
        dispatch(createReservation(data));
    }

    //Display different buttons dependent on the condition
    const reserveButton = () => {
        if(!sessionUser){
            return (
                <a id="reserve-button"  href="#profile-button-hamburger" className="airbnz-button">Please log in to Reserve</a>
            )
        } else {
            if(checkinDate && checkoutDate && numGuests){
                return(
                    <Link to={`/users/${sessionUser.id}`}>
                        <button id="reserve-button" className="airbnz-button" onClick={handleSubmit}>Reserve</button>
                    </Link>
                )
            }
            else {
                return(
                    <button id="reserve-button" className="airbnz-button">Reserve</button>
                )
            }
        }
    }

    //rendering on the page
    return(
        <div id="right-show">
            <div id="preliminary-right-info-show">
                <li className="bold price-show">${listing.price} <span id="price-span"> night</span></li>
                <div>
                    <ReviewInfo />
                </div>
            </div>
            <div id="checkin-info" className="bold">
                <div id="checkin-container">
                    <div className="check-in-label-container">
                        <p className="label-check-in">CHECK-IN</p>
                        <p id="label-check-out">CHECK-OUT</p>
                    </div>
                    <div id="reservation-calendar">
                        <AirbnzCalendar
                            checkinDate = {checkinDate}
                            checkoutDate = {checkoutDate}
                            setCheckinDate = {setCheckinDate}
                            setCheckoutDate = {setCheckoutDate}
                        />
                    </div>
                </div>
                <div id="guests-container">
                    <p id="guests-word-container">Guests</p>
                    <div id="guests-incrementer">
                        <i onClick={handleSubtract} className="fa-solid fa-minus num-guests-button" />
                        <p id="num-of-guests"> {numGuests} </p>
                        <i onClick={handleAdd} className="fa-solid fa-plus num-guests-button" />
                    </div>
                </div>
            </div>
            <div id="reserve-button-container">
                {reserveButton()}
            </div>
            <li id="charge-show">You won't be charged yet</li>
            <div id="price-info-show">
                <div className="price-info-item-show">
                    <li className="underline">${listing.price} x {daysElapsed} nights</li>
                    <li>${visitCost}</li>
                </div>
                <div className="price-info-item-show">
                    <li className="underline">Long stay discount</li>
                    {daysElapsed <= 5 ?
                    <li>N/A</li>
                    : <li>-${discount}</li>
                    }
                </div>
                <div className="price-info-item-show">
                    <li className="underline">Cleaning fee</li>
                    <li>${cleaningFee}</li>
                </div>
                <div className="price-info-item-show">
                        <li className="underline">Service fee</li>
                        <li>${serviceFee}</li>
                </div>
                <div className="price-info-item-show bold" id="total-show">
                    <li>Total before taxes</li>
                    <li>${totalPrice}</li>
                </div>
            </div>
        </div>
    )
}

export default ReservationForm;
