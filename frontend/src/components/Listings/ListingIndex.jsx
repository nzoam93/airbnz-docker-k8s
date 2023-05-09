import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, getListings, clear_listings } from "../../store/listings";
import ListingIndexItem from "./ListingIndexItem";
import './Listing.css';
import AllPins from "../GoogleMapsAPI/AllPins";
import { useQueryParam, StringParam } from "use-query-params";



const ListingIndex = () => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings);
    const [showGoogleMap, setShowGoogleMap] = useState(false);

    //first argument: whatever comes after the ? in the search.
    //second argument: the data type imported at the top of the file. We do StringParam because our search is done as a string
    const [listingSearch, setListingSearch] = useQueryParam("search", StringParam);


    //clear the listings first so that the search can show only the ones that match the specified outcome
    useEffect(() => {
        dispatch(clear_listings());
        dispatch(fetchListings(listingSearch));
    }, [listingSearch, dispatch])

    const toggleMap = () => {
        setShowGoogleMap(!showGoogleMap)
        if(showGoogleMap){
            document.getElementById("show-map-words").innerHTML = "Show map";
        } else{
            document.getElementById("show-map-words").innerHTML= "Show items"
        }
    }


    return(
        <>
            {/* show the map if ShowGoogle Map is true  */}
            {showGoogleMap && (
                <div id="all-pins-holder">
                    <AllPins />
                </div>
            )}
            {/* show the listing if ShowGoogleMap is false  */}
            {!showGoogleMap && (
                <div id="all-listings">
                    {listings.map((listing) => <ListingIndexItem listing={listing} key={listing.id}/> )}
                </div>
            )}
            {/* Show an error message if there are no listings that match the criteria */}
            {Object.values(listings).length > 0 ?
            <div id="all-listings-map-container">
                <div onClick={toggleMap} id="all-listings-map" className="airbnz-button">
                    <p id="show-map-words">Show map</p>
                    <i className="fa-solid fa-map" />
                </div>
            </div>
            :
            // <p id="no-listings-message">There are no listings that match your search criteria.</p>
            <p id="no-listings-message"></p>
            }
        </>
    )
}

export default ListingIndex;
