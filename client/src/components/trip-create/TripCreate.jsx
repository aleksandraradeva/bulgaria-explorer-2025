import { useState } from "react";
import useForm from "../../hooks/useForm";
import { useCreateTrip } from "../../hooks/useTrips";
import { useNavigate } from "react-router-dom";
import useCreateTripValidation from "../../hooks/useFormValidation";

import TripForm from "../trip-form/TRipForm";
import ErrorModal from "../common/ErrorModal";

export default function TripCreate() {
    const [errorMessage, setErrorMessage] = useState(null);

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
    const { validate } = useCreateTripValidation(formData);
    const navigate = useNavigate();

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const error = validate();
        if (error) {
            setErrorMessage(error);
            return;
        }

        try {
            await createTrip(formData);
            resetForm();
            navigate("/trips");
            console.log("Trip created!");
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    return (
        <div className="form-container">
            {errorMessage && (
                <ErrorModal message={errorMessage} onClose={() => setErrorMessage(null)} />
            )}
			
            <TripForm 
				formData={formData} 
				formChangeHandler={formChangeHandler} 
				onSubmit={formSubmitHandler} 
				submitLabel="Create" />
        </div>
    );
}
