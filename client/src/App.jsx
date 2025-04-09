import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

import PrivateRoute from "./guards/PrivateRoute";
import GuestRoute from "./guards/GuestRoute";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import TripList from "./components/trip-list/TripList";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import TripCreate from "./components/trip-create/TripCreate";
import TripDetails from "./components/trip-details/TripDetails";
import TripEdit from "./components/trip-edit/TripEdit";
import MyTrips from "./components/mytrips/MyTrips";
import MyWishlist from "./components/mywishlist/MyWishList";
import NotFound from "./components/not-found/NotFound";

function App() {
    return (
      <AuthProvider> 
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                
                {/* Guests only */}
                <Route path="/login" element={
                  <GuestRoute>
                      <Login />
                  </GuestRoute>
                } />
                <Route path="/register" element={
                  <GuestRoute>
                      <Register />
                  </GuestRoute>
                  } />
                
                {/* Guests & Private */}
                <Route path="/trips" element={<TripList />} />
                <Route path="/trips/:tripId/details" element={<TripDetails />} />
                
                {/* Private only */}
                <Route path="/trips/create" element={
                  <PrivateRoute>
                      <TripCreate />
                  </PrivateRoute>
                  } />
                <Route path="/trips/:tripId/edit" element={
                  <PrivateRoute>
                      <TripEdit />
                  </PrivateRoute>
                  } />
                <Route path="/trips/mytrips" element={
                  <PrivateRoute>
                      <MyTrips />
                  </PrivateRoute>
                  } />
                <Route path="trips/mywishlist" element={
                  <PrivateRoute>
                      <MyWishlist />
                  </PrivateRoute>
                  } />

                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </AuthProvider>
    );
}

export default App;
