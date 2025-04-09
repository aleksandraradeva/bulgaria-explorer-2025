export default function ConfirmModal({ message, onConfirm, onCancel }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>{message}</p>
                <div className="modal-actions">
                    <div>
                    <button className="confirm-btn" onClick={onConfirm}>Yes</button> 
                    </div>
                    <div>
                    <button className="cancel-btn" onClick={onCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}