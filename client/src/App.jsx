import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import TripList from "./components/trip-list/TripList";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import TripCreate from "./components/trip-create/TripCreate";
import TripEdit from "./components/trip-edit/TripEdit";
import TripDetails from "./components/trip-details/TripDetails";

function App() {

  return (
    <>
        <Header />
        <Home />
        <TripList />
        <TripCreate />
        <TripEdit />
        <TripDetails />
        <Login />
        <Register />
        <Footer />
    </>
  )
}

export default App
