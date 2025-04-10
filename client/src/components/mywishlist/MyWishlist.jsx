import { useContext } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import WishlistContext from "../../context/WishlistContext";

import Spinner from "../spinner/Spinner";

export default function MyWishlist() {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);
    const isLoading = !wishlist;

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
            {wishlist.length === 0 ? (
                <div className="no-wishlist">
                    <h2>You haven't added any trips to your wishlist yet.</h2>
                    <Link to={"/trips"} className="empty-btn">
                        Explore Trips
                    </Link>
                </div>
            ) : (
                wishlist.map((trip) => (
                    <div key={trip._id} className="my-trip-card">
                        <div className="trip-header">
                            <div className="trip-thumbnail-container">
                                <img className="trip-thumbnail" src={trip.image} alt={trip.name} />
                            </div>
                            <div>
                                <h3 className="trip-name">{trip.name}</h3>
                                <p className="trip-date">Added on {formatDate(trip.createdAt)}</p>
                                <p
                                    className="trip-date"
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "1.125rem",
                                        color: "#ee7571",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    ✨ Why BulgariaExplorer adventurers LOVE this destination! ✨
                                </p>

                                <p
                                    className="trip-description"
                                    style={{
                                        fontStyle: "italic",
                                        backgroundColor: "#eff6ff",
                                        padding: "0.75rem",
                                        borderRadius: "0.5rem",
                                        borderLeft: "10px solid #ff5a5f",
                                        color: "#374151",
                                        lineHeight: "1.6",
                                        wordWrap: "break-word",
                                        maxWidth: "50ch", // Wrap after ~25 characters
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    "{trip.description}"
                                </p>
                            </div>
                            <div className="trip-actions">
                                {/* Add the "Remove from Wishlist" button */}
                                <button className="remove-btn" onClick={() => removeFromWishlist(trip._id)}>
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
