export default function useRegisterValidation(formData) {
    const validate = () => {
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            return "Please enter a valid email.";
        }

        if (!formData.password || formData.password.length < 6) {
            return "Password must be at least 6 characters long.";
        }

        if (formData.password !== formData.confirmPassword) {
            return "Passwords do not match.";
        }

        return null;
    };

    return { validate };
}