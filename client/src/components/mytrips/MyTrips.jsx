import { Link } from "react-router-dom";
import { useState } from "react";
import { useMyTrips } from "../../hooks/useTrips";
import { useTripNavigation } from "../../hooks/useTripNavigation";
import { useDeleteTrip } from "../../hooks/useTrips";

import Spinner from "../spinner/Spinner";
import ConfirmModal from "../common/ConfirmModal";

export default function MyTrips() {
    const { myTrips, isLoading } = useMyTrips();
    const { goToEdit, goToCatalog } = useTripNavigation();
    const { deleteTrip } = useDeleteTrip();
    const [showConfirmModal, setShowConfirmModal] = useState(null); 

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date);
    };

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    };

    if (isLoading) return <Spinner />;

    return (
        <div className="my-trips-page">
            {myTrips.length === 0 ? (
                <div className="no-trips">
                    <h2>You haven't created any trips yet.</h2>
                    <Link to={"/trips/create"} className="create-trip-btn">
                        Create New Trip
                    </Link>
                </div>
            ) : (
                myTrips.map((trip) => (
                    <div key={trip._id} className="my-trip-card">
                        <div className="trip-header">
                            <div className="trip-thumbnail-container">
                                <img className="trip-thumbnail" src={trip.image} alt={trip.name} />
                            </div>
                            <div>
                                <h3 className="trip-name">{trip.name}</h3>
                                <p className="trip-date">
                                    Created on {formatDate(trip.createdAt)} at {formatTime(trip.createdAt)}
                                </p>
                            </div>
                            <div className="trip-actions">
                                <button className="edit-btn" onClick={() => goToEdit(trip._id)}>
                                    Edit
                                </button>
                                <button className="delete-btn" onClick={() => setShowConfirmModal(trip._id)}>
                                    Delete
                                </button>
                            </div>

                            {/* Modal */}
                            {showConfirmModal === trip._id && (
                                <ConfirmModal
                                    message="Are you sure you want to delete this trip?"
                                    onConfirm={async () => {
                                        await deleteTrip(trip._id);
                                        setShowConfirmModal(null); 
                                        goToCatalog();
                                    }}
                                    onCancel={() => setShowConfirmModal(null)}
                                />
                            )}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
