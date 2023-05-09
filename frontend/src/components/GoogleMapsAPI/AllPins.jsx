import { useMemo } from "react";
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import "./GoogleMapsAPI.css"
import { useSelector } from "react-redux";
import { getListings } from "../../store/listings";
import { useHistory } from "react-router-dom";

export default function AllPins() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })

    if(!isLoaded) return <div>Loading...</div>;
    return <Map />
}

function Map() {
    const listings = useSelector(getListings);
    const history = useHistory();

    const center = useMemo(() => ({lat: 37.8, lng: -122.4}), [])
    // const center = useMemo(() => ({lat: listing.latitude, lng: listing.longitude}), [])

    const handlePinClick = (listing) => {
        history.push(`/listings/${listing.id}`);
    }

    if(!listings){
        return null;
    }

    return(
        <>
        <GoogleMap
            zoom = {11}
            center ={center}
            mapContainerClassName="all-pins-map-container"
        >
        {listings.map((listing) =>
            <div>
                <MarkerF onClick={() => handlePinClick(listing)} position={{lat: listing.latitude, lng: listing.longitude}} key={listing.id} />
            </div>
        )}
        </GoogleMap>
        </>
    )
}
