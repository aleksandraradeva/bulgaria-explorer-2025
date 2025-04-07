export default function TripForm({ formData, formChangeHandler, onSubmit, submitLabel }) {
    return (
        <div className="form-container">
        <form className="create-form" onSubmit={onSubmit}>
            <h2>{submitLabel} Trip</h2>

            {/* Text Inputs */}
            {[
                { name: "name", label: "Name of the Trip", placeholder: "Enter trip name" },
                { name: "location", label: "Location", placeholder: "Enter the location (e.g., city or region)" },
                { name: "bestTimeToVisit", label: "Best Time to Visit", placeholder: "e.g., Summer (May to September)" },
                { name: "image", label: "Image URL", placeholder: "Enter image URL" },
                { name: "price", label: "Price/Entrance Fee", placeholder: "Enter price in euro or entrance free" },
            ].map(({ name, label, placeholder }) => (
                <div className="form-group" key={name}>
                    <label htmlFor={name}>{label}</label>
                    <input
                        type="text"
                        id={name}
                        name={name}
                        value={formData[name]}
                        onChange={formChangeHandler}
                        placeholder={placeholder} 
                    />
                </div>
            ))}

            {/* Textarea */}
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={formChangeHandler}
                    placeholder="Provide a short description"
                />
            </div>

            {/* Select Dropdown */}
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={formChangeHandler}
                >
                    <option value="">Select Category</option>
                    <option value="Culture">Culture</option>
                    <option value="Nature">Nature</option>
                    <option value="Historical">Historical</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Religious">Religious</option>
                    <option value="Beaches">Beaches</option>
                    <option value="Villages & Traditions">Villages & Traditions</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Wine & Culinary">Wine & Culinary</option>
                    <option value="Spa & Wellness">Spa & Wellness</option>
                </select>
            </div>

            
            {/* Submit Button */}
            <div className="form-group">
                <button type="submit" className="submit-btn">
                    {submitLabel} Trip
                </button>
            </div>
        </form>
        </div>
    );
}