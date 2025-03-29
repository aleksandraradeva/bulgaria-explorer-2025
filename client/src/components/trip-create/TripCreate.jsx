export default function TripCreate() {
  
  return (
      <div className="form-container">

        {/* Form in the center */}
        <form className="create-form">
          <h2>Create New Trip</h2>
  
          {/* Name of the Destination */}
          <div className="form-group">
            <label htmlFor="name">Name of the Trip</label>
            <input
              type="text"
              id="name"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
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
              // value={formData.location}
              // onChange={handleChange}
              placeholder="Enter city or location"
            />
          </div>
  
          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              // value={formData.description}
              // onChange={handleChange}
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
              // value={formData.bestTimeToVisit}
              // onChange={handleChange}
              placeholder="e.g., Summer (May to September)"
            />
          </div>
  
          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              // value={formData.category}
              // onChange={handleChange}
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
              // value={formData.image}
              // onChange={handleChange}
              placeholder="Enter image URL or upload image"
            />
          </div>
  
          {/* Price/Entrance Fee */}
          <div className="form-group">
            <label htmlFor="price">Price/Entrance Fee</label>
            
            <input
              type="text"
              id="price"
              name="price"
              // value={formData.price}
              // onChange={handleChange}
              placeholder="Enter price or entrance fee"
            />
          </div>
  
          {/* Submit Button */}
          <div className="form-group">
            <button type="submit" className="submit-btn">Create Trip</button>
          </div>
        </form>
        
      </div>
    );
}