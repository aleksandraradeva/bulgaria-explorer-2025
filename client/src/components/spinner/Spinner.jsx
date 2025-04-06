export default function Spinner() {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <div className="spinner-outer-circle"></div>
                <div className="spinner-arc"></div>
                <div className="spinner-center">
                    <div className="spinner-dot"></div>
                </div>
            </div>
        </div>
    );
}
