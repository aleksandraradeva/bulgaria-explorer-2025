import { useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faTag, faCalendarAlt, faEuro, faHeart, faArrowLeft, faFlag } from "@fortawesome/free-solid-svg-icons";

import { useGetOneTrip, useDeleteTrip } from "../../hooks/useTrips";
import { useTripNavigation } from "../../hooks/useTripNavigation";
import Spinner from "../spinner/Spinner";

import { useContext } from "react";
import AuthContext from "../../context/AuthContext.jsx";

export default function TripDetails() {
    const { tripId } = useParams();
    const { trip, isLoading } = useGetOneTrip(tripId);
    const { deleteTrip } = useDeleteTrip(tripId);
    const [favorite, setFavorite] = useState(false);
    const { goToEdit, goToCatalog } = useTripNavigation();
    const { isAuthenticated, isAuthor } = useContext(AuthContext);


    const toggleFavorite = () => {
        setFavorite(!favorite);
    };

    return isLoading ? (
        <Spinner />
      ) : trip ? (
        <div className="trip-details-page">
            <div className="container">
                {/* Header Section */}
                <div className="section-header">
                    <h2>{trip.name}</h2>
                    <div className="trip-meta">
                        <p className="trip-location">
                            <FontAwesomeIcon icon={faMapPin} /> {trip.location}
                        </p>
                        <div className="trip-category">
                            <FontAwesomeIcon icon={faTag} /> {trip.category}
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="trip-body">
                    {/* Image Section */}
                    <div className="trip-image">
                        <div className="image-wrapper">
                            <img src={trip.image} alt={trip.name} />
                            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={toggleFavorite}>
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="trip-content">
                        <div className="trip-description">
                            <h3>About {trip.name}</h3>
                            <p>{trip.description}</p>
                        </div>

                        {/* Additional Information */}
                        <div className="additional-info">
                            <div className="info-item">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                <div className="info-content">
                                    <strong>Best Time to Visit:</strong>
                                    <span>{trip.bestTimeToVisit}</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <FontAwesomeIcon icon={faEuro} />
                                <div className="info-content">
                                    <strong>Entrance Fee:</strong>
                                    <span>{trip.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="trip-actions">
                        <button className="action-btn back-btn" onClick={() => goToCatalog()}>
                            <FontAwesomeIcon icon={faArrowLeft} /> Back to All Trips
                        </button>

                        {/* Display the Edit and Delete buttons only if the user is authenticated and is the author of the trip */}
                        {isAuthenticated && trip?.author && isAuthor(trip.author) && (
                            <div className="admin-actions">
                                <button className="action-btn edit-btn" onClick={() => goToEdit(trip._id)}>
                                    Edit
                                </button>
                                <button
                                    className="action-btn delete-btn"
                                    onClick={async () => {
                                        await deleteTrip(trip._id);
                                        goToCatalog();
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="no-trips">
            <h2 className="section-header">No trip found!</h2>
            <FontAwesomeIcon icon={faFlag} size="5x" color="#888" />
        </div>
    );
}