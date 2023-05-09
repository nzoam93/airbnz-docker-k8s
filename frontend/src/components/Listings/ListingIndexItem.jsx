import React from "react"; //do I need to still include this line?
import { Link } from "react-router-dom";
import assetImg from "./houseimgs/airbnzphoto.jpg"



const ListingIndexItem = ({listing}) => {
    const houseImg = <img src={assetImg} alt="house"/>


    return(
        <>
            <Link to={`/listings/${listing.id}`} id="listing-index-item">
                <div id="house-img"><img src={listing.photoUrls[0]} alt="house" /></div>

                {/* <div id="house-img">{houseImg}</div> */}

                <ul id="listing-info">
                    <li className="bold">{listing.city}, {listing.state}</li>
                    <li id="airbnz-info-second-line">{listing.numBeds} bedroom • {listing.numBaths} bath</li>
                    <li className="bold">${listing.price} <span className="nonbold"> night</span></li>
                </ul>
            </Link>
        </>
    )
}

export default ListingIndexItem;
