import * as fetcher from "./fetcher";

const BASE_URL = 'http://localhost:3000/api/trips';

async function getAllTrips () {
    const result = await fetcher.get(BASE_URL);
    const trips = Object.values(result);

    return trips;

}

async function getOneTrip (tripId) {
    const trip = await fetcher.get(`${BASE_URL}/${tripId}/details`);

    return trip;
    
}

async function createTrip (tripData) {
    const createdTrip = await fetcher.post(`${BASE_URL}/create`, tripData);

    return createdTrip;
    
}

//Check, if tripId needed
async function updateTrip (tripData) {
    const updatedTrip = await fetcher.put(`${BASE_URL}/${tripId}/edit`, tripData);

    return updatedTrip;
    
}

//Check, if tripId needed
async function deleteTrip () {
    const deletedTrip = await fetcher.del(`${BASE_URL}/${tripId}/delete`);

    return deletedTrip;
    
}

export default {
    getAllTrips,
    getOneTrip,
    createTrip,
    updateTrip,
    deleteTrip
};
