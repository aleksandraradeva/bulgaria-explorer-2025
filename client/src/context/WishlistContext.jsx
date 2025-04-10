import { createContext, useEffect, useState } from "react";

import * as wishlistApi from "../api/wishlist-api";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const fetchWishlist = async () => {
    try {
      const data = await wishlistApi.getWishlist();
      setWishlist(data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  const isInWishlist = (tripId) => {
    return wishlist.some((trip) => trip._id === tripId);
  };

  const addToWishlist = async (tripId) => {
    try {
      await wishlistApi.addTripToWishlist(tripId);
      fetchWishlist();
    } catch (err) {
      console.error("Add to wishlist error:", err);
    }
  };

  const removeFromWishlist = async (tripId) => {
    try {
      await wishlistApi.removeTripFromWishlist(tripId);
      fetchWishlist();
    } catch (err) {
      console.error("Remove from wishlist error:", err);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlist, isInWishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;