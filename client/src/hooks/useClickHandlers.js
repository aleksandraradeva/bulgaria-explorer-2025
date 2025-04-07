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
        navigate(`/trips/${tripId}/edit`);
    };

    return { deleteClickHandler };
}