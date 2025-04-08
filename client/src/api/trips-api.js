import * as fetcher from "./fetcher";

const BASE_URL = "http://localhost:3000/api/trips";

async function getAllTrips() {
    try {
        const result = await fetcher.get(BASE_URL);
        const trips = Object.values(result);
        return trips;
    } catch (error) {
        throw new Error("Failed to fetch trips.");
    }
}

function getOneTrip(tripId) {
    try {
        if (!tripId) {
            throw new Error("Trip Id is required");
        }
        const trip = fetcher.get(`${BASE_URL}/${tripId}/details`);
        return trip;
    } catch (error) {
        throw new Error("Failed to fetch trip details.");
        
    }
}

async function createTrip(tripData) {
    try {
        const createdTrip = await fetcher.post(`${BASE_URL}/create`, tripData);
        return createdTrip;
    } catch (error) {
        throw new Error("Failed to create trip.");
    }
}

//Check, if tripId needed
async function updateTrip(tripId, tripData) {
    try {
        if (!tripId) {
            throw new Error("Trip Id is required.");
        }
        const updatedTrip = await fetcher.put(`${BASE_URL}/${tripId}/edit`, tripData);
        return updatedTrip;
    } catch (error) {
        throw new Error("Failed to update trip.");
    }
}

//Check, if tripId needed
async function deleteTrip(tripId) {
    try {
        if (!tripId) {
            throw new Error("Trip Id is required.");
        }
        await fetcher.del(`${BASE_URL}/${tripId}/delete`);
    } catch (error) {
        throw new Error("Failed to delete trip.");
    }
}

export default {
    getAllTrips,
    getOneTrip,
    createTrip,
    updateTrip,
    deleteTrip,
};
