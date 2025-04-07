import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuro, faHeart, faMapPin, faTag } from "@fortawesome/free-solid-svg-icons";

export default function TripListItem({
    id,
    name,
    image,
    location,
    category,
    price
}) {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="single-explore-item">
                {/* Image Section */}
                <div className="single-explore-img">
                    <img src={image} alt="Trip Image" />
                </div>

                {/* Text Section */}
                <div className="single-explore-txt">
                    <h2>{name}</h2>

                    {/* Location and Category */}
                    <div className="explore-location-category">
                        <span className="explore-location">
                            <FontAwesomeIcon icon={faMapPin} />{location}
                        </span>
                        <span className="explore-category">
                            <FontAwesomeIcon icon={faTag} />{category}
                        </span>
                        <span className="explore-category">
                            <FontAwesomeIcon icon={faEuro} />{price}
                        </span>
                    </div>

                    {/* Button for Details */}
                    <div className="explore-open-close-part">
                        <div className="row">
                            <div className="col-sm-12">
                                <Link to={`/trips/${id}/details`} className="close-btn">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
