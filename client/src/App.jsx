import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

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
import NotFound from "./components/not-found/NotFound";

function App() {
    return (
      <AuthProvider> 
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/trips" element={<TripList />} />
                <Route path="/trips/create" element={<TripCreate />} />
                <Route path="/trips/:tripId/details" element={<TripDetails />} />
                <Route path="/trips/:tripId/edit" element={<TripEdit />} />
                <Route path="/trips/mytrips" element={<MyTrips />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </AuthProvider>
    );
}

export default App;
