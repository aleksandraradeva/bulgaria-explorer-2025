import useForm from "../../hooks/useForm";
import { useCreateTrip } from "../../hooks/useTrips";
import { useNavigate } from "react-router-dom";

import TripForm from "../trip-form/TRipForm";

export default function TripCreate() {
    const initialValues = {
        name: "",
        location: "",
        description: "",
        bestTimeToVisit: "",
        category: "",
        image: "",
        price: "",
    };

    const { formData, formChangeHandler, resetForm } = useForm(initialValues);
    const { createTrip } = useCreateTrip();
    const navigate = useNavigate();

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await createTrip(formData);
            console.log(formData);
            resetForm();
            navigate("/trips");
            console.log("Trip created!");
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="form-container">
            <TripForm 
              formData={formData} 
              formChangeHandler={formChangeHandler} 
              onSubmit={formSubmitHandler} 
              submitLabel="Create" />
        </div>
 
    );
}
