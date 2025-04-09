import { useState, useEffect } from "react";
import { addTripToWishlist, removeTripFromWishlist, getWishlist } from "../api/wishlist-api"; // Your API functions


export function useWishlist(tripId, isAuthenticated) {
    const [isInWishlist, setIsInWishlist] = useState(false);

    // Check if the trip is already in the wishlist when the component loads
    useEffect(() => {
        if (isAuthenticated && tripId) {
            const checkWishlist = async () => {
                try {
                    const wishlist = await getWishlist();
                    setIsInWishlist(wishlist.some((item) => item._id === tripId));
                } catch (error) {
                    console.error("Error fetching wishlist:", error);
                }
            };
            checkWishlist();
        }
    }, [isAuthenticated, tripId]);

    // Add trip to wishlist
    const addTripToUserWishlist = async () => {
        if (!isInWishlist) {
            try {
                await addTripToWishlist(tripId);
                setIsInWishlist(true);
            } catch (error) {
                console.error("Error adding trip to wishlist:", error);
            }
        }
    };

    // Remove trip from wishlist
    const removeTripFromUserWishlist = async () => {
        if (isInWishlist) {
            try {
                await removeTripFromWishlist(tripId);
                setIsInWishlist(false);
            } catch (error) {
                console.error("Error removing trip from wishlist:", error);
            }
        }
    };

    return {
        isInWishlist,
        addTripToUserWishlist,
        removeTripFromUserWishlist,
    };
}
