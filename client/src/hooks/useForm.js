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

  return { formData, formChangeHandler, resetForm };
}