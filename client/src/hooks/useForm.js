import { useState } from "react";

export default function useForm (initialValues) {
  const [formData, setFormData] = useState(initialValues);

  const formChangeHandler = (e) => {
    setFormData(prevData => ({
        ...prevData,
        [e.target.name]: e.target.value
    }))
};

  const resetForm = () => setFormData(initialValues);

  const populateFormData = (trip) => setFormData(trip);

  return { formData, formChangeHandler, resetForm, populateFormData };
}