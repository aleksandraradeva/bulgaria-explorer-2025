import { useNavigate } from "react-router-dom";

export function useEditClickHandler() {
    const navigate = useNavigate();

    const editClickHandler = (tripId) => {
        navigate(`/trips/${tripId}/edit`);
    };

    return { editClickHandler };
}

export function useDeleteClickHandler() {
    const navigate = useNavigate();

    const deleteClickHandler = (tripId) => {
        navigate(`/trips/${tripId}/delete`);
    };

    return { deleteClickHandler };
}

export function useNavigateToCatalog() {
    const navigate = useNavigate();

    const navigateToCatalog = () => {
        navigate("/trips");
    };

    return { navigateToCatalog };
}