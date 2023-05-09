import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, getReservations } from "../../store/reservations";
import ReservationIndexItem from "./ReservationIndexItem";
import './Reservation.css';
import './ReservationIndexItem.css'

const ReservationIndex = () => {
    const dispatch = useDispatch();
    const reservations = useSelector(getReservations);

    useEffect(() => {
        dispatch(fetchReservations());
    }, [dispatch])


    return(
        <>
            <div id="reservations-container">
                {/* <div>Hello from reservations</div> */}
                {reservations.map((reservation) => <ReservationIndexItem reservation={reservation} key={reservation.id}/> )}
            </div>
        </>
    )
}

export default ReservationIndex;
