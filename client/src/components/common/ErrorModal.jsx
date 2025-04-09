export default function ErrorModal({ message, onClose }) {
    if (!message) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}