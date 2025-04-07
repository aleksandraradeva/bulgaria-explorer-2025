import useForm from "../../hooks/useForm";
import { useCreateTrip } from "../../hooks/useTrips";
import { useNavigate } from "react-router-dom";

export default function TripCreate() {
    const initialValues = {
        name: "",
        location: "",
        description: "",
        bestTimeToVisit: "",
        category: "",
        image: "",
        price: "",
    };

    const { formData, formChangeHandler, resetForm } = useForm(initialValues);
    const { createTrip } = useCreateTrip();
    const navigate = useNavigate();

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await createTrip(formData);
            console.log(formData)
            resetForm();
            navigate("/trips");
            console.log("Trip created!")
        } catch(err) {
          console.log(err.message)
        }
    };

    return (
        <div className="form-container">
            {/* Form in the center */}
            <form className="create-form" onSubmit={formSubmitHandler}>
                <h2>Create New Trip</h2>

                {/* Name of the Destination */}
                <div className="form-group">
                    <label htmlFor="name">Name of the Trip</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={formChangeHandler}
                        placeholder="Enter trip name"
                    />
                </div>

                {/* Location */}
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={formChangeHandler}
                        placeholder="Enter city or location"
                    />
                </div>

                {/* Description */}
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

                {/* Best Time to Visit */}
                <div className="form-group">
                    <label htmlFor="bestTimeToVisit">Best Time to Visit</label>
                    <input
                        type="text"
                        id="bestTimeToVisit"
                        name="bestTimeToVisit"
                        value={formData.bestTimeToVisit}
                        onChange={formChangeHandler}
                        placeholder="e.g., Summer (May to September)"
                    />
                </div>

                {/* Category */}
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

                {/* Image */}
                <div className="form-group">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={formChangeHandler}
                        placeholder="Enter image URL"
                    />
                </div>

                {/* Price/Entrance Fee */}
                <div className="form-group">
                    <label htmlFor="price">Price/Entrance Fee</label>

                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={formChangeHandler}
                        placeholder="Enter price in euro or entrance fee"
                    />
                </div>

                {/* Submit Button */}
                <div className="form-group">
                    <button type="submit" className="submit-btn">
                        Create Trip
                    </button>
                </div>
            </form>
        </div>
    );
}
