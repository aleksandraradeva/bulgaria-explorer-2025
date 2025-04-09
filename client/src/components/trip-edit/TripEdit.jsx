import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { useGetOneTrip, useUpdateTrip } from "../../hooks/useTrips";
import useTripValidation from "../../hooks/useTripValidation";

import TripForm from "../trip-form/TRipForm";
import Spinner from "../spinner/Spinner";
import ErrorModal from "../common/ErrorModal";

export default function TripEdit() {
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

    const { tripId } = useParams();
    const { formData, formChangeHandler, resetForm, populateFormData } = useForm(initialValues);
	const { validate } = useTripValidation(formData);
    const navigate = useNavigate();

    const { trip, isLoading, error } = useGetOneTrip(tripId);
    const { updateTrip } = useUpdateTrip();

    useEffect(() => {
        if (trip) {
            populateFormData(trip);
        }
    }, [trip]);

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const error = validate();
        if (error) {
            setErrorMessage(error);
            return;
        }

        try {
            await updateTrip(tripId, formData);
            navigate(`/trips/${tripId}/details`);
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    if (isLoading) return <Spinner />;
    if (error) return <h2 className="section-header">No trip found!</h2>;

    return (
        <div className="form-container">
            {errorMessage && (
                <ErrorModal message={errorMessage} onClose={() => setErrorMessage(null)} />
            )}

            <TripForm 
                formData={formData}
                formChangeHandler={formChangeHandler}
                onSubmit={formSubmitHandler}
                submitLabel="Edit"
            />
        </div>
    );
}
