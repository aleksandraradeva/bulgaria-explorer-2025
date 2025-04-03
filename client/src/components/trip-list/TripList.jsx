import TripListItem from "./trip-list-item/TripListItem";
import tripsApi from "../../api/trips-api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";



export default function TripList() {

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        (async () => {
            const trips = await tripsApi.getAllTrips();
            setTrips(trips);
        })();
    },[])

    return (
        <section id="explore" className="explore">
            <div className="container">
                <div className="section-header">
                    <h2>Explore</h2>
                    <p>Discover fascinating places, culture, and much more in Bulgaria.</p>
                </div>

                <div className="explore-content">
                    <div className="row">
                        {trips.length 
                        ? (trips.map((trip) => <TripListItem key={trip._id} name={trip.name} image={trip.image} location={trip.location} category={trip.category} price={trip.price} />)) 
                        : (<div className="no-trips">
                        <h2 className="section-header">No trips yet!</h2>
                        <p className="no-trips-text">Be the first to add an amazing trip experience.</p>
                        <FontAwesomeIcon icon={faFlag} size="5x" color="#888" />
                        </div>)
                        }
                    </div>
                </div>

                
            </div>
        </section>
    );
}
