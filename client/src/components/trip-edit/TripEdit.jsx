import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { useGetOneTrip, useUpdateTrip } from "../../hooks/useTrips";

import TripForm from "../trip-form/TRipForm";
import Spinner from "../spinner/Spinner";

export default function TripEdit() {
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
    const navigate = useNavigate();

    const { trip, isLoading, error } = useGetOneTrip(tripId);
    const { updateTrip } = useUpdateTrip();

    // When trip is loaded, populate the form
    useEffect(() => {
        if (trip) {
            populateFormData(trip);
        }
    }, [trip]);

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            // Update trip on server
            await updateTrip(tripId, formData);
            navigate(`/trips/${tripId}/details`);
        } catch (err) {
            console.error(err.message);
        }
    };

    if (isLoading) return <Spinner />;

    if (error) {
        return <h2 className="section-header">No trip found!</h2>;
    }

    return (
        <div className="form-container">
            <TripForm 
              formData={formData} 
              formChangeHandler={formChangeHandler} 
              onSubmit={formSubmitHandler} 
              submitLabel="Edit" />
        </div>
    );
}
