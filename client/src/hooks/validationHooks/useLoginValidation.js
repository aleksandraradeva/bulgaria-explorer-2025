export default function useLoginValidation(formData) {
    const validate = () => {
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            return "Please enter a valid email.";
        }

        if (!formData.password || formData.password.length < 6) {
            return "Password must be at least 6 characters long.";
        }

        return null;
    };

    return { validate };
}