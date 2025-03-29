import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faTag, faCalendarAlt, faEuro, faHeart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function TripDetails() {
  const [formData, setFormData] = useState({
    name: "Rila Monastery",
    location: "Sofia, Bulgaria",
    description: "A UNESCO World Heritage Site located in the Rila Mountains, Bulgaria. Built in the 10th century, it represents the best of Bulgarian cultural and architectural traditions. The monastery complex contains valuable examples of Bulgarian Renaissance architecture, with colorful frescoes and unique wooden carvings.",
    bestTimeToVisit: "Summer (May - September)",
    category: "Cultural",
    image: "assets/images/explore/e1.jpg",
    price: "5€ - 10€",
  });

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="trip-details-page">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <h2>{formData.name}</h2>
          <div className="trip-meta">
            <p className="trip-location">
              <FontAwesomeIcon icon={faMapPin} /> {formData.location}
            </p>
            <div className="trip-category">
              <FontAwesomeIcon icon={faTag} /> {formData.category}
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="trip-body">
          {/* Image Section */}
          <div className="trip-image">
            <div className="image-wrapper">
              <img src="https://cdn.pixabay.com/photo/2020/03/05/20/10/rila-4905350_960_720.jpg" alt={formData.name} />
              <button 
                className={`favorite-btn ${favorite ? 'active' : ''}`} 
                onClick={toggleFavorite}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>

          {/* Description Section */}
          <div className="trip-content">
            <div className="trip-description">
              <h3>About {formData.name}</h3>
              <p>{formData.description}</p>
            </div>

            {/* Additional Information */}
            <div className="additional-info">
              <div className="info-item">
                <FontAwesomeIcon icon={faCalendarAlt} /> 
                <div className="info-content">
                  <strong>Best Time to Visit:</strong> 
                  <span>{formData.bestTimeToVisit}</span>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faEuro} /> 
                <div className="info-content">
                  <strong>Entrance Fee:</strong> 
                  <span>{formData.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="trip-actions">
            <button className="action-btn back-btn">
              <FontAwesomeIcon icon={faArrowLeft} /> Back to All Trips
            </button>
            <div className="admin-actions">
              <button className="action-btn edit-btn">Edit</button>
              <button className="action-btn delete-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}