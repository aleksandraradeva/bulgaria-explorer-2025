import { useMyTrips } from "../../hooks/useTrips";
import Spinner from "../spinner/Spinner";

export default function MyTrips() {
    const { myTrips, isLoading } = useMyTrips();

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
        return date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });
    };

    if (isLoading) return <Spinner />;

    return (
        <div className="my-trips-page">
            
            {myTrips.length === 0 ? (
                <div className="no-trips">
                    <p>You haven't created any trips yet.</p>
                    <button className="create-trip-btn">Create New Trip</button>
                </div>
            ) : (
                myTrips.map((trip) => (
                    <div key={trip._id} className="my-trip-card">
                        <div className="trip-header">
                        <div className="trip-thumbnail-container">
                                <img
                                    className="trip-thumbnail"
                                    src={trip.image}
                                    alt={trip.name}
                                />
                            </div>
                            <div>
                                <h3 className="trip-name">{trip.name}</h3>
                                <p className="trip-date">
                                    Created on {formatDate(trip.createdAt)} at {formatTime(trip.createdAt)}
                                </p>
                            </div>
                            <div className="trip-actions">
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
