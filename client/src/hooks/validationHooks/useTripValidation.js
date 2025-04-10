export default function useTripValidation(formData) {
    const validate = () => {
        const requiredFields = ["name", "location", "description", "bestTimeToVisit", "category", "image", "price"];

        for (let field of requiredFields) {
            if (!formData[field] || formData[field].trim() === "") {
                return `Please fill out the ${field} field.`;
            }
        }

        if (formData.description.length < 20) {
            return "Description must be at least 20 characters long.";
        }

        if (formData.name.length < 3) {
            return "Name must be at least 3 characters long.";
        }

        if (formData.location.length < 3) {
            return "Location must be at least 3 characters long.";
        }

        if (formData.bestTimeToVisit.length < 3) {
            return "Location must be at least 3 characters long.";
        }

        if (!/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(formData.image)) {
            return "Please enter a valid image URL.";
        }
        return null;
    };

    return { validate };
}
