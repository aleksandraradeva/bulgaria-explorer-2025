import { useState, useEffect } from 'react';
import tripsApi from '../api/trips-api';

const useTrips = () => {
    const [trips, setTrips] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAllTrips = async () => {
            try {
                setIsLoading(true);
                const data = await tripsApi.getAllTrips();
                setTrips(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        getAllTrips();
    }, []);

    const getOneTrip = async (tripId) => {
        try {
            return await tripsApi.getOneTrip(tripId);
        } catch (err) {
            setError(err.message);
            return null;
        }
    };

    const createTrip = async (tripData) => {
        try {
            const newTrip = await tripsApi.createTrip(tripData);
            setTrips((prev) => [...prev, newTrip]);
        } catch (err) {
            setError(err.message);
        }
    };

    const updateTrip = async (tripId, tripData) => {
        try {
            const updated = await tripsApi.updateTrip(tripId, tripData);
            setTrips((prev) =>
                prev.map((trip) =>
                    trip._id === updated._id ? updated : trip
                )
            );
        } catch (err) {
            setError(err.message);
        }
    };

    const deleteTrip = async (tripId) => {
        try {
            await tripsApi.deleteTrip(tripId);
            setTrips((prev) => prev.filter((trip) => trip._id !== tripId));
        } catch (err) {
            setError(err.message);
        }
    };

    return {
        trips,
        isLoading,
        error,
        getOneTrip,
        createTrip,
        updateTrip,
        deleteTrip
    };
};

export default useTrips;