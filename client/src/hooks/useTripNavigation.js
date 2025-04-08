import { useNavigate } from "react-router-dom";

export function useTripNavigation() {
    const navigate = useNavigate();

    const goToEdit = (tripId) => navigate(`/trips/${tripId}/edit`);
    const goToCatalog = () => navigate("/trips");

    return { goToEdit, goToCatalog };
}