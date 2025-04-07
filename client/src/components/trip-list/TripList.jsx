import { useGetAllTrips } from "../../hooks/useTrips";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

import TripListItem from "./trip-list-item/TripListItem";
import Spinner from "../spinner/Spinner";

export default function TripList() {
    const { trips, isLoading } = useGetAllTrips();

    return (

        <section id="explore" className="explore">
            <div className="container">
                {trips.length > 0 && !isLoading && (
                    <div className="section-header">
                        <h2>Explore</h2>
                        <p>Discover fascinating places, culture, and much more in Bulgaria.</p>
                    </div>
                )}

                <div className="explore-content">
                    <div className="row">
                        {isLoading ? (
                            <div className="loading">
                                <Spinner />
                            </div>
                        ) : trips.length ? (
                            trips.map((trip) => (
                                <TripListItem
                                    key={trip._id}
                                    id={trip._id}
                                    name={trip.name}
                                    image={trip.image}
                                    location={trip.location}
                                    category={trip.category}
                                    price={trip.price}
                                />
                            ))
                        ) : (
                            <div className="no-trips">
                                <h2 className="section-header">No trips yet!</h2>
                                <p className="no-trips-text">Be the first to add an amazing trip experience.</p>
                                <FontAwesomeIcon icon={faFlag} size="5x" color="#888" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
