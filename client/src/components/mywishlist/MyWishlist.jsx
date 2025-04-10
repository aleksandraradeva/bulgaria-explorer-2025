import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useMyWishlist } from "../../hooks/useTrips";

import Spinner from "../spinner/Spinner";

export default function MyWishlist() {
    const { myWishlist, isLoading } = useMyWishlist();
    console.log(myWishlist)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date);
    };

    
    if (isLoading) return <Spinner />;

    return (
        <div className="my-wishlist-page">
            {myWishlist.length === 0 ? (
                <div className="no-wishlist">
                    <h2>You haven't added any trips to your wishlist yet.</h2>
                    <Link to={"/trips"} className="browse-trips-btn">
                        Explore Trips
                    </Link>
                </div>
            ) : (
                myWishlist.map((trip) => (
                    <div key={trip._id} className="my-trip-card">
                        <div className="trip-header">
                            <div className="trip-thumbnail-container">
                                <img className="trip-thumbnail" src={trip.image} alt={trip.name} />
                            </div>
                            <div>
                                <h3 className="trip-name">{trip.name}</h3>
                                <p className="trip-date">
                                    Added on {formatDate(trip.createdAt)}
                                </p>
                            </div>
                            <div className="trip-actions">
                                {/* Add the "Remove from Wishlist" button */}
                                <button
                                    className="remove-btn"
                                    onClick={() => removeTripFromUserWishlist(trip._id)}
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                    Remove from Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
