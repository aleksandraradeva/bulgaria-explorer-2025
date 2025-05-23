import { useState, useEffect } from "react";

import tripsApi from "../api/trips-api";

export function useGetAllTrips() {
    const [trips, setTrips] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const trips = await tripsApi.getAllTrips();
                setTrips(trips);
            } catch (err) {
                console.log(err.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return { trips, isLoading };
};


export function useGetOneTrip(tripId) {
    const [trip, setTrip] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        if (!tripId) return; 

        (async () => {
            try {
                setIsLoading(true);
                setError(null);
                const trip = await tripsApi.getOneTrip(tripId);
                setTrip(trip);
            } catch (err) {
                setError("No trip found!");
                setTrip(null);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [tripId]);

    return { trip, isLoading, error };
};


export function useCreateTrip() {
    const [isLoading, setIsLoading] = useState(false);

    const createTrip = async (tripData) => {
        try {
            setIsLoading(true);
            await tripsApi.createTrip(tripData);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { createTrip, isLoading };
};


export function useUpdateTrip() {
    const [isLoading, setIsLoading] = useState(false);

    const updateTrip = async (tripId, tripData) => {
        try {
            setIsLoading(true);
            await tripsApi.updateTrip(tripId, tripData);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { updateTrip, isLoading };
};


export function useDeleteTrip() {
    const [isLoading, setIsLoading] = useState(false);

    const deleteTrip = async (tripId) => {
        try {
            setIsLoading(true);
            await tripsApi.deleteTrip(tripId);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { deleteTrip, isLoading };
};


export function useMyTrips() {
    const [myTrips, setMyTrips] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      (async () => {
        try {
          setIsLoading(true);
          const myTrips = await tripsApi.getMyTrips();
          setMyTrips(myTrips);
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      })();
    }, []);
  
    return { myTrips, isLoading };
};


export function useMyWishlist() {
    const [myWishlist, setMyWishlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      (async () => {
        try {
          setIsLoading(true);
          const myWishlist = await tripsApi.getMyWishlist();
          setMyWishlist(myWishlist);
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      })();
    }, []);
  
    return { myWishlist, isLoading };
};