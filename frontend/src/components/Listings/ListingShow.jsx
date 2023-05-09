import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
import assetImg from "./houseimgs/airbnzphoto.jpg"
import ReservationForm from "../Reservations/ReservationForm";
import "./ListingShow.css"
import ReviewIndex from "../Reviews/ReviewIndex";
import ReviewInfo from "../Reviews/ReviewInfo";
import SinglePin from "../GoogleMapsAPI/SinglePin";

const ListingShow = () => {
    const dispatch = useDispatch();
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId));

    const houseImg = <img src={assetImg} alt="house"/>

    useEffect(() => {
        dispatch(fetchListing(listingId));
    }, [listingId, dispatch])

    //have the window scroll to the top upon loading
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])


    //wait for listing to be defined before doing the return. Basically, break early so you don't try to return listing.something without it being in state
    if(!listing) {
        return null;
    }

    // const scavengerHuntKey = () => {
    //     document.getElementById("scavenger-key-task").style.color = "green";
    //     console.log("hi");
    // }

    return(
        <div id="show-page">
            {/* {console.log("hi from show page")} */}
            <h5 className="bold" id="listing-title">{listing.title}</h5>
            <div id="second-line-on-show">
                <li>
                    <ReviewInfo />
                    {"•" } {listing.city}, {listing.state}, United States
                </li>
                {/* <li> Share Save</li> */}
            </div>
            <div id="photos-container">
                {/* <div className="item1 grid-img">{houseImg}</div>
                <div className="item2 grid-img">{houseImg}</div>
                <div className="item3 grid-img">{houseImg}</div>
                <div className="item4 grid-img">{houseImg}</div>
                <div className="item5 grid-img">{houseImg}</div> */}
                <div className="item1 grid-img"><img src={listing.photoUrls[0]} alt="house" /></div>
                <div className="item2 grid-img"><img src={listing.photoUrls[1]} alt="room1" /></div>
                <div className="item3 grid-img"><img src={listing.photoUrls[2]} alt="room2" /></div>
                <div className="item4 grid-img"><img src={listing.photoUrls[3]} alt="room3" /></div>
                <div className="item5 grid-img"><img src={listing.photoUrls[4]} alt="room4" /></div>
            </div>
            <div id="more-info-show">
                <div id="left-show">
                    <div id="preliminary-info-show">
                        <div>
                            <p className="title-show">Entire home hosted by {listing.ownerName}</p>
                            <p>{listing.numGuests} guests • {listing.numBeds} bedrooms • {listing.numBaths} bathrooms</p>
                        </div>
                        {/* <div id="profile-picture-show">{houseImg}</div> */}
                        <div id="profile-picture-show"><img src={listing.profileImg} alt="profile-img" /></div>
                    </div>
                    <div id="specialties-show">
                        <i className="fa-solid fa-wifi show-page-icon" /> Fast Wifi <br />
                        <i className="fa-solid fa-key show-page-icon" /> Great check-in experience <br />
                        {/* <i onMouseOver={scavengerHuntKey} className="fa-solid fa-key show-page-icon" /> Great check-in experience <br /> */}
                        <i className="fa-solid fa-star show-page-icon" /> Experienced host <br />
                    </div>
                    <div id="description-show">
                        {listing.description}
                    </div>
                    <div id="offerings-show">
                        <h4 className="title-show">What this airbNZ offers</h4>
                        <div id="all-offerings-show">
                            <div id="left-offerings-show">
                                <i className="fa-solid fa-utensils show-page-icon" /> Kitchen <br />
                                <i className="fa-solid fa-mountain show-page-icon" /> Mountain Views <br />
                                <i className="fa-solid fa-person-swimming show-page-icon" /> Private Pool <br />
                            </div>
                            <div id="right-offerings-show">
                                <i className="fa-solid fa-dog show-page-icon" /> Pet Friendly <br />
                                <i className="fa-solid fa-wind show-page-icon" /> Air Conditioning <br />
                                <i className="fa-solid fa-car show-page-icon" /> Free parking <br />
                            </div>
                        </div>
                    </div>
                    <div id="reviews-show">
                        <ReviewIndex />
                    </div>
                </div>

                <ReservationForm />
            </div>

            <div id="map-container-on-show">
                <p className="title-show bold">Where you'll be</p>
                <div id="listing-map">
                    <SinglePin />
                </div>
            </div>
        </div>
    )
}

export default ListingShow;
