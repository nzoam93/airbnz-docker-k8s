import { useMemo } from "react";
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import "./GoogleMapsAPI.css"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getListing } from "../../store/listings";

export default function SinglePin() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })

    if(!isLoaded) return <div>Loading...</div>;
    return <Map />
}

function Map() {
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId));

    // const center = useMemo(() => ({lat: 37.8, lng: -122.3}), [])
    const center = useMemo(() => ({lat: listing.latitude, lng: listing.longitude}), [listing.latitude, listing.longitude])

    return(
        <>
        <GoogleMap
            zoom = {11}
            center ={center}
            mapContainerClassName="map-container"
        >
        <MarkerF position={{lat: listing.latitude, lng: listing.longitude}} />
        </GoogleMap>
        </>
    )
}
