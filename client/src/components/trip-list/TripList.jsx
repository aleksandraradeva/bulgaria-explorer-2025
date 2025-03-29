import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuro, faHeart, faMapPin, faTag } from "@fortawesome/free-solid-svg-icons";

export default function TripList() {
    return (
        <section id="explore" className="explore">
            <div className="container">
                <div className="section-header">
                    <h2>Explore</h2>
                    <p>Discover fascinating places, culture, and much more in Bulgaria.</p>
                </div>

                <div className="explore-content">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="single-explore-item">
                                {/* Image Section */}
                                <div className="single-explore-img">
                                    <img src="https://cdn.pixabay.com/photo/2020/03/05/20/10/rila-4905350_960_720.jpg" alt="Trip Image" />
                                </div>

                                {/* Text Section */}
                                <div className="single-explore-txt">
                                    <h2>Rila Monastery</h2>

                                    {/* Location and Category */}
                                    <div className="explore-location-category">
                                        <span className="explore-location">
                                            <FontAwesomeIcon icon={faMapPin} /> Sofia, Bulgaria
                                        </span>
                                        <span className="explore-category">
                                            <FontAwesomeIcon icon={faTag} /> Culture
                                        </span>
                                        <span className="explore-category">
                                            <FontAwesomeIcon icon={faEuro} /> Entrance free
                                        </span>
                                    </div>

                                    {/* Button for Details */}
                                    <div className="explore-open-close-part">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <button className="close-btn">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
