import * as fetcher from "./fetcher";

const BASE_URL = "http://localhost:3000/api/wishlist";

// Add trip to wishlist
export async function addTripToWishlist(tripId) {
    try {
        const result = await fetcher.post(`${BASE_URL}/${tripId}/add`);
        return result;
    } catch (error) {
        throw new Error("Failed to add trip to wishlist: " + error.message);
    }
}

// Remove trip from wishlist
export async function removeTripFromWishlist(tripId) {
    try {
        const result = await fetcher.post(`${BASE_URL}/${tripId}/remove`);
        return result;
    } catch (error) {
        throw new Error("Failed to remove trip from wishlist: " + error.message);
    }
}

// Get the wishlist
export async function getWishlist() {
    try {
        const result = await fetcher.get(BASE_URL);
        return result;
    } catch (error) {
        throw new Error("Failed to get wishlist: " + error.message);
    }
}