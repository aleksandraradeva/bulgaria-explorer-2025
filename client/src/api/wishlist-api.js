import * as fetcher from "./fetcher"; 

const BASE_URL = "http://localhost:3000/api/wishlist";

// Add to Wishlist
export async function addToWishlist(tripId) {
    try {
        const response = await fetcher.post(`${BASE_URL}/${tripId}/add`, { tripId });
        return response;
    } catch (error) {
        throw new Error("Failed to add to wishlist: " + error.message);
    }
}

// Remove from Wishlist
export async function removeFromWishlist(tripId) {
    try {
        const response = await fetcher.post(`${BASE_URL}/${tripId}/remove`, { tripId });
        return response;
    } catch (error) {
        throw new Error("Failed to remove from wishlist: " + error.message);
    }
}

// Get Wishlist
export async function getWishlist() {
    try {
        const response = await fetcher.get(`${BASE_URL}`);
        return response; 
    } catch (error) {
        throw new Error("Failed to load wishlist: " + error.message);
    }
}