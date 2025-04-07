import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import TripList from "./components/trip-list/TripList";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import TripCreate from "./components/trip-create/TripCreate";
import TripDetails from "./components/trip-details/TripDetails";

function App() {
    return (
        <>
            <Header /> 

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/trips" element={<TripList />} />
                <Route path="/trips/create" element={<TripCreate />} />
                <Route path="/trips/:tripId/details" element={<TripDetails />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
